
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
  energyField?: THREE.Mesh;
  synapseRings?: THREE.Mesh[];
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
  lightTrail?: THREE.Mesh[];
}

interface Particle {
  id: string;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  size: number;
  color: THREE.Color;
  type: 'token' | 'thought' | 'response' | 'knowledge' | 'energy' | 'spark';
  spin: number;
  frequency: number;
  llmType: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'neutral';
  mesh?: THREE.Mesh;
  trail?: THREE.Vector3[];
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
  dataStreams?: THREE.Mesh[];
  hologram?: THREE.Mesh;
}

interface MouseInteraction {
  position: THREE.Vector3;
  strength: number;
  radius: number;
  type: 'hover' | 'click' | 'drag';
  lifetime: number;
  maxLifetime: number;
  ripples?: THREE.Mesh[];
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

// Enhanced Animation Configuration
const ANIMATION_CONFIG = {
  // Physics constants
  NEURON_RETURN_FORCE: 0.008,
  PARTICLE_DAMPING: 0.96,
  NEURON_DAMPING: 0.93,
  SIGNAL_SPEED_BASE: 0.018,
  SIGNAL_SPEED_VARIANCE: 0.015,
  
  // Enhanced decay rates
  NEURON_ACTIVITY_DECAY: 0.003,
  NEURON_ENERGY_DECAY: 0.002,
  NEURON_GLOW_DECAY: 0.98,
  LLM_ACTIVITY_DECAY: 0.992,
  LLM_PROCESSING_DECAY: 0.988,
  GLOBAL_STATE_DECAY: 0.99,
  
  // Enhanced firing rates
  BASE_FIRE_RATE: 0.0008,
  LLM_FIRE_BOOST: 1.5,
  AUTONOMOUS_LLM_FIRE_RATE: 0.0012,
  
  // Enhanced visual constants
  GLOW_INTENSITY_MIN: 0.15,
  ACTIVITY_THRESHOLD: 0.3,
  PULSE_SPEED: 0.015,
  ACTIVITY_PULSE_SPEED: 0.025,
  
  // Enhanced interaction constants
  INTERACTION_RADIUS_BASE: 6,
  INTERACTION_RADIUS_CLICK: 12,
  LLM_INTERACTION_RADIUS: 8,
  LLM_INTERACTION_RADIUS_CLICK: 15,
  VELOCITY_DAMPING: 0.82,
  MOUSE_TRAIL_LENGTH: 30,
  MOUSE_INFLUENCE_STRENGTH: 0.05,
  RIPPLE_SPEED: 0.8,
  
  // Enhanced 3D constants
  CAMERA_DISTANCE: 30,
  CAMERA_HEIGHT: 8,
  SCENE_DEPTH: 25,
  LAYER_SPACING: 10,
  NEURON_SPACING_MIN: 3.0,
  NEURON_SIZE_BASE: 0.18,
  LLM_NODE_SIZE_BASE: 1.0,
  GRID_SIZE: 60,
  
  // Enhanced lighting
  AMBIENT_LIGHT_INTENSITY: 0.4,
  DIRECTIONAL_LIGHT_INTENSITY: 1.0,
  POINT_LIGHT_INTENSITY: 1.5,
  
  // New animation features
  ENERGY_FIELD_SIZE: 0.3,
  SYNAPSE_RING_COUNT: 3,
  HOLOGRAM_LAYERS: 4,
  PARTICLE_TRAIL_LENGTH: 8
};

// Enhanced Color Configuration
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
  background: new THREE.Color(0x080810),
  particle: new THREE.Color(0x00FFFF),
  energy: new THREE.Color(0xFFFF00),
  spark: new THREE.Color(0xFF00FF),
  ripple: new THREE.Color(0x00FFAA)
};

