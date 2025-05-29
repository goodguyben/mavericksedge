
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

interface Neuron {
  id: string;
  position: THREE.Vector3;
  targetPosition: THREE.Vector3;
  velocity: THREE.Vector3;
  radius: number;
  activity: number;
  type: 'input' | 'processing' | 'reasoning' | 'output';
  connections: string[];
  pulsePhase: number;
  lastActivation: number;
  energy: number;
  glowIntensity: number;
  learningRate: number;
  weight: number;
  bias: number;
  evolutionStage: number;
  llmAffinity: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'neutral';
  mesh?: THREE.Mesh;
  glowMesh?: THREE.Mesh;
}

interface Signal {
  id: string;
  from: string;
  to: string;
  progress: number;
  strength: number;
  color: THREE.Color;
  trail: THREE.Vector3[];
  frequency: number;
  amplitude: number;
  dataType: 'query' | 'reasoning' | 'response' | 'knowledge';
  processingTime: number;
  llmSource: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'hybrid';
  mesh?: THREE.Mesh;
  line?: THREE.Line;
}

interface Particle {
  id: string;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  size: number;
  color: THREE.Color;
  type: 'token' | 'thought' | 'response' | 'knowledge';
  spin: number;
  frequency: number;
  llmType: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'neutral';
  mesh?: THREE.Mesh;
}

interface LLMNode {
  id: string;
  position: THREE.Vector3;
  type: 'chatgpt' | 'gemini' | 'grok' | 'claude';
  activity: number;
  size: number;
  connections: string[];
  processingLoad: number;
  lastQuery: number;
  responseTime: number;
  expertise: string[];
  mesh?: THREE.Mesh;
  glowMesh?: THREE.Mesh;
  processingRings?: THREE.Mesh[];
}

interface AIWebGL3DBackgroundProps {
  className?: string;
  neuronCount?: {
    input?: number;
    processing?: number;
    reasoning?: number;
    output?: number;
  };
  showGrid?: boolean;
  showLabels?: boolean;
  showParticles?: boolean;
  colorScheme?: 'default' | 'blue' | 'purple' | 'green';
  allowLLMSelection?: boolean;
}

// Animation Configuration Constants
const ANIMATION_CONFIG = {
  // Physics constants
  NEURON_RETURN_FORCE: 0.006,
  PARTICLE_DAMPING: 0.98,
  NEURON_DAMPING: 0.95,
  SIGNAL_SPEED_BASE: 0.015,
  SIGNAL_SPEED_VARIANCE: 0.012,
  
  // Decay rates
  NEURON_ACTIVITY_DECAY: 0.004,
  NEURON_ENERGY_DECAY: 0.003,
  NEURON_GLOW_DECAY: 0.985,
  LLM_ACTIVITY_DECAY: 0.995,
  LLM_PROCESSING_DECAY: 0.992,
  GLOBAL_STATE_DECAY: 0.995,
  
  // Firing rates
  BASE_FIRE_RATE: 0.0005,
  LLM_FIRE_BOOST: 1.3,
  AUTONOMOUS_LLM_FIRE_RATE: 0.0008,
  
  // Visual constants
  GLOW_INTENSITY_MIN: 0.1,
  ACTIVITY_THRESHOLD: 0.4,
  PULSE_SPEED: 0.01,
  ACTIVITY_PULSE_SPEED: 0.02,
  
  // Interaction constants
  INTERACTION_RADIUS_BASE: 5,
  INTERACTION_RADIUS_CLICK: 8,
  LLM_INTERACTION_RADIUS: 6,
  LLM_INTERACTION_RADIUS_CLICK: 10,
  VELOCITY_DAMPING: 0.85,
  MOUSE_TRAIL_LENGTH: 20,
  
  // 3D specific constants
  CAMERA_DISTANCE: 25,
  CAMERA_HEIGHT: 5,
  SCENE_DEPTH: 20,
  LAYER_SPACING: 8,
  NEURON_SPACING_MIN: 2.5,
  NEURON_SIZE_BASE: 0.15,
  LLM_NODE_SIZE_BASE: 0.8,
  GRID_SIZE: 50,
  
  // Lighting
  AMBIENT_LIGHT_INTENSITY: 0.3,
  DIRECTIONAL_LIGHT_INTENSITY: 0.8,
  POINT_LIGHT_INTENSITY: 1.2
};