export default function AIWebGL3DBackground({ 
  className = '',
  neuronCount = {
    input: 8,
    processing: 12,
    reasoning: 10,
    output: 6
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
  const mouseInteractionsRef = useRef<MouseInteraction[]>([]);
  
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    isActive: false, 
    clicked: false,
    dragStart: null as THREE.Vector3 | null,
    isDragging: false,
    velocity: new THREE.Vector3(),
    trail: [] as THREE.Vector3[],
    raycaster: new THREE.Raycaster(),
    mouse: new THREE.Vector2(),
    worldPosition: new THREE.Vector3()
  });
  
  const [isLoaded, setIsLoaded] = useState(false);
  const lastTimeRef = useRef(0);
  
  const globalProcessingStateRef = useRef({
    activeQueries: 0,
    processingLoad: 0,
    responseGeneration: false,
    multiModalActive: false,
    currentLLM: 'hybrid' as 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'hybrid',
    networkActivity: 0,
    energyLevel: 0.5
  });

  // Enhanced shader materials with advanced effects
  const createAdvancedNeuronMaterial = useCallback((type: Neuron['type'], llmAffinity: Neuron['llmAffinity']) => {
    const baseColor = llmAffinity !== 'neutral' ? COLORS.llm[llmAffinity] : COLORS.neural[type];
    
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        activity: { value: 0 },
        glowIntensity: { value: 0 },
        baseColor: { value: baseColor },
        pulsePhase: { value: 0 },
        energy: { value: 0 },
        mousePosition: { value: new THREE.Vector3() },
        mouseInfluence: { value: 0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        uniform float time;
        uniform float activity;
        uniform float energy;
        uniform float pulsePhase;
        uniform vec3 mousePosition;
        uniform float mouseInfluence;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          
          vec3 pos = position;
          
          // Enhanced pulsing with energy
          float pulse = sin(pulsePhase + time * 3.0) * 0.15 * (activity + energy * 0.5);
          pos += normal * pulse;
          
          // Mouse interaction displacement
          float mouseDistance = distance(vWorldPosition, mousePosition);
          float mouseEffect = exp(-mouseDistance * 0.5) * mouseInfluence;
          pos += normal * mouseEffect * 0.3;
          
          // Activity-based morphing
          float morph = sin(time * 2.0 + activity * 5.0) * 0.05 * activity;
          pos += normalize(pos) * morph;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float activity;
        uniform float energy;
        uniform float glowIntensity;
        uniform vec3 baseColor;
        uniform float time;
        uniform vec3 mousePosition;
        uniform float mouseInfluence;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        
        void main() {
          // Enhanced fresnel with energy
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5 + energy);
          
          // Mouse proximity effect
          float mouseDistance = distance(vWorldPosition, mousePosition);
          float mouseGlow = exp(-mouseDistance * 0.3) * mouseInfluence;
          
          // Dynamic color mixing
          vec3 color = baseColor;
          color += fresnel * (glowIntensity + mouseGlow) * 0.8;
          color += activity * vec3(1.0, 0.8, 0.6) * 0.4;
          color += energy * vec3(0.2, 0.8, 1.0) * 0.3;
          
          // Animated surface patterns
          float pattern = sin(vPosition.x * 10.0 + time) * sin(vPosition.y * 10.0 + time) * 0.1;
          color += pattern * activity * vec3(1.0, 1.0, 1.0);
          
          // Enhanced transparency
          float alpha = 0.85 + activity * 0.15 + mouseGlow * 0.2;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
  }, []);

  const createAdvancedLLMNodeMaterial = useCallback((type: LLMNode['type']) => {
    const baseColor = COLORS.llm[type];
    
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        activity: { value: 0 },
        processingLoad: { value: 0 },
        baseColor: { value: baseColor },
        mousePosition: { value: new THREE.Vector3() },
        mouseInfluence: { value: 0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        uniform float time;
        uniform float activity;
        uniform float processingLoad;
        uniform vec3 mousePosition;
        uniform float mouseInfluence;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          
          vec3 pos = position;
          
          // Complex processing animation
          float processing = sin(time * 4.0) * cos(time * 3.0) * 0.1 * processingLoad;
          pos += normal * processing;
          
          // Mouse interaction
          float mouseDistance = distance(vWorldPosition, mousePosition);
          float mouseEffect = exp(-mouseDistance * 0.3) * mouseInfluence;
          pos += normal * mouseEffect * 0.5;
          
          // Activity waves
          float waves = sin(length(position.xy) * 5.0 - time * 8.0) * 0.08 * activity;
          pos += normal * waves;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float activity;
        uniform float processingLoad;
        uniform vec3 baseColor;
        uniform float time;
        uniform vec3 mousePosition;
        uniform float mouseInfluence;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        
        void main() {
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.2);
          
          // Mouse proximity glow
          float mouseDistance = distance(vWorldPosition, mousePosition);
          float mouseGlow = exp(-mouseDistance * 0.2) * mouseInfluence;
          
          vec3 color = baseColor;
          color += fresnel * (activity + mouseGlow) * 0.7;
          color += processingLoad * vec3(0.3, 0.3, 0.3);
          
          // Processing indicators
          float rings = sin(length(vPosition.xy) * 15.0 - time * 10.0) * 0.5 + 0.5;
          color += rings * processingLoad * 0.4;
          
          // Data flow visualization
          float dataFlow = sin(vPosition.x * 8.0 + time * 6.0) * sin(vPosition.y * 8.0 + time * 4.0);
          color += dataFlow * activity * vec3(0.2, 0.6, 1.0) * 0.3;
          
          float alpha = 0.9 + activity * 0.1 + mouseGlow * 0.3;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true
    });
  }, []);

  // Enhanced Three.js scene initialization
  const initThreeJS = useCallback(() => {
    if (!mountRef.current) return;

    // Scene setup with enhanced atmosphere
    const scene = new THREE.Scene();
    scene.background = COLORS.background;
    scene.fog = new THREE.FogExp2(COLORS.background, 0.015);
    sceneRef.current = scene;

    // Enhanced camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, ANIMATION_CONFIG.CAMERA_HEIGHT, ANIMATION_CONFIG.CAMERA_DISTANCE);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Enhanced renderer setup
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
    renderer.toneMappingExposure = 1.4;
    renderer.physicallyCorrectLights = true;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404080, ANIMATION_CONFIG.AMBIENT_LIGHT_INTENSITY);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, ANIMATION_CONFIG.DIRECTIONAL_LIGHT_INTENSITY);
    directionalLight.position.set(15, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    scene.add(directionalLight);

    // Enhanced atmospheric lighting
    const pointLight1 = new THREE.PointLight(COLORS.neural.processing, ANIMATION_CONFIG.POINT_LIGHT_INTENSITY, 40);
    pointLight1.position.set(-15, 8, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(COLORS.neural.reasoning, ANIMATION_CONFIG.POINT_LIGHT_INTENSITY, 40);
    pointLight2.position.set(15, 8, 15);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(COLORS.llm.chatgpt, ANIMATION_CONFIG.POINT_LIGHT_INTENSITY * 0.8, 35);
    pointLight3.position.set(0, -10, 20);
    scene.add(pointLight3);

    // Enhanced grid with animated properties
    if (showGrid) {
      const gridHelper = new THREE.GridHelper(ANIMATION_CONFIG.GRID_SIZE, 60, 0x40E0FF, 0x40E0FF);
      gridHelper.material.opacity = 0.08;
      gridHelper.material.transparent = true;
      scene.add(gridHelper);
      
      // Add secondary grid for depth
      const gridHelper2 = new THREE.GridHelper(ANIMATION_CONFIG.GRID_SIZE * 0.5, 30, 0x9D4EDD, 0x9D4EDD);
      gridHelper2.material.opacity = 0.05;
      gridHelper2.material.transparent = true;
      gridHelper2.position.y = -5;
      scene.add(gridHelper2);
    }

    return { scene, camera, renderer };
  }, [showGrid]);

  // Enhanced neural network creation with advanced features
  const createAdvancedNeuralNetwork = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const neurons = new Map<string, Neuron>();
    const llmNodes = new Map<string, LLMNode>();

    // Create 4 layers with enhanced 3D positioning
    const layers = [
      { type: 'input' as const, count: neuronCount.input || 8, x: -15 },
      { type: 'processing' as const, count: neuronCount.processing || 12, x: -5 },
      { type: 'reasoning' as const, count: neuronCount.reasoning || 10, x: 5 },
      { type: 'output' as const, count: neuronCount.output || 6, x: 15 }
    ];

    const llmAffinities: Neuron['llmAffinity'][] = ['chatgpt', 'gemini', 'grok', 'claude', 'neutral'];

    // Create enhanced neurons with additional visual elements
    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        const neuronId = `neuron-${layerIndex}-${i}`;
        
        // Enhanced 3D positioning with organic distribution
        const angle = (i / layer.count) * Math.PI * 2;
        const radius = 2 + Math.random() * 3;
        const y = Math.cos(angle) * radius + (Math.random() - 0.5) * 4;
        const z = Math.sin(angle) * radius + (Math.random() - 0.5) * ANIMATION_CONFIG.SCENE_DEPTH;
        const position = new THREE.Vector3(layer.x, y, z);
        
        const llmAffinity = llmAffinities[Math.floor(Math.random() * llmAffinities.length)];
        
        // Enhanced neuron geometry
        const geometry = new THREE.SphereGeometry(ANIMATION_CONFIG.NEURON_SIZE_BASE, 32, 32);
        const material = createAdvancedNeuronMaterial(layer.type, llmAffinity);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(position);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);

        // Enhanced glow effect
        const glowGeometry = new THREE.SphereGeometry(ANIMATION_CONFIG.NEURON_SIZE_BASE * 2, 16, 16);
        const glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            glowColor: { value: llmAffinity !== 'neutral' ? COLORS.llm[llmAffinity] : COLORS.neural[layer.type] },
            intensity: { value: 0 },
            time: { value: 0 }
          },
          vertexShader: `
            varying vec3 vNormal;
            varying vec3 vPosition;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 glowColor;
            uniform float intensity;
            uniform float time;
            varying vec3 vNormal;
            varying vec3 vPosition;
            void main() {
              float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              float pulse = sin(time * 3.0) * 0.3 + 0.7;
              gl_FragColor = vec4(glowColor, fresnel * intensity * pulse);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        glowMesh.position.copy(position);
        scene.add(glowMesh);

        // Add energy field
        const energyGeometry = new THREE.RingGeometry(ANIMATION_CONFIG.ENERGY_FIELD_SIZE * 0.5, ANIMATION_CONFIG.ENERGY_FIELD_SIZE, 8, 1);
        const energyMaterial = new THREE.MeshBasicMaterial({ 
          color: COLORS.energy, 
          transparent: true, 
          opacity: 0,
          side: THREE.DoubleSide
        });
        const energyField = new THREE.Mesh(energyGeometry, energyMaterial);
        energyField.position.copy(position);
        energyField.lookAt(0, 0, 0);
        scene.add(energyField);

        // Add synapse rings
        const synapseRings: THREE.Mesh[] = [];
        for (let ring = 0; ring < ANIMATION_CONFIG.SYNAPSE_RING_COUNT; ring++) {
          const ringGeometry = new THREE.TorusGeometry(
            ANIMATION_CONFIG.NEURON_SIZE_BASE * (1.5 + ring * 0.3), 
            0.02, 
            8, 
            16
          );
          const ringMaterial = new THREE.MeshBasicMaterial({ 
            color: COLORS.connection, 
            transparent: true, 
            opacity: 0
          });
          const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
          ringMesh.position.copy(position);
          scene.add(ringMesh);
          synapseRings.push(ringMesh);
        }

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
          glowMesh,
          energyField,
          synapseRings
        };

        neurons.set(neuronId, neuron);
      }
    });

    // Create enhanced LLM nodes with holograms and data streams
    const llmTypes: LLMNode['type'][] = ['chatgpt', 'gemini', 'grok', 'claude'];
    llmTypes.forEach((type, index) => {
      const angle = (index / llmTypes.length) * Math.PI * 2;
      const radius = 22;
      const position = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.4,
        Math.sin(angle) * radius * 0.6
      );

      // Enhanced LLM node geometry
      const geometry = new THREE.SphereGeometry(ANIMATION_CONFIG.LLM_NODE_SIZE_BASE, 64, 64);
      const material = createAdvancedLLMNodeMaterial(type);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.castShadow = true;
      scene.add(mesh);

      // Enhanced glow with pulsing
      const glowGeometry = new THREE.SphereGeometry(ANIMATION_CONFIG.LLM_NODE_SIZE_BASE * 1.5, 32, 32);
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: COLORS.llm[type] },
          intensity: { value: 0.4 },
          time: { value: 0 }
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
          uniform float time;
          varying vec3 vNormal;
          void main() {
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 1.5);
            float pulse = sin(time * 2.0) * 0.2 + 0.8;
            gl_FragColor = vec4(glowColor, fresnel * intensity * pulse);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.copy(position);
      scene.add(glowMesh);

      // Add processing rings
      const processingRings: THREE.Mesh[] = [];
      for (let ring = 0; ring < 3; ring++) {
        const ringGeometry = new THREE.RingGeometry(
          ANIMATION_CONFIG.LLM_NODE_SIZE_BASE * (1.2 + ring * 0.4), 
          ANIMATION_CONFIG.LLM_NODE_SIZE_BASE * (1.3 + ring * 0.4), 
          32, 
          1
        );
        const ringMaterial = new THREE.MeshBasicMaterial({ 
          color: COLORS.llm[type], 
          transparent: true, 
          opacity: 0,
          side: THREE.DoubleSide
        });
        const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        ringMesh.position.copy(position);
        scene.add(ringMesh);
        processingRings.push(ringMesh);
      }

      // Add hologram layers
      const hologramGeometry = new THREE.PlaneGeometry(
        ANIMATION_CONFIG.LLM_NODE_SIZE_BASE * 2, 
        ANIMATION_CONFIG.LLM_NODE_SIZE_BASE * 2
      );
      const hologramMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: COLORS.llm[type] },
          opacity: { value: 0 }
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float time;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(time * 2.0 + position.x * 5.0) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float opacity;
          varying vec2 vUv;
          void main() {
            float pattern = sin(vUv.x * 20.0 + time) * sin(vUv.y * 20.0 + time);
            gl_FragColor = vec4(color, pattern * opacity);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide
      });
      const hologram = new THREE.Mesh(hologramGeometry, hologramMaterial);
      hologram.position.copy(position);
      scene.add(hologram);

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
        processingRings,
        dataStreams: [],
        hologram
      };

      llmNodes.set(llmNode.id, llmNode);
    });

    // Enhanced connections with better distribution
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

          // Enhanced connection strategy
          const connectionsCount = Math.min(4, layerSizes[layerIndex + 1]);
          for (let j = 0; j < connectionsCount; j++) {
            const targetIndex = nextLayerStart + (Math.floor((i / layer.count) * layerSizes[layerIndex + 1]) + j) % layerSizes[layerIndex + 1];
            const targetId = `neuron-${layerIndex + 1}-${Math.floor(targetIndex - nextLayerStart)}`;
            neuron.connections.push(targetId);
          }
        }
      }
      currentIndex += layer.count;
    });

    neuronsRef.current = neurons;
    llmNodesRef.current = llmNodes;
  }, [neuronCount, createAdvancedNeuronMaterial, createAdvancedLLMNodeMaterial]);

  // Enhanced particle creation with trails and effects
  const createEnhancedParticle = useCallback((position: THREE.Vector3, type: Particle['type'] = 'token', llmType: Particle['llmType'] = 'neutral') => {
    const scene = sceneRef.current;
    if (!scene) return;

    const particleId = `particle-${Date.now()}-${Math.random()}`;
    
    let geometry: THREE.BufferGeometry;
    let color: THREE.Color;
    
    switch (type) {
      case 'spark':
        geometry = new THREE.SphereGeometry(0.02, 6, 6);
        color = COLORS.spark;
        break;
      case 'energy':
        geometry = new THREE.OctahedronGeometry(0.04);
        color = COLORS.energy;
        break;
      default:
        geometry = new THREE.SphereGeometry(0.06, 12, 12);
        color = llmType !== 'neutral' ? COLORS.llm[llmType] : COLORS.particle;
    }

    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: color },
        opacity: { value: 1 }
      },
      vertexShader: `
        uniform float time;
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          vec3 pos = position;
          pos += sin(time * 5.0 + position.x * 10.0) * 0.02;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        uniform float time;
        varying vec3 vPosition;
        void main() {
          float glow = 1.0 - length(vPosition) * 2.0;
          float pulse = sin(time * 8.0) * 0.3 + 0.7;
          gl_FragColor = vec4(color, glow * opacity * pulse);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    scene.add(mesh);

    const particle: Particle = {
      id: particleId,
      position: position.clone(),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.15,
        (Math.random() - 0.5) * 0.15,
        (Math.random() - 0.5) * 0.15
      ),
      life: 80 + Math.random() * 60,
      maxLife: 80 + Math.random() * 60,
      size: 0.06 + Math.random() * 0.04,
      color,
      type,
      spin: Math.random() * 0.15,
      frequency: 0.03 + Math.random() * 0.05,
      llmType,
      mesh,
      trail: []
    };

    particlesRef.current.set(particleId, particle);
  }, []);

  // Enhanced signal creation with light trails
  const createEnhancedSignal = useCallback((fromId: string, toId: string, strength: number, llmSource: Signal['llmSource']) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const fromNeuron = neuronsRef.current.get(fromId);
    const toNeuron = neuronsRef.current.get(toId);
    if (!fromNeuron || !toNeuron) return;

    const signalId = `signal-${fromId}-${toId}-${Date.now()}`;
    const color = COLORS.llm[llmSource] || COLORS.connection;

    // Enhanced signal trail with multiple segments
    const points = [];
    const segmentCount = 15;
    for (let i = 0; i <= segmentCount; i++) {
      const t = i / segmentCount;
      const point = fromNeuron.position.clone().lerp(toNeuron.position, t);
      // Add some curve to the path
      const curve = Math.sin(t * Math.PI) * 0.5;
      point.y += curve;
      points.push(point);
    }
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: color },
        progress: { value: 0 }
      },
      vertexShader: `
        uniform float time;
        uniform float progress;
        attribute float position;
        varying float vProgress;
        void main() {
          vProgress = progress;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying float vProgress;
        void main() {
          float alpha = sin(vProgress * 3.14159) * 0.8;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      linewidth: 3
    });
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // Create light trail particles
    const lightTrail: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const trailGeometry = new THREE.SphereGeometry(0.03, 8, 8);
      const trailMaterial = new THREE.MeshBasicMaterial({ 
        color, 
        transparent: true, 
        opacity: 0.8 - i * 0.15,
        blending: THREE.AdditiveBlending
      });
      const trailMesh = new THREE.Mesh(trailGeometry, trailMaterial);
      trailMesh.position.copy(fromNeuron.position);
      scene.add(trailMesh);
      lightTrail.push(trailMesh);
    }

    const signal: Signal = {
      id: signalId,
      from: fromId,
      to: toId,
      progress: 0,
      strength,
      color,
      trail: [fromNeuron.position.clone()],
      frequency: 0.03 + Math.random() * 0.03,
      amplitude: strength,
      dataType: ['query', 'reasoning', 'response', 'knowledge'][Math.floor(Math.random() * 4)] as Signal['dataType'],
      processingTime: 0,
      llmSource,
      line,
      lightTrail
    };

    signalsRef.current.set(signalId, signal);
  }, []);

  // Enhanced mouse interaction system
  const createMouseInteraction = useCallback((position: THREE.Vector3, type: MouseInteraction['type'], strength: number = 1) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const interaction: MouseInteraction = {
      position: position.clone(),
      strength,
      radius: type === 'click' ? ANIMATION_CONFIG.INTERACTION_RADIUS_CLICK : ANIMATION_CONFIG.INTERACTION_RADIUS_BASE,
      type,
      lifetime: 60,
      maxLifetime: 60,
      ripples: []
    };

    // Create ripple effects for clicks
    if (type === 'click') {
      for (let i = 0; i < 3; i++) {
        const rippleGeometry = new THREE.RingGeometry(0.1, 0.2, 16);
        const rippleMaterial = new THREE.MeshBasicMaterial({ 
          color: COLORS.ripple, 
          transparent: true, 
          opacity: 0.8,
          side: THREE.DoubleSide
        });
        const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);
        ripple.position.copy(position);
        ripple.lookAt(cameraRef.current?.position || new THREE.Vector3(0, 0, 1));
        scene.add(ripple);
        interaction.ripples?.push(ripple);
      }
    }

    mouseInteractionsRef.current.push(interaction);
  }, []);

  // Enhanced update functions with improved logic
  const updateAdvancedNeurons = useCallback((deltaTime: number, currentTime: number) => {
    const mouseWorldPos = mouseRef.current.worldPosition;
    
    neuronsRef.current.forEach((neuron) => {
      // Enhanced physics with mouse interaction
      neuron.pulsePhase += (ANIMATION_CONFIG.PULSE_SPEED + neuron.activity * ANIMATION_CONFIG.ACTIVITY_PULSE_SPEED) * deltaTime;

      // Mouse influence
      const mouseDistance = neuron.position.distanceTo(mouseWorldPos);
      const mouseInfluence = Math.exp(-mouseDistance * 0.2) * ANIMATION_CONFIG.MOUSE_INFLUENCE_STRENGTH;
      
      if (mouseInfluence > 0.01) {
        const direction = mouseWorldPos.clone().sub(neuron.position).normalize();
        neuron.velocity.add(direction.multiplyScalar(mouseInfluence * deltaTime * 0.5));
        neuron.activity = Math.min(1, neuron.activity + mouseInfluence * 0.3);
        neuron.glowIntensity = Math.max(neuron.glowIntensity, mouseInfluence * 0.7);
      }

      // Enhanced return force
      const returnForce = ANIMATION_CONFIG.NEURON_RETURN_FORCE * (1 + neuron.learningRate * 8);
      const diff = neuron.targetPosition.clone().sub(neuron.position);
      neuron.velocity.add(diff.multiplyScalar(returnForce * deltaTime));

      // Enhanced damping
      neuron.velocity.multiplyScalar(Math.pow(ANIMATION_CONFIG.NEURON_DAMPING, deltaTime));
      neuron.position.add(neuron.velocity.clone().multiplyScalar(deltaTime));

      // Enhanced activity decay
      const timeSinceActivation = currentTime - neuron.lastActivation;
      if (timeSinceActivation > 100) {
        neuron.activity = Math.max(0.02, neuron.activity * Math.pow(1 - ANIMATION_CONFIG.NEURON_ACTIVITY_DECAY, deltaTime));
        neuron.energy = Math.max(0.05, neuron.energy * Math.pow(1 - ANIMATION_CONFIG.NEURON_ENERGY_DECAY, deltaTime));
        neuron.glowIntensity = Math.max(0, neuron.glowIntensity * Math.pow(ANIMATION_CONFIG.NEURON_GLOW_DECAY, deltaTime));
      }

      // Update enhanced visuals
      if (neuron.mesh) {
        neuron.mesh.position.copy(neuron.position);
        const material = neuron.mesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = currentTime * 0.001;
          material.uniforms.activity.value = neuron.activity;
          material.uniforms.energy.value = neuron.energy;
          material.uniforms.glowIntensity.value = neuron.glowIntensity;
          material.uniforms.pulsePhase.value = neuron.pulsePhase;
          material.uniforms.mousePosition.value = mouseWorldPos;
          material.uniforms.mouseInfluence.value = mouseInfluence;
        }
      }

      if (neuron.glowMesh) {
        neuron.glowMesh.position.copy(neuron.position);
        const material = neuron.glowMesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.intensity.value = neuron.glowIntensity;
          material.uniforms.time.value = currentTime * 0.001;
        }
      }

      // Update energy field
      if (neuron.energyField) {
        neuron.energyField.position.copy(neuron.position);
        neuron.energyField.rotation.z += neuron.activity * 0.05;
        const material = neuron.energyField.material as THREE.MeshBasicMaterial;
        material.opacity = neuron.energy * 0.3;
      }

      // Update synapse rings
      neuron.synapseRings?.forEach((ring, index) => {
        ring.position.copy(neuron.position);
        ring.rotation.x += (neuron.activity + index * 0.1) * 0.02;
        ring.rotation.y += (neuron.activity + index * 0.1) * 0.015;
        const material = ring.material as THREE.MeshBasicMaterial;
        material.opacity = neuron.activity * (0.2 - index * 0.05);
      });

      // Enhanced autonomous firing
      const llmBoost = neuron.llmAffinity !== 'neutral' ? ANIMATION_CONFIG.LLM_FIRE_BOOST : 1.0;
      const fireRate = ANIMATION_CONFIG.BASE_FIRE_RATE * llmBoost * (1 + neuron.energy) * (1 + mouseInfluence);

      if (Math.random() < fireRate * deltaTime) {
        neuron.activity = Math.min(1, neuron.activity + 0.3);
        neuron.lastActivation = currentTime;

        // Create signals and particles
        neuron.connections.forEach(targetId => {
          if (Math.random() > 0.25) {
            createEnhancedSignal(neuron.id, targetId, neuron.activity * 0.9, neuron.llmAffinity !== 'neutral' ? neuron.llmAffinity : 'claude');
          }
        });

        if (showParticles && Math.random() > 0.7) {
          createEnhancedParticle(neuron.position, 'energy', neuron.llmAffinity);
        }
      }
    });
  }, [createEnhancedSignal, createEnhancedParticle, showParticles]);

  const updateAdvancedLLMNodes = useCallback((deltaTime: number, currentTime: number) => {
    const mouseWorldPos = mouseRef.current.worldPosition;
    
    llmNodesRef.current.forEach((llmNode) => {
      // Enhanced activity updates
      llmNode.activity *= Math.pow(ANIMATION_CONFIG.LLM_ACTIVITY_DECAY, deltaTime);
      llmNode.processingLoad *= Math.pow(ANIMATION_CONFIG.LLM_PROCESSING_DECAY, deltaTime);

      // Mouse interaction
      const mouseDistance = llmNode.position.distanceTo(mouseWorldPos);
      const mouseInfluence = Math.exp(-mouseDistance * 0.15) * ANIMATION_CONFIG.MOUSE_INFLUENCE_STRENGTH;

      if (mouseInfluence > 0.02) {
        llmNode.activity = Math.min(1, llmNode.activity + mouseInfluence * 0.5);
        llmNode.processingLoad = Math.min(1, llmNode.processingLoad + mouseInfluence * 0.6);
      }

      // Enhanced autonomous activation
      if (Math.random() < ANIMATION_CONFIG.AUTONOMOUS_LLM_FIRE_RATE * deltaTime * (1 + mouseInfluence)) {
        llmNode.activity = Math.min(1, llmNode.activity + 0.5);
        llmNode.processingLoad = Math.min(1, llmNode.processingLoad + 0.6);
        llmNode.lastQuery = currentTime;

        if (showParticles) {
          createEnhancedParticle(llmNode.position, 'thought', llmNode.type);
          if (Math.random() > 0.6) {
            createEnhancedParticle(llmNode.position, 'spark', llmNode.type);
          }
        }
      }

      // Update enhanced visuals
      if (llmNode.mesh) {
        const material = llmNode.mesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = currentTime * 0.001;
          material.uniforms.activity.value = llmNode.activity;
          material.uniforms.processingLoad.value = llmNode.processingLoad;
          material.uniforms.mousePosition.value = mouseWorldPos;
          material.uniforms.mouseInfluence.value = mouseInfluence;
        }
      }

      if (llmNode.glowMesh) {
        const material = llmNode.glowMesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.intensity.value = 0.4 + llmNode.activity * 0.6 + mouseInfluence * 0.3;
          material.uniforms.time.value = currentTime * 0.001;
        }
      }

      // Update processing rings
      llmNode.processingRings?.forEach((ring, index) => {
        ring.position.copy(llmNode.position);
        ring.rotation.z += (llmNode.processingLoad + index * 0.2) * 0.03;
        const material = ring.material as THREE.MeshBasicMaterial;
        material.opacity = llmNode.processingLoad * (0.4 - index * 0.1);
      });

      // Update hologram
      if (llmNode.hologram) {
        llmNode.hologram.position.copy(llmNode.position);
        llmNode.hologram.rotation.y += llmNode.activity * 0.02;
        const material = llmNode.hologram.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = currentTime * 0.001;
          material.uniforms.opacity.value = llmNode.activity * 0.6;
        }
      }
    });
  }, [createEnhancedParticle, showParticles]);

  const updateAdvancedSignals = useCallback((deltaTime: number, currentTime: number) => {
    const signalsToRemove: string[] = [];

    signalsRef.current.forEach((signal) => {
      signal.progress += ANIMATION_CONFIG.SIGNAL_SPEED_BASE * deltaTime * (1 + signal.frequency * 40);
      signal.processingTime += deltaTime;

      const fromNeuron = neuronsRef.current.get(signal.from);
      const toNeuron = neuronsRef.current.get(signal.to);

      if (!fromNeuron || !toNeuron) {
        signalsToRemove.push(signal.id);
        return;
      }

      if (signal.progress >= 1) {
        // Enhanced signal completion
        toNeuron.activity = Math.min(1, toNeuron.activity + signal.strength * 0.5);
        toNeuron.energy = Math.min(1, toNeuron.energy + signal.strength * 0.4);
        toNeuron.lastActivation = currentTime;
        toNeuron.glowIntensity = Math.max(toNeuron.glowIntensity, signal.strength * 0.8);

        if (showParticles) {
          createEnhancedParticle(toNeuron.position, 'response', signal.llmSource);
          if (Math.random() > 0.7) {
            createEnhancedParticle(toNeuron.position, 'spark', signal.llmSource);
          }
        }

        signalsToRemove.push(signal.id);
        return;
      }

      // Enhanced signal position calculation
      const currentPos = fromNeuron.position.clone().lerp(toNeuron.position, signal.progress);
      
      // Enhanced wave motion
      const perpendicular = new THREE.Vector3().crossVectors(
        toNeuron.position.clone().sub(fromNeuron.position).normalize(),
        new THREE.Vector3(0, 1, 0)
      );
      const wave = Math.sin(signal.processingTime * signal.frequency * 100) * signal.amplitude * 0.4;
      const spiral = Math.cos(signal.processingTime * signal.frequency * 80) * signal.amplitude * 0.2;
      currentPos.add(perpendicular.multiplyScalar(wave));
      currentPos.y += spiral;

      signal.trail.push(currentPos);
      if (signal.trail.length > 12) {
        signal.trail.shift();
      }

      // Update enhanced line
      if (signal.line) {
        signal.line.geometry.setFromPoints(signal.trail);
        const material = signal.line.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.progress.value = signal.progress;
          material.uniforms.time.value = currentTime * 0.001;
        }
      }

      // Update light trail
      signal.lightTrail?.forEach((trailMesh, index) => {
        const trailProgress = Math.max(0, signal.progress - index * 0.1);
        if (trailProgress > 0) {
          const trailPos = fromNeuron.position.clone().lerp(toNeuron.position, trailProgress);
          trailMesh.position.copy(trailPos);
          const material = trailMesh.material as THREE.MeshBasicMaterial;
          material.opacity = (signal.strength * 0.8) * (1 - index * 0.15) * Math.sin(trailProgress * Math.PI);
        }
      });
    });

    // Remove completed signals
    signalsToRemove.forEach(id => {
      const signal = signalsRef.current.get(id);
      if (signal && sceneRef.current) {
        if (signal.line) {
          sceneRef.current.remove(signal.line);
          signal.line.geometry.dispose();
          (signal.line.material as THREE.Material).dispose();
        }
        signal.lightTrail?.forEach(mesh => {
          sceneRef.current?.remove(mesh);
          mesh.geometry.dispose();
          (mesh.material as THREE.Material).dispose();
        });
      }
      signalsRef.current.delete(id);
    });
  }, [createEnhancedParticle, showParticles]);

  const updateAdvancedParticles = useCallback((deltaTime: number, currentTime: number) => {
    const particlesToRemove: string[] = [];

    particlesRef.current.forEach((particle) => {
      // Enhanced physics
      particle.position.add(particle.velocity.clone().multiplyScalar(deltaTime));
      particle.velocity.multiplyScalar(Math.pow(ANIMATION_CONFIG.PARTICLE_DAMPING, deltaTime));
      particle.life -= deltaTime;

      // Add to trail
      if (particle.trail) {
        particle.trail.push(particle.position.clone());
        if (particle.trail.length > ANIMATION_CONFIG.PARTICLE_TRAIL_LENGTH) {
          particle.trail.shift();
        }
      }

      // Enhanced mesh updates
      if (particle.mesh) {
        particle.mesh.position.copy(particle.position);
        particle.mesh.rotation.x += particle.spin * deltaTime;
        particle.mesh.rotation.y += particle.spin * deltaTime;
        particle.mesh.rotation.z += particle.spin * 0.5 * deltaTime;
        
        const material = particle.mesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.time.value = currentTime * 0.001;
          material.uniforms.opacity.value = particle.life / particle.maxLife;
        }
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

  const updateMouseInteractions = useCallback((deltaTime: number) => {
    const interactionsToRemove: number[] = [];

    mouseInteractionsRef.current.forEach((interaction, index) => {
      interaction.lifetime -= deltaTime;

      // Update ripples
      interaction.ripples?.forEach((ripple, rippleIndex) => {
        const progress = 1 - (interaction.lifetime / interaction.maxLifetime);
        const scale = 1 + progress * 10;
        ripple.scale.setScalar(scale);
        
        const material = ripple.material as THREE.MeshBasicMaterial;
        material.opacity = (1 - progress) * 0.6;
      });

      if (interaction.lifetime <= 0) {
        // Remove ripples
        interaction.ripples?.forEach(ripple => {
          if (sceneRef.current) {
            sceneRef.current.remove(ripple);
            ripple.geometry.dispose();
            (ripple.material as THREE.Material).dispose();
          }
        });
        interactionsToRemove.push(index);
      }
    });

    // Remove completed interactions
    interactionsToRemove.reverse().forEach(index => {
      mouseInteractionsRef.current.splice(index, 1);
    });
  }, []);

  // Enhanced mouse event handlers
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!mountRef.current || !cameraRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    mouseRef.current.raycaster.setFromCamera(mouseRef.current.mouse, cameraRef.current);

    // Get world position
    const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const worldPos = new THREE.Vector3();
    mouseRef.current.raycaster.ray.intersectPlane(intersectPlane, worldPos);
    mouseRef.current.worldPosition.copy(worldPos);

    // Update mouse trail
    mouseRef.current.trail.push(worldPos.clone());
    if (mouseRef.current.trail.length > ANIMATION_CONFIG.MOUSE_TRAIL_LENGTH) {
      mouseRef.current.trail.shift();
    }

    // Create hover interaction
    createMouseInteraction(worldPos, 'hover', 0.3);

    // Check intersections for enhanced interactions
    const neuronMeshes = Array.from(neuronsRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const llmMeshes = Array.from(llmNodesRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const allMeshes = [...neuronMeshes, ...llmMeshes];

    const intersects = mouseRef.current.raycaster.intersectObjects(allMeshes);

    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object as THREE.Mesh;
      
      // Enhanced neuron interaction
      neuronsRef.current.forEach(neuron => {
        if (neuron.mesh === intersectedMesh) {
          const influence = 0.03;
          neuron.activity = Math.min(1, neuron.activity + influence);
          neuron.glowIntensity = Math.max(neuron.glowIntensity, influence * 1.2);
          neuron.energy = Math.min(1, neuron.energy + influence * 0.5);
          
          if (showParticles && Math.random() > 0.85) {
            createEnhancedParticle(neuron.position, 'energy', neuron.llmAffinity);
          }
        }
      });

      // Enhanced LLM node interaction
      llmNodesRef.current.forEach(llmNode => {
        if (llmNode.mesh === intersectedMesh) {
          const influence = 0.04;
          llmNode.activity = Math.min(1, llmNode.activity + influence);
          llmNode.processingLoad = Math.max(llmNode.processingLoad, influence * 1.1);
          
          if (showParticles && Math.random() > 0.8) {
            createEnhancedParticle(llmNode.position, 'thought', llmNode.type);
          }
        }
      });
    }
  }, [createMouseInteraction, createEnhancedParticle, showParticles]);

  const handleClick = useCallback((event: MouseEvent) => {
    if (!mountRef.current || !cameraRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    mouseRef.current.raycaster.setFromCamera(mouseRef.current.mouse, cameraRef.current);

    // Get world position
    const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const worldPos = new THREE.Vector3();
    mouseRef.current.raycaster.ray.intersectPlane(intersectPlane, worldPos);

    // Create strong click interaction
    createMouseInteraction(worldPos, 'click', 1.0);

    // Check intersections for major activations
    const neuronMeshes = Array.from(neuronsRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const llmMeshes = Array.from(llmNodesRef.current.values()).map(n => n.mesh).filter(Boolean) as THREE.Mesh[];
    const allMeshes = [...neuronMeshes, ...llmMeshes];

    const intersects = mouseRef.current.raycaster.intersectObjects(allMeshes);

    if (intersects.length > 0) {
      const intersectedMesh = intersects[0].object as THREE.Mesh;
      
      // Major neuron activation
      neuronsRef.current.forEach(neuron => {
        if (neuron.mesh === intersectedMesh) {
          neuron.activity = 1;
          neuron.energy = 1;
          neuron.glowIntensity = 1;
          neuron.lastActivation = Date.now();
          
          // Trigger cascade
          neuron.connections.forEach(targetId => {
            createEnhancedSignal(neuron.id, targetId, 0.9, neuron.llmAffinity !== 'neutral' ? neuron.llmAffinity : 'claude');
          });

          if (showParticles) {
            // Create particle burst
            for (let i = 0; i < 8; i++) {
              const offset = new THREE.Vector3(
                (Math.random() - 0.5) * 0.8,
                (Math.random() - 0.5) * 0.8,
                (Math.random() - 0.5) * 0.8
              );
              createEnhancedParticle(neuron.position.clone().add(offset), Math.random() > 0.5 ? 'energy' : 'spark', neuron.llmAffinity);
            }
          }
        }
      });

      // Major LLM node activation
      llmNodesRef.current.forEach(llmNode => {
        if (llmNode.mesh === intersectedMesh) {
          llmNode.activity = 1;
          llmNode.processingLoad = 1;
          llmNode.lastQuery = Date.now();
          globalProcessingStateRef.current.currentLLM = llmNode.type;

          if (showParticles) {
            // Create major particle burst
            for (let i = 0; i < 12; i++) {
              const offset = new THREE.Vector3(
                (Math.random() - 0.5) * 1.5,
                (Math.random() - 0.5) * 1.5,
                (Math.random() - 0.5) * 1.5
              );
              const particleType = ['thought', 'energy', 'spark'][Math.floor(Math.random() * 3)] as Particle['type'];
              createEnhancedParticle(llmNode.position.clone().add(offset), particleType, llmNode.type);
            }
          }
        }
      });
    } else {
      // Create ambient particles for empty space clicks
      if (showParticles) {
        for (let i = 0; i < 5; i++) {
          const offset = new THREE.Vector3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          );
          createEnhancedParticle(worldPos.clone().add(offset), 'spark', 'neutral');
        }
      }
    }
  }, [createMouseInteraction, createEnhancedSignal, createEnhancedParticle, showParticles]);

  // Enhanced animation loop
  const animate = useCallback(() => {
    const currentTime = Date.now();
    const deltaTime = Math.min((currentTime - lastTimeRef.current) / 16.67, 2);
    lastTimeRef.current = currentTime;

    // Update all enhanced systems
    updateAdvancedNeurons(deltaTime, currentTime);
    updateAdvancedLLMNodes(deltaTime, currentTime);
    updateAdvancedSignals(deltaTime, currentTime);
    updateAdvancedParticles(deltaTime, currentTime);
    updateMouseInteractions(deltaTime);

    // Enhanced camera movement
    if (cameraRef.current) {
      const time = currentTime * 0.0003;
      const radius = ANIMATION_CONFIG.CAMERA_DISTANCE + Math.sin(time * 0.5) * 2;
      cameraRef.current.position.x = Math.cos(time) * radius;
      cameraRef.current.position.z = Math.sin(time) * radius;
      cameraRef.current.position.y = ANIMATION_CONFIG.CAMERA_HEIGHT + Math.sin(time * 0.3) * 1;
      cameraRef.current.lookAt(0, 0, 0);
    }

    // Update global processing state
    globalProcessingStateRef.current.networkActivity = 
      Array.from(neuronsRef.current.values()).reduce((sum, n) => sum + n.activity, 0) / neuronsRef.current.size;
    
    globalProcessingStateRef.current.energyLevel = 
      Array.from(neuronsRef.current.values()).reduce((sum, n) => sum + n.energy, 0) / neuronsRef.current.size;

    // Render
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [updateAdvancedNeurons, updateAdvancedLLMNodes, updateAdvancedSignals, updateAdvancedParticles, updateMouseInteractions]);

  // Initialize and cleanup
  useEffect(() => {
    const threeJS = initThreeJS();
    if (!threeJS) return;

    createAdvancedNeuralNetwork();

    // Enhanced event handlers
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    mountRef.current?.addEventListener('mousemove', handleMouseMove);
    mountRef.current?.addEventListener('click', handleClick);

    // Start enhanced animation
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

      // Enhanced cleanup
      if (rendererRef.current) {
        rendererRef.current.dispose();
        mountRef.current?.removeChild(rendererRef.current.domElement);
      }

      // Dispose enhanced geometries and materials
      neuronsRef.current.forEach(neuron => {
        if (neuron.mesh) {
          neuron.mesh.geometry.dispose();
          (neuron.mesh.material as THREE.Material).dispose();
        }
        if (neuron.glowMesh) {
          neuron.glowMesh.geometry.dispose();
          (neuron.glowMesh.material as THREE.Material).dispose();
        }
        if (neuron.energyField) {
          neuron.energyField.geometry.dispose();
          (neuron.energyField.material as THREE.Material).dispose();
        }
        neuron.synapseRings?.forEach(ring => {
          ring.geometry.dispose();
          (ring.material as THREE.Material).dispose();
        });
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
        if (llmNode.hologram) {
          llmNode.hologram.geometry.dispose();
          (llmNode.hologram.material as THREE.Material).dispose();
        }
        llmNode.processingRings?.forEach(ring => {
          ring.geometry.dispose();
          (ring.material as THREE.Material).dispose();
        });
      });

      signalsRef.current.forEach(signal => {
        if (signal.line) {
          signal.line.geometry.dispose();
          (signal.line.material as THREE.Material).dispose();
        }
        signal.lightTrail?.forEach(mesh => {
          mesh.geometry.dispose();
          (mesh.material as THREE.Material).dispose();
        });
      });

      particlesRef.current.forEach(particle => {
        if (particle.mesh) {
          particle.mesh.geometry.dispose();
          (particle.mesh.material as THREE.Material).dispose();
        }
      });

      mouseInteractionsRef.current.forEach(interaction => {
        interaction.ripples?.forEach(ripple => {
          ripple.geometry.dispose();
          (ripple.material as THREE.Material).dispose();
        });
      });
    };
  }, [initThreeJS, createAdvancedNeuralNetwork, handleMouseMove, handleClick, animate]);

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