// Color Configuration
const COLORS = {
  llm: {
    chatgpt: new THREE.Color(0x10A37F),
    gemini: new THREE.Color(0x4285F4),
    grok: new THREE.Color(0x1DA1F2),
    claude: new THREE.Color(0xFF6B35),
    hybrid: new THREE.Color(0x9D4EDD)
  },
  neural: {
    input: new THREE.Color(0x00FF80),
    processing: new THREE.Color(0x40E0FF),
    reasoning: new THREE.Color(0x9D4EDD),
    output: new THREE.Color(0xFF8040)
  },
  connection: new THREE.Color(0x40E0FF),
  background: new THREE.Color(0x0A0A0F),
  particle: new THREE.Color(0x00FFFF)
};

export default function AIWebGL3DBackground({ 
  className = '',
  neuronCount = {
    input: 10,
    processing: 15,
    reasoning: 12,
    output: 8
  },
  showGrid = true,
  showLabels = true,
  showParticles = true,
  colorScheme = 'default',
  allowLLMSelection = true
}: AIWebGL3DBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationRef = useRef<number>();
  
  const neuronsRef = useRef<Map<string, Neuron>>(new Map());
  const signalsRef = useRef<Map<string, Signal>>(new Map());
  const particlesRef = useRef<Map<string, Particle>>(new Map());
  const llmNodesRef = useRef<Map<string, LLMNode>>(new Map());
  
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    isActive: false, 
    clicked: false,
    raycaster: new THREE.Raycaster(),
    mouse: new THREE.Vector2()
  });
  
  const [isLoaded, setIsLoaded] = useState(false);
  const lastTimeRef = useRef(0);
  
  const globalProcessingStateRef = useRef({
    activeQueries: 0,
    processingLoad: 0,
    responseGeneration: false,
    multiModalActive: false,
    currentLLM: 'hybrid' as 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'hybrid'
  });

  // Create materials with shaders for enhanced effects
  const createNeuronMaterial = useCallback((type: Neuron['type'], llmAffinity: Neuron['llmAffinity']) => {
    const baseColor = llmAffinity !== 'neutral' ? COLORS.llm[llmAffinity] : COLORS.neural[type];
    
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        activity: { value: 0 },
        glowIntensity: { value: 0 },
        baseColor: { value: baseColor },
        pulsePhase: { value: 0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float time;
        uniform float activity;
        uniform float pulsePhase;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          
          vec3 pos = position;
          float pulse = sin(pulsePhase + time * 2.0) * 0.1 * activity;
          pos += normal * pulse;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float activity;
        uniform float glowIntensity;
        uniform vec3 baseColor;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          float glow = glowIntensity + activity * 0.5;
          
          vec3 color = baseColor;
          color += fresnel * glow * 0.8;
          color += activity * vec3(1.0, 1.0, 1.0) * 0.3;
          
          float alpha = 0.8 + activity * 0.2;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
  }, []);

  const createLLMNodeMaterial = useCallback((type: LLMNode['type']) => {
    const baseColor = COLORS.llm[type];
    
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        activity: { value: 0 },
        processingLoad: { value: 0 },
        baseColor: { value: baseColor }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float time;
        uniform float activity;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          
          vec3 pos = position;
          float pulse = sin(time * 3.0) * 0.05 * activity;
          pos += normal * pulse;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float activity;
        uniform float processingLoad;
        uniform vec3 baseColor;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5);
          
          vec3 color = baseColor;
          color += fresnel * activity * 0.6;
          color += processingLoad * vec3(0.2, 0.2, 0.2);
          
          // Add processing indicator
          float rings = sin(length(vPosition.xy) * 10.0 - time * 5.0) * 0.5 + 0.5;
          color += rings * processingLoad * 0.3;
          
          float alpha = 0.9 + activity * 0.1;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true
    });
  }, []);

  // Initialize Three.js scene
  const initThreeJS = useCallback(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = COLORS.background;
    scene.fog = new THREE.Fog(COLORS.background, 10, 50);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, ANIMATION_CONFIG.CAMERA_HEIGHT, ANIMATION_CONFIG.CAMERA_DISTANCE);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, ANIMATION_CONFIG.AMBIENT_LIGHT_INTENSITY);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, ANIMATION_CONFIG.DIRECTIONAL_LIGHT_INTENSITY);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Point lights for ambiance
    const pointLight1 = new THREE.PointLight(COLORS.neural.processing, ANIMATION_CONFIG.POINT_LIGHT_INTENSITY, 30);
    pointLight1.position.set(-10, 5, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(COLORS.neural.reasoning, ANIMATION_CONFIG.POINT_LIGHT_INTENSITY, 30);
    pointLight2.position.set(10, 5, 10);
    scene.add(pointLight2);

    // Grid
    if (showGrid) {
      const gridHelper = new THREE.GridHelper(ANIMATION_CONFIG.GRID_SIZE, 50, 0x40E0FF, 0x40E0FF);
      gridHelper.material.opacity = 0.1;
      gridHelper.material.transparent = true;
      scene.add(gridHelper);
    }

    return { scene, camera, renderer };
  }, [showGrid]);

  // Create 3D neural network
  const createNeuralNetwork = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const neurons = new Map<string, Neuron>();
    const llmNodes = new Map<string, LLMNode>();

    // Create 4 layers of neurons in 3D space
    const layers = [
      { type: 'input' as const, count: neuronCount.input || 10, x: -12 },
      { type: 'processing' as const, count: neuronCount.processing || 15, x: -4 },
      { type: 'reasoning' as const, count: neuronCount.reasoning || 12, x: 4 },
      { type: 'output' as const, count: neuronCount.output || 8, x: 12 }
    ];

    const llmAffinities: Neuron['llmAffinity'][] = ['chatgpt', 'gemini', 'grok', 'claude', 'neutral'];

    // Create neurons
    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        const neuronId = `neuron-${layerIndex}-${i}`;
        
        // Position neurons in 3D grid
        const y = (i - layer.count / 2) * ANIMATION_CONFIG.NEURON_SPACING_MIN + (Math.random() - 0.5) * 2;
        const z = (Math.random() - 0.5) * ANIMATION_CONFIG.SCENE_DEPTH;
        const position = new THREE.Vector3(layer.x, y, z);
        
        const llmAffinity = llmAffinities[Math.floor(Math.random() * llmAffinities.length)];
        
        // Create neuron geometry and material
        const geometry = new THREE.SphereGeometry(ANIMATION_CONFIG.NEURON_SIZE_BASE, 16, 16);
        const material = createNeuronMaterial(layer.type, llmAffinity);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(position);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);

        // Create glow effect
        const glowGeometry = new THREE.SphereGeometry(ANIMATION_CONFIG.NEURON_SIZE_BASE * 1.5, 8, 8);
        const glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            glowColor: { value: llmAffinity !== 'neutral' ? COLORS.llm[llmAffinity] : COLORS.neural[layer.type] },
            intensity: { value: 0 }
          },
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 glowColor;
            uniform float intensity;
            varying vec3 vNormal;
            void main() {
              float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(glowColor, fresnel * intensity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        glowMesh.position.copy(position);
        scene.add(glowMesh);

        const neuron: Neuron = {
          id: neuronId,
          position: position.clone(),
          targetPosition: position.clone(),
          velocity: new THREE.Vector3(),
          radius: ANIMATION_CONFIG.NEURON_SIZE_BASE,
          activity: Math.random() * 0.3,
          type: layer.type,
          connections: [],
          pulsePhase: Math.random() * Math.PI * 2,
          lastActivation: 0,
          energy: Math.random() * 0.5,
          glowIntensity: 0,
          learningRate: 0.002 + Math.random() * 0.008,
          weight: Math.random() * 2 - 1,
          bias: Math.random() * 0.4 - 0.2,
          evolutionStage: 0,
          llmAffinity,
          mesh,
          glowMesh
        };

        neurons.set(neuronId, neuron);
      }
    });

    // Create LLM nodes in a circle around the network
    const llmTypes: LLMNode['type'][] = ['chatgpt', 'gemini', 'grok', 'claude'];
    llmTypes.forEach((type, index) => {
      const angle = (index / llmTypes.length) * Math.PI * 2;
      const radius = 18;
      const position = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.3,
        Math.sin(angle) * radius * 0.5
      );

      // Create LLM node geometry
      const geometry = new THREE.SphereGeometry(ANIMATION_CONFIG.LLM_NODE_SIZE_BASE, 32, 32);
      const material = createLLMNodeMaterial(type);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.castShadow = true;
      scene.add(mesh);

      // Create glow effect
      const glowGeometry = new THREE.SphereGeometry(ANIMATION_CONFIG.LLM_NODE_SIZE_BASE * 1.3, 16, 16);
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: COLORS.llm[type] },
          intensity: { value: 0.3 }
        },
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          uniform float intensity;
          varying vec3 vNormal;
          void main() {
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5);
            gl_FragColor = vec4(glowColor, fresnel * intensity);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.copy(position);
      scene.add(glowMesh);

      const llmNode: LLMNode = {
        id: `llm-${type}`,
        position: position.clone(),
        type,
        activity: Math.random() * 0.3,
        size: ANIMATION_CONFIG.LLM_NODE_SIZE_BASE,
        connections: [],
        processingLoad: 0,
        lastQuery: 0,
        responseTime: 50 + Math.random() * 100,
        expertise: [],
        mesh,
        glowMesh,
        processingRings: []
      };

      llmNodes.set(llmNode.id, llmNode);
    });

    // Create connections between adjacent layers
    const neuronArray = Array.from(neurons.values());
    const layerSizes = layers.map(l => l.count);
    let currentIndex = 0;

    layers.forEach((layer, layerIndex) => {
      if (layerIndex < layers.length - 1) {
        const nextLayerStart = currentIndex + layer.count;
        
        for (let i = 0; i < layer.count; i++) {
          const neuronId = `neuron-${layerIndex}-${i}`;
          const neuron = neurons.get(neuronId);
          if (!neuron) continue;

          // Connect to next layer neurons
          const connectionsCount = Math.min(3, layerSizes[layerIndex + 1]);
          for (let j = 0; j < connectionsCount; j++) {
            const targetIndex = nextLayerStart + Math.floor((i / layer.count) * layerSizes[layerIndex + 1] + j) % layerSizes[layerIndex + 1];
            const targetId = `neuron-${layerIndex + 1}-${Math.floor(targetIndex - nextLayerStart)}`;
            neuron.connections.push(targetId);
          }
        }
      }
      currentIndex += layer.count;
    });

    neuronsRef.current = neurons;
    llmNodesRef.current = llmNodes;
  }, [neuronCount, createNeuronMaterial, createLLMNodeMaterial]);

  // Create particles
  const createParticle = useCallback((position: THREE.Vector3, type: Particle['type'] = 'token', llmType: Particle['llmType'] = 'neutral') => {
    const scene = sceneRef.current;
    if (!scene) return;

    const particleId = `particle-${Date.now()}-${Math.random()}`;
    const geometry = new THREE.SphereGeometry(0.05, 8, 8);
    const color = llmType !== 'neutral' ? COLORS.llm[llmType] : COLORS.particle;
    const material = new THREE.MeshBasicMaterial({ 
      color, 
      transparent: true, 
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    scene.add(mesh);

    const particle: Particle = {
      id: particleId,
      position: position.clone(),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      ),
      life: 60 + Math.random() * 40,
      maxLife: 60 + Math.random() * 40,
      size: 0.05 + Math.random() * 0.03,
      color,
      type,
      spin: Math.random() * 0.1,
      frequency: 0.02 + Math.random() * 0.04,
      llmType,
      mesh
    };

    particlesRef.current.set(particleId, particle);
  }, []);

  // Create signal
  const createSignal = useCallback((fromId: string, toId: string, strength: number, llmSource: Signal['llmSource']) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const fromNeuron = neuronsRef.current.get(fromId);
    const toNeuron = neuronsRef.current.get(toId);
    if (!fromNeuron || !toNeuron) return;

    const signalId = `signal-${fromId}-${toId}-${Date.now()}`;
    const color = COLORS.llm[llmSource] || COLORS.connection;

    // Create signal trail line
    const points = [];
    for (let i = 0; i <= 10; i++) {
      points.push(fromNeuron.position.clone());
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color, 
      transparent: true, 
      opacity: 0.6,
      linewidth: 2
    });
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    const signal: Signal = {
      id: signalId,
      from: fromId,
      to: toId,
      progress: 0,
      strength,
      color,
      trail: [fromNeuron.position.clone()],
      frequency: 0.025 + Math.random() * 0.02,
      amplitude: strength,
      dataType: ['query', 'reasoning', 'response', 'knowledge'][Math.floor(Math.random() * 4)] as Signal['dataType'],
      processingTime: 0,
      llmSource,
      line
    };

    signalsRef.current.set(signalId, signal);
  }, []);

  // Update functions
  const updateNeurons = useCallback((deltaTime: number, currentTime: number) => {
    neuronsRef.current.forEach((neuron) => {
      // Update physics
      neuron.pulsePhase += (ANIMATION_CONFIG.PULSE_SPEED + neuron.activity * ANIMATION_CONFIG.ACTIVITY_PULSE_SPEED) * deltaTime;

      // Return to target position
      const returnForce = ANIMATION_CONFIG.NEURON_RETURN_FORCE * (1 + neuron.learningRate * 5);
      const diff = neuron.targetPosition.clone().sub(neuron.position);
      neuron.velocity.add(diff.multiplyScalar(returnForce * deltaTime));

      // Apply damping
      neuron.velocity.multiplyScalar(Math.pow(ANIMATION_CONFIG.NEURON_DAMPING, deltaTime));
      neuron.position.add(neuron.velocity.clone().multiplyScalar(deltaTime));

      // Update activity and energy
      const timeSinceActivation = currentTime - neuron.lastActivation;
      if (timeSinceActivation > 100) {
        neuron.activity = Math.max(0.02, neuron.activity * Math.pow(1 - ANIMATION_CONFIG.NEURON_ACTIVITY_DECAY, deltaTime));
        neuron.energy = Math.max(0.05, neuron.energy * Math.pow(1 - ANIMATION_CONFIG.NEURON_ENERGY_DECAY, deltaTime));
        neuron.glowIntensity = Math.max(0, neuron.glowIntensity * Math.pow(ANIMATION_CONFIG.NEURON_GLOW_DECAY, deltaTime));
      }

      // Update mesh position and material
      if (neuron.mesh) {
        neuron.mesh.position.copy(neuron.position);
        const material = neuron.mesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = currentTime * 0.001;
          material.uniforms.activity.value = neuron.activity;
          material.uniforms.glowIntensity.value = neuron.glowIntensity;
          material.uniforms.pulsePhase.value = neuron.pulsePhase;
        }
      }

      if (neuron.glowMesh) {
        neuron.glowMesh.position.copy(neuron.position);
        const material = neuron.glowMesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.intensity.value = neuron.glowIntensity;
        }
      }

      // Autonomous firing
      const llmBoost = neuron.llmAffinity !== 'neutral' ? ANIMATION_CONFIG.LLM_FIRE_BOOST : 1.0;
      const fireRate = ANIMATION_CONFIG.BASE_FIRE_RATE * llmBoost * (1 + neuron.energy);

      if (Math.random() < fireRate * deltaTime) {
        neuron.activity = Math.min(1, neuron.activity + 0.25);
        neuron.lastActivation = currentTime;

        // Create signals to connected neurons
        neuron.connections.forEach(targetId => {
          if (Math.random() > 0.3) {
            createSignal(neuron.id, targetId, neuron.activity * 0.8, neuron.llmAffinity !== 'neutral' ? neuron.llmAffinity : 'claude');
          }
        });
      }
    });
  }, [createSignal]);

  const updateLLMNodes = useCallback((deltaTime: number, currentTime: number) => {
    llmNodesRef.current.forEach((llmNode) => {
      // Update activity and processing load
      llmNode.activity *= Math.pow(ANIMATION_CONFIG.LLM_ACTIVITY_DECAY, deltaTime);
      llmNode.processingLoad *= Math.pow(ANIMATION_CONFIG.LLM_PROCESSING_DECAY, deltaTime);

      // Autonomous activation
      if (Math.random() < ANIMATION_CONFIG.AUTONOMOUS_LLM_FIRE_RATE * deltaTime) {
        llmNode.activity = Math.min(1, llmNode.activity + 0.4);
        llmNode.processingLoad = Math.min(1, llmNode.processingLoad + 0.5);
        llmNode.lastQuery = currentTime;

        if (showParticles) {
          createParticle(llmNode.position, 'thought', llmNode.type);
        }
      }

      // Update mesh and materials
      if (llmNode.mesh) {
        const material = llmNode.mesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = currentTime * 0.001;
          material.uniforms.activity.value = llmNode.activity;
          material.uniforms.processingLoad.value = llmNode.processingLoad;
        }
      }

      if (llmNode.glowMesh) {
        const material = llmNode.glowMesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.intensity.value = 0.3 + llmNode.activity * 0.7;
        }
      }
    });
  }, [createParticle, showParticles]);

  const updateSignals = useCallback((deltaTime: number, currentTime: number) => {
    const signalsToRemove: string[] = [];

    signalsRef.current.forEach((signal) => {
      signal.progress += ANIMATION_CONFIG.SIGNAL_SPEED_BASE * deltaTime * (1 + signal.frequency * 30);
      signal.processingTime += deltaTime;

      const fromNeuron = neuronsRef.current.get(signal.from);
      const toNeuron = neuronsRef.current.get(signal.to);

      if (!fromNeuron || !toNeuron) {
        signalsToRemove.push(signal.id);
        return;
      }

      if (signal.progress >= 1) {
        // Signal completed
        toNeuron.activity = Math.min(1, toNeuron.activity + signal.strength * 0.4);
        toNeuron.energy = Math.min(1, toNeuron.energy + signal.strength * 0.3);
        toNeuron.lastActivation = currentTime;
        toNeuron.glowIntensity = Math.max(toNeuron.glowIntensity, signal.strength * 0.7);

        if (showParticles) {
          createParticle(toNeuron.position, 'response', signal.llmSource);
        }

        signalsToRemove.push(signal.id);
        return;
      }

      // Update signal position along path
      const currentPos = fromNeuron.position.clone().lerp(toNeuron.position, signal.progress);
      
      // Add some wave motion
      const perpendicular = new THREE.Vector3().crossVectors(
        toNeuron.position.clone().sub(fromNeuron.position).normalize(),
        new THREE.Vector3(0, 1, 0)
      );
      const wave = Math.sin(signal.processingTime * signal.frequency * 80) * signal.amplitude * 0.3;
      currentPos.add(perpendicular.multiplyScalar(wave));

      signal.trail.push(currentPos);
      if (signal.trail.length > 8) {
        signal.trail.shift();
      }

      // Update line geometry
      if (signal.line) {
        const positions = [];
        signal.trail.forEach((point, index) => {
          const opacity = (index + 1) / signal.trail.length;
          positions.push(point.x, point.y, point.z);
        });
        signal.line.geometry.setFromPoints(signal.trail);
        
        const material = signal.line.material as THREE.LineBasicMaterial;
        material.opacity = signal.strength * 0.8;
      }
    });

    // Remove completed signals
    signalsToRemove.forEach(id => {
      const signal = signalsRef.current.get(id);
      if (signal?.line && sceneRef.current) {
        sceneRef.current.remove(signal.line);
        signal.line.geometry.dispose();
        (signal.line.material as THREE.Material).dispose();
      }
      signalsRef.current.delete(id);
    });
  }, [createParticle, showParticles]);

  const updateParticles = useCallback((deltaTime: number) => {
    const particlesToRemove: string[] = [];

    particlesRef.current.forEach((particle) => {
      // Update physics
      particle.position.add(particle.velocity.clone().multiplyScalar(deltaTime));
      particle.velocity.multiplyScalar(Math.pow(ANIMATION_CONFIG.PARTICLE_DAMPING, deltaTime));
      particle.life -= deltaTime;

      // Update mesh
      if (particle.mesh) {
        particle.mesh.position.copy(particle.position);
        particle.mesh.rotation.x += particle.spin * deltaTime;
        particle.mesh.rotation.y += particle.spin * deltaTime;
        
        const material = particle.mesh.material as THREE.MeshBasicMaterial;
        material.opacity = particle.life / particle.maxLife;
      }

      if (particle.life <= 0) {
        particlesToRemove.push(particle.id);
      }
    });

    // Remove dead particles
    particlesToRemove.forEach(id => {
      const particle = particlesRef.current.get(id);
      if (particle?.mesh && sceneRef.current) {
        sceneRef.current.remove(particle.mesh);
        particle.mesh.geometry.dispose();
        (particle.mesh.material as THREE.Material).dispose();
      }
      particlesRef.current.delete(id);
    });
  }, []);

  // Handle interactions
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!mountRef.current || !cameraRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    mouseRef.current.raycaster.setFromCamera(mouseRef.current.mouse, cameraRef.current);

    // Check intersections with neurons and LLM nodes
    const neuronMeshes = Array.from(neuronsRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const llmMeshes = Array.from(llmNodesRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const allMeshes = [...neuronMeshes, ...llmMeshes];

    const intersects = mouseRef.current.raycaster.intersectObjects(allMeshes);

    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object as THREE.Mesh;
      
      // Find corresponding neuron or LLM node
      neuronsRef.current.forEach(neuron => {
        if (neuron.mesh === intersectedMesh) {
          const influence = 0.02;
          neuron.activity = Math.min(1, neuron.activity + influence);
          neuron.glowIntensity = Math.max(neuron.glowIntensity, influence * 0.8);
          
          if (showParticles && Math.random() > 0.9) {
            createParticle(neuron.position, 'thought', neuron.llmAffinity);
          }
        }
      });

      llmNodesRef.current.forEach(llmNode => {
        if (llmNode.mesh === intersectedMesh) {
          const influence = 0.03;
          llmNode.activity = Math.min(1, llmNode.activity + influence);
          llmNode.processingLoad = Math.max(llmNode.processingLoad, influence * 0.9);
          
          if (showParticles && Math.random() > 0.85) {
            createParticle(llmNode.position, 'response', llmNode.type);
          }
        }
      });
    }
  }, [createParticle, showParticles]);

  const handleClick = useCallback((event: MouseEvent) => {
    if (!mountRef.current || !cameraRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    mouseRef.current.raycaster.setFromCamera(mouseRef.current.mouse, cameraRef.current);

    // Check intersections and trigger strong activation
    const neuronMeshes = Array.from(neuronsRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const llmMeshes = Array.from(llmNodesRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const allMeshes = [...neuronMeshes, ...llmMeshes];

    const intersects = mouseRef.current.raycaster.intersectObjects(allMeshes);

    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object as THREE.Mesh;
      
      neuronsRef.current.forEach(neuron => {
        if (neuron.mesh === intersectedMesh) {
          neuron.activity = 1;
          neuron.energy = 1;
          neuron.glowIntensity = 0.9;
          neuron.lastActivation = Date.now();
          
          // Trigger cascade
          neuron.connections.forEach(targetId => {
            createSignal(neuron.id, targetId, 0.8, neuron.llmAffinity !== 'neutral' ? neuron.llmAffinity : 'claude');
          });

          if (showParticles) {
            for (let i = 0; i < 5; i++) {
              createParticle(neuron.position.clone().add(new THREE.Vector3(
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5
              )), 'response', neuron.llmAffinity);
            }
          }
        }
      });

      llmNodesRef.current.forEach(llmNode => {
        if (llmNode.mesh === intersectedMesh) {
          llmNode.activity = 1;
          llmNode.processingLoad = 1;
          llmNode.lastQuery = Date.now();
          globalProcessingStateRef.current.currentLLM = llmNode.type;

          if (showParticles) {
            for (let i = 0; i < 8; i++) {
              createParticle(llmNode.position.clone().add(new THREE.Vector3(
                (Math.random() - 0.5) * 1,
                (Math.random() - 0.5) * 1,
                (Math.random() - 0.5) * 1
              )), 'thought', llmNode.type);
            }
          }
        }
      });
    }
  }, [createSignal, createParticle, showParticles]);

  // Animation loop
  const animate = useCallback(() => {
    const currentTime = Date.now();
    const deltaTime = Math.min((currentTime - lastTimeRef.current) / 16.67, 2); // Cap delta time
    lastTimeRef.current = currentTime;

    // Update all systems
    updateNeurons(deltaTime, currentTime);
    updateLLMNodes(deltaTime, currentTime);
    updateSignals(deltaTime, currentTime);
    updateParticles(deltaTime);

    // Update camera orbital motion
    if (cameraRef.current) {
      const time = currentTime * 0.0005;
      cameraRef.current.position.x = Math.cos(time) * ANIMATION_CONFIG.CAMERA_DISTANCE;
      cameraRef.current.position.z = Math.sin(time) * ANIMATION_CONFIG.CAMERA_DISTANCE;
      cameraRef.current.lookAt(0, 0, 0);
    }

    // Render
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [updateNeurons, updateLLMNodes, updateSignals, updateParticles]);

  // Initialize and cleanup
  useEffect(() => {
    const threeJS = initThreeJS();
    if (!threeJS) return;

    createNeuralNetwork();

    // Event listeners
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    mountRef.current?.addEventListener('mousemove', handleMouseMove);
    mountRef.current?.addEventListener('click', handleClick);

    // Start animation
    setTimeout(() => {
      setIsLoaded(true);
      animationRef.current = requestAnimationFrame(animate);
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeEventListener('mousemove', handleMouseMove);
      mountRef.current?.removeEventListener('click', handleClick);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Cleanup Three.js
      if (rendererRef.current) {
        rendererRef.current.dispose();
        mountRef.current?.removeChild(rendererRef.current.domElement);
      }

      // Dispose of all geometries and materials
      neuronsRef.current.forEach(neuron => {
        if (neuron.mesh) {
          neuron.mesh.geometry.dispose();
          (neuron.mesh.material as THREE.Material).dispose();
        }
        if (neuron.glowMesh) {
          neuron.glowMesh.geometry.dispose();
          (neuron.glowMesh.material as THREE.Material).dispose();
        }
      });

      llmNodesRef.current.forEach(llmNode => {
        if (llmNode.mesh) {
          llmNode.mesh.geometry.dispose();
          (llmNode.mesh.material as THREE.Material).dispose();
        }
        if (llmNode.glowMesh) {
          llmNode.glowMesh.geometry.dispose();
          (llmNode.glowMesh.material as THREE.Material).dispose();
        }
      });

      signalsRef.current.forEach(signal => {
        if (signal.line) {
          signal.line.geometry.dispose();
          (signal.line.material as THREE.Material).dispose();
        }
      });

      particlesRef.current.forEach(particle => {
        if (particle.mesh) {
          particle.mesh.geometry.dispose();
          (particle.mesh.material as THREE.Material).dispose();
        }
      });
    };
  }, [initThreeJS, createNeuralNetwork, handleMouseMove, handleClick, animate]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        cursor: 'crosshair',
        pointerEvents: 'auto'
      }}
    />
  );
}
