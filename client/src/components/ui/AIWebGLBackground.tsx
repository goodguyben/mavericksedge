
import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Neuron {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  activity: number;
  type: 'input' | 'processing' | 'reasoning' | 'output';
  connections: number[];
  pulsePhase: number;
  lastActivation: number;
  energy: number;
  targetX: number;
  targetY: number;
  targetZ: number;
  glowIntensity: number;
  learningRate: number;
  weight: number;
  bias: number;
  evolutionStage: number;
  llmAffinity: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'neutral';
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  strength: number;
  id: string;
  color: string;
  trail: Array<{ x: number; y: number; z: number; opacity: number }>;
  frequency: number;
  amplitude: number;
  dataType: 'query' | 'reasoning' | 'response' | 'knowledge';
  processingTime: number;
  llmSource: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'hybrid';
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'token' | 'thought' | 'response' | 'knowledge';
  spin: number;
  frequency: number;
  llmType: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'neutral';
}

interface LLMNode {
  id: string;
  x: number;
  y: number;
  z: number;
  type: 'chatgpt' | 'gemini' | 'grok' | 'claude';
  activity: number;
  size: number;
  connections: string[];
  processingLoad: number;
  lastQuery: number;
  responseTime: number;
  expertise: string[];
}

interface DataStream {
  id: string;
  path: Array<{ x: number; y: number; z: number }>;
  progress: number;
  speed: number;
  intensity: number;
  dataType: 'input' | 'processing' | 'output' | 'feedback';
  packets: Array<{ position: number; size: number; color: string }>;
  llmTarget: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'multi';
}

interface NeuralCluster {
  id: string;
  center: { x: number; y: number; z: number };
  neurons: number[];
  specialization: 'input_processing' | 'multi_modal_reasoning' | 'knowledge_synthesis' | 'response_generation';
  activation: number;
  learningProgress: number;
  complexity: number;
  dominantLLM: 'chatgpt' | 'gemini' | 'grok' | 'claude' | 'hybrid';
}

interface AIWebGLBackgroundProps {
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
  INTERACTION_RADIUS_BASE: 150,
  INTERACTION_RADIUS_CLICK: 200,
  LLM_INTERACTION_RADIUS: 120,
  LLM_INTERACTION_RADIUS_CLICK: 150,
  VELOCITY_DAMPING: 0.85,
  MOUSE_TRAIL_LENGTH: 20,
  
  // Particle constants
  PARTICLE_COUNT_DEFAULT: 3,
  PARTICLE_COUNT_CLICK: 4,
  PARTICLE_LIFE_BASE: 80,
  PARTICLE_LIFE_VARIANCE: 40,
  PARTICLE_SIZE_BASE: 1.5,
  PARTICLE_SIZE_VARIANCE: 3,
  PARTICLE_SPIN_RATE: 0.08,
  PARTICLE_FREQUENCY_BASE: 0.02,
  PARTICLE_FREQUENCY_VARIANCE: 0.04,
  
  // Signal constants
  SIGNAL_TRAIL_LENGTH: 8,
  SIGNAL_STRENGTH_BASE: 0.6,
  SIGNAL_STRENGTH_VARIANCE: 0.4,
  SIGNAL_COMPLETION_THRESHOLD: 1,
  
  // Data stream constants
  STREAM_STEPS: 15,
  STREAM_PACKETS: 3,
  STREAM_SPEED_BASE: 0.018,
  STREAM_SPEED_VARIANCE: 0.012,
  
  // Grid constants
  GRID_SIZE: 100,
  GRID_OPACITY: 0.02,
  GRID_LINE_WIDTH: 0.5,
  
  // Frame limiting
  MAX_DELTA_TIME: 2,
  FRAME_TIME_TARGET: 16.67, // ~60fps
  THROTTLE_INTERVAL: 16,
  
  // Neural network layout
  LAYER_POSITIONS: [0.15, 0.35, 0.65, 0.85],
  NEURON_SPACING_MIN: 60,
  NEURON_POSITION_VARIANCE: 30,
  NEURON_Z_VARIANCE: 80,
  NEURON_SIZE_BASE: 4,
  NEURON_SIZE_VARIANCE: 3,
  
  // LLM node constants
  LLM_NODE_SIZE_BASE: 25,
  LLM_NODE_SIZE_VARIANCE: 15,
  LLM_RADIUS_MULTIPLIER: 0.3,
  LLM_RESPONSE_TIME_BASE: 50,
  LLM_RESPONSE_TIME_VARIANCE: 100,
  
  // Connection constants
  CONNECTION_PROBABILITY: 0.7,
  CONNECTIONS_PER_NEURON_MIN: 2,
  CONNECTIONS_PER_NEURON_MAX: 4,
  CONNECTION_OPACITY_MIN: 0.06,
  CONNECTION_OPACITY_SCALE: 0.4,
  CONNECTION_WIDTH_BASE: 1,
  CONNECTION_WIDTH_SCALE: 2,
  
  // Timing constants
  ACTIVATION_TIMEOUT: 100,
  TIME_SCALE: 0.001,
  DASH_ANIMATION_SPEED: 0.06,
  PULSE_ANIMATION_SPEED: 0.003,
  
  // Visual effect constants
  SHADOW_BLUR_MAX: 20,
  GLOW_LAYERS: 3,
  GLOW_SIZE_MULTIPLIER: 2.5,
  BORDER_PULSE_MULTIPLIER: 1.2,
  CURSOR_PULSE_SPEED: 0.005,
  CURSOR_RADIUS_BASE: 80,
  CURSOR_RADIUS_VARIANCE: 40
};

// Color Configuration
const COLORS = {
  llm: {
    chatgpt: { 
      primary: '#10A37F', 
      secondary: '#1A7F64', 
      glow: '#00D4AA',
      accent: '#74AA9C'
    },
    gemini: { 
      primary: '#4285F4', 
      secondary: '#1A73E8', 
      glow: '#5BB3FF',
      accent: '#9FCDFF'
    },
    grok: { 
      primary: '#1DA1F2', 
      secondary: '#0F7A9F', 
      glow: '#50D4FF',
      accent: '#87E7FF'
    },
    claude: { 
      primary: '#FF6B35', 
      secondary: '#E55A2B', 
      glow: '#FF8A5C',
      accent: '#FFB899'
    },
    hybrid: {
      primary: '#9D4EDD',
      secondary: '#7B2CBF',
      glow: '#C77DFF',
      accent: '#E0AAFF'
    }
  },
  neural: {
    input: { base: '#00FF80', glow: '#40E0D0', trail: '#00CED1' },
    processing: { base: '#40E0FF', glow: '#00BFFF', trail: '#1E90FF' },
    reasoning: { base: '#9D4EDD', glow: '#C77DFF', trail: '#E0AAFF' },
    output: { base: '#FF8040', glow: '#FF6347', trail: '#FF4500' }
  },
  connection: '#40E0FF',
  background: { 
    start: '#0A0A0F', 
    mid: '#0F0F1A', 
    end: '#0A0A0F',
    darkOverlay: 'rgba(0, 0, 0, 0.7)'
  },
  particle: '#00FFFF'
};

export default function AIWebGLBackground({ 
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
}: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const dataStreamsRef = useRef<DataStream[]>([]);
  const llmNodesRef = useRef<LLMNode[]>([]);
  const neuralClustersRef = useRef<NeuralCluster[]>([]);
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    isActive: false, 
    clicked: false,
    velocity: { x: 0, y: 0 },
    trail: [] as { x: number, y: number, alpha: number, z: number }[],
    lastX: 0,
    lastY: 0,
    interactionStrength: 0,
    touches: [] as { x: number, y: number, id: number }[]
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

  // Particle Creation Helper
  const createFluidParticles = useCallback((x: number, y: number, z: number = 0, count: number = ANIMATION_CONFIG.PARTICLE_COUNT_DEFAULT, type: Particle['type'] = 'token', llmType: Particle['llmType'] = 'neutral') => {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      particlesRef.current.push({
        x: x + Math.cos(angle) * 10,
        y: y + Math.sin(angle) * 10,
        z: z + (Math.random() - 0.5) * 15,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: (Math.random() - 0.5) * 2,
        life: ANIMATION_CONFIG.PARTICLE_LIFE_BASE + Math.random() * ANIMATION_CONFIG.PARTICLE_LIFE_VARIANCE,
        maxLife: ANIMATION_CONFIG.PARTICLE_LIFE_BASE + Math.random() * ANIMATION_CONFIG.PARTICLE_LIFE_VARIANCE,
        size: Math.random() * ANIMATION_CONFIG.PARTICLE_SIZE_VARIANCE + ANIMATION_CONFIG.PARTICLE_SIZE_BASE,
        color: COLORS.llm[llmType] ? COLORS.llm[llmType].primary : COLORS.particle,
        type,
        spin: Math.random() * ANIMATION_CONFIG.PARTICLE_SPIN_RATE,
        frequency: Math.random() * ANIMATION_CONFIG.PARTICLE_FREQUENCY_VARIANCE + ANIMATION_CONFIG.PARTICLE_FREQUENCY_BASE,
        llmType
      });
    }
  }, []);

  // Data Stream Creation Helper
  const createSmoothDataStream = useCallback((start: { x: number; y: number; z: number }, end: { x: number; y: number; z: number }, llmTarget: DataStream['llmTarget']) => {
    const id = `stream-${Date.now()}-${Math.random()}`;
    const path = [];

    // Create smooth bezier curve
    const controlPoint1 = {
      x: start.x + (end.x - start.x) * 0.3 + (Math.random() - 0.5) * 40,
      y: start.y + (end.y - start.y) * 0.3 + (Math.random() - 0.5) * 30,
      z: start.z + (end.z - start.z) * 0.3
    };
    const controlPoint2 = {
      x: start.x + (end.x - start.x) * 0.7 + (Math.random() - 0.5) * 40,
      y: start.y + (end.y - start.y) * 0.7 + (Math.random() - 0.5) * 30,
      z: start.z + (end.z - start.z) * 0.7
    };

    for (let i = 0; i <= ANIMATION_CONFIG.STREAM_STEPS; i++) {
      const t = i / ANIMATION_CONFIG.STREAM_STEPS;
      const invT = 1 - t;
      const x = invT*invT*invT*start.x + 3*invT*invT*t*controlPoint1.x + 3*invT*t*t*controlPoint2.x + t*t*t*end.x;
      const y = invT*invT*invT*start.y + 3*invT*invT*t*controlPoint1.y + 3*invT*t*t*controlPoint2.y + t*t*t*end.y;
      const z = invT*invT*invT*start.z + 3*invT*invT*t*controlPoint1.z + 3*invT*t*t*controlPoint2.z + t*t*t*end.z;
      path.push({ x, y, z });
    }

    const packets = [];
    for (let i = 0; i < ANIMATION_CONFIG.STREAM_PACKETS; i++) {
      packets.push({
        position: Math.random() * 0.6,
        size: Math.random() * 2 + ANIMATION_CONFIG.PARTICLE_SIZE_BASE,
        color: COLORS.llm[llmTarget] ? COLORS.llm[llmTarget].primary : COLORS.particle
      });
    }

    dataStreamsRef.current.push({
      id,
      path,
      progress: 0,
      speed: ANIMATION_CONFIG.STREAM_SPEED_BASE + Math.random() * ANIMATION_CONFIG.STREAM_SPEED_VARIANCE,
      intensity: 0.9 + Math.random() * 0.1,
      dataType: 'processing',
      packets,
      llmTarget
    });
  }, []);

  // Neural Network Initialization Functions
  const createLLMNodes = useCallback((canvasWidth: number, canvasHeight: number): LLMNode[] => {
    const llmNodes: LLMNode[] = [];
    const llmTypes: ('chatgpt' | 'gemini' | 'grok' | 'claude')[] = ['chatgpt', 'gemini', 'grok', 'claude'];
    
    llmTypes.forEach((type, index) => {
      const angle = (index / llmTypes.length) * Math.PI * 2;
      const radius = Math.min(canvasWidth, canvasHeight) * ANIMATION_CONFIG.LLM_RADIUS_MULTIPLIER;
      const centerX = canvasWidth * 0.5;
      const centerY = canvasHeight * 0.5;

      llmNodes.push({
        id: `llm-${type}`,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        z: (Math.random() - 0.5) * 50,
        type,
        activity: Math.random() * 0.3,
        size: ANIMATION_CONFIG.LLM_NODE_SIZE_BASE + Math.random() * ANIMATION_CONFIG.LLM_NODE_SIZE_VARIANCE,
        connections: [],
        processingLoad: 0,
        lastQuery: 0,
        responseTime: ANIMATION_CONFIG.LLM_RESPONSE_TIME_BASE + Math.random() * ANIMATION_CONFIG.LLM_RESPONSE_TIME_VARIANCE,
        expertise: []
      });
    });

    return llmNodes;
  }, []);

  const createNeuronsForLayer = useCallback((layer: any, layerIndex: number, canvasHeight: number, startIndex: number): { neurons: Neuron[], clusterNeurons: number[] } => {
    const neurons: Neuron[] = [];
    const clusterNeurons: number[] = [];
    const verticalSpacing = Math.min(ANIMATION_CONFIG.NEURON_SPACING_MIN, (canvasHeight * 0.7) / layer.count);
    const startY = (canvasHeight - (layer.count * verticalSpacing)) / 2;
    const llmAffinities: Neuron['llmAffinity'][] = ['chatgpt', 'gemini', 'grok', 'claude', 'neutral'];

    for (let i = 0; i < layer.count; i++) {
      const baseY = startY + i * verticalSpacing;
      const neuronIndex = startIndex + i;

      const neuron: Neuron = {
        x: layer.x + (Math.random() - 0.5) * ANIMATION_CONFIG.NEURON_POSITION_VARIANCE,
        y: baseY + (Math.random() - 0.5) * 20,
        z: (Math.random() - 0.5) * ANIMATION_CONFIG.NEURON_Z_VARIANCE,
        targetX: layer.x,
        targetY: baseY,
        targetZ: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        radius: ANIMATION_CONFIG.NEURON_SIZE_BASE + Math.random() * ANIMATION_CONFIG.NEURON_SIZE_VARIANCE,
        activity: Math.random() * 0.3,
        energy: Math.random() * 0.5,
        type: layer.type,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
        lastActivation: 0,
        glowIntensity: 0,
        learningRate: 0.002 + Math.random() * 0.008,
        weight: Math.random() * 2 - 1,
        bias: Math.random() * 0.4 - 0.2,
        evolutionStage: 0,
        llmAffinity: llmAffinities[Math.floor(Math.random() * llmAffinities.length)]
      };

      neurons.push(neuron);
      clusterNeurons.push(neuronIndex);
    }

    return { neurons, clusterNeurons };
  }, []);

  const establishConnections = useCallback((neurons: Neuron[], layers: any[]) => {
    let currentIndex = 0;
    
    layers.forEach((layer, layerIndex) => {
      if (layerIndex < layers.length - 1) {
        const nextLayerStart = currentIndex + layer.count;
        const nextLayerCount = layers[layerIndex + 1].count;

        for (let i = 0; i < layer.count; i++) {
          const neuronIdx = currentIndex + i;
          const connectionCount = Math.floor(Math.random() * ANIMATION_CONFIG.CONNECTIONS_PER_NEURON_MAX) + ANIMATION_CONFIG.CONNECTIONS_PER_NEURON_MIN;

          // Smart connection distribution
          for (let j = 0; j < Math.min(connectionCount, nextLayerCount); j++) {
            const targetIdx = nextLayerStart + Math.floor((i / layer.count) * nextLayerCount + j) % nextLayerCount;
            if (!neurons[neuronIdx].connections.includes(targetIdx)) {
              neurons[neuronIdx].connections.push(targetIdx);
            }
          }
        }
      }
      currentIndex += layer.count;
    });
  }, []);

  // Update Functions
  const updateLLMNodes = useCallback((llmNodes: LLMNode[], dt: number, currentTime: number) => {
    llmNodes.forEach(llm => {
      llm.activity *= Math.pow(ANIMATION_CONFIG.LLM_ACTIVITY_DECAY, dt);
      llm.processingLoad *= Math.pow(ANIMATION_CONFIG.LLM_PROCESSING_DECAY, dt);

      // Autonomous LLM activation
      if (Math.random() < ANIMATION_CONFIG.AUTONOMOUS_LLM_FIRE_RATE * dt) {
        llm.activity = Math.min(1, llm.activity + 0.4);
        llm.processingLoad = Math.min(1, llm.processingLoad + 0.5);
        llm.lastQuery = currentTime;

        if (showParticles) {
          createFluidParticles(llm.x, llm.y, llm.z, ANIMATION_CONFIG.PARTICLE_COUNT_DEFAULT, 'thought', llm.type);
        }
      }
    });
  }, [createFluidParticles, showParticles]);

  const updateParticles = useCallback((particles: Particle[], llmNodes: LLMNode[], dt: number) => {
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];

      // Fluid particle behavior
      particle.spin += particle.frequency * dt;

      // LLM-specific particle behavior
      if (particle.llmType !== 'neutral') {
        const targetLLM = llmNodes.find(llm => llm.type === particle.llmType);
        if (targetLLM && targetLLM.activity > 0.3) {
          const dx = targetLLM.x - particle.x;
          const dy = targetLLM.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 5) {
            const force = 0.0008 * targetLLM.activity;
            particle.vx += (dx / distance) * force * dt;
            particle.vy += (dy / distance) * force * dt;
          }
        }
      }

      // Smooth movement with fluid damping
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.z += particle.vz * dt;
      particle.life -= dt;

      const damping = Math.pow(ANIMATION_CONFIG.PARTICLE_DAMPING, dt);
      particle.vx *= damping;
      particle.vy *= damping;
      particle.vz *= damping;

      if (particle.life <= 0) {
        particles.splice(i, 1);
      }
    }
  }, []);

  const updateNeurons = useCallback((neurons: Neuron[], dt: number, currentTime: number) => {
    neurons.forEach((neuron, index) => {
      neuron.pulsePhase += (ANIMATION_CONFIG.PULSE_SPEED + neuron.activity * ANIMATION_CONFIG.ACTIVITY_PULSE_SPEED) * dt;

      // Smooth return to position with adaptive learning
      const returnForce = ANIMATION_CONFIG.NEURON_RETURN_FORCE * (1 + neuron.learningRate * 5);
      const dx = neuron.targetX - neuron.x;
      const dy = neuron.targetY - neuron.y;
      const dz = neuron.targetZ - neuron.z;

      neuron.vx += dx * returnForce * dt;
      neuron.vy += dy * returnForce * dt;
      neuron.vz += dz * returnForce * 0.8 * dt;

      // Smooth decay with LLM context
      const timeSinceActivation = currentTime - neuron.lastActivation;
      const decayRate = neuron.llmAffinity !== 'neutral' ? ANIMATION_CONFIG.NEURON_ENERGY_DECAY : ANIMATION_CONFIG.NEURON_ACTIVITY_DECAY;

      if (timeSinceActivation > ANIMATION_CONFIG.ACTIVATION_TIMEOUT) {
        neuron.activity = Math.max(0.02, neuron.activity * Math.pow(1 - decayRate, dt));
        neuron.energy = Math.max(0.05, neuron.energy * Math.pow(1 - decayRate * 0.7, dt));
        neuron.glowIntensity = Math.max(0, neuron.glowIntensity * Math.pow(ANIMATION_CONFIG.NEURON_GLOW_DECAY, dt));
      }

      // Smooth movement
      neuron.x += neuron.vx * dt;
      neuron.y += neuron.vy * dt;
      neuron.z += neuron.vz * dt;

      const damping = Math.pow(ANIMATION_CONFIG.NEURON_DAMPING, dt);
      neuron.vx *= damping;
      neuron.vy *= damping;
      neuron.vz *= damping;

      // Autonomous firing with LLM context
      const llmBoost = neuron.llmAffinity !== 'neutral' ? ANIMATION_CONFIG.LLM_FIRE_BOOST : 1.0;
      const fireRate = ANIMATION_CONFIG.BASE_FIRE_RATE * llmBoost * (1 + neuron.energy);

      if (Math.random() < fireRate * dt) {
        neuron.activity = Math.min(1, neuron.activity + 0.25);
        neuron.lastActivation = currentTime;

        // Create contextual signals
        neuron.connections.forEach(targetIndex => {
          if (Math.random() > ANIMATION_CONFIG.CONNECTION_PROBABILITY) {
            const target = neurons[targetIndex];
            const llmColor = neuron.llmAffinity !== 'neutral' ? COLORS.llm[neuron.llmAffinity].glow : COLORS.neural[neuron.type].glow;

            const signal: Signal = {
              from: index,
              to: targetIndex,
              progress: 0,
              strength: neuron.activity * (ANIMATION_CONFIG.SIGNAL_STRENGTH_BASE + Math.random() * ANIMATION_CONFIG.SIGNAL_STRENGTH_VARIANCE),
              id: `${index}-${targetIndex}-${currentTime}-${Math.random()}`,
              color: llmColor,
              trail: [],
              frequency: ANIMATION_CONFIG.PARTICLE_FREQUENCY_BASE + Math.random() * 0.015,
              amplitude: neuron.activity,
              dataType: ['query', 'reasoning', 'response', 'knowledge'][Math.floor(Math.random() * 4)] as Signal['dataType'],
              processingTime: 0,
              llmSource: neuron.llmAffinity !== 'neutral' ? neuron.llmAffinity : 'claude'
            };
            signalsRef.current.push(signal);
          }
        });
      }
    });
  }, []);

  const updateSignals = useCallback((signals: Signal[], neurons: Neuron[], dt: number, currentTime: number) => {
    for (let i = signals.length - 1; i >= 0; i--) {
      const signal = signals[i];
      signal.progress += ANIMATION_CONFIG.SIGNAL_SPEED_BASE * dt * (1 + signal.frequency * 30);
      signal.processingTime += dt;

      if (signal.progress >= ANIMATION_CONFIG.SIGNAL_COMPLETION_THRESHOLD) {
        // Signal completion with smooth effects
        const targetNeuron = neurons[signal.to];
        if (targetNeuron) {
          targetNeuron.activity = Math.min(1, targetNeuron.activity + signal.strength * 0.4);
          targetNeuron.energy = Math.min(1, targetNeuron.energy + signal.strength * 0.3);
          targetNeuron.lastActivation = currentTime;
          targetNeuron.glowIntensity = Math.max(targetNeuron.glowIntensity, signal.strength * 0.7);

          // Create arrival particles
          if (showParticles) {
            createFluidParticles(targetNeuron.x, targetNeuron.y, targetNeuron.z, 2, 'response', signal.llmSource);
          }
        }
        signals.splice(i, 1);
        continue;
      }

      // Enhanced trail with smooth interpolation
      const fromNeuron = neurons[signal.from];
      const toNeuron = neurons[signal.to];

      if (fromNeuron && toNeuron) {
        const smoothProgress = signal.progress * signal.progress * (3 - 2 * signal.progress); // Smoothstep
        const x = fromNeuron.x + (toNeuron.x - fromNeuron.x) * smoothProgress;
        const y = fromNeuron.y + (toNeuron.y - fromNeuron.y) * smoothProgress;
        const z = fromNeuron.z + (toNeuron.z - fromNeuron.z) * smoothProgress;

        signal.trail.push({ 
          x: x + Math.sin(signal.processingTime * signal.frequency * 80) * signal.amplitude * 3,
          y: y + Math.cos(signal.processingTime * signal.frequency * 60) * signal.amplitude * 2,
          z: z,
          opacity: 1 
        });

        if (signal.trail.length > ANIMATION_CONFIG.SIGNAL_TRAIL_LENGTH) {
          signal.trail.shift();
        }

        // Update trail opacity smoothly
        signal.trail.forEach((point, idx) => {
          point.opacity = Math.pow((idx + 1) / signal.trail.length, 1.5) * 0.9 * signal.strength;
        });
      }
    }
  }, [createFluidParticles, showParticles]);

  // Drawing Functions
  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Create sophisticated gradient background
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height) * 0.8);
    gradient.addColorStop(0, COLORS.background.start);
    gradient.addColorStop(0.3, COLORS.background.mid);
    gradient.addColorStop(0.7, COLORS.background.end);
    gradient.addColorStop(1, '#000508');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Enhanced readability overlay
    ctx.fillStyle = COLORS.background.darkOverlay;
    ctx.fillRect(0, 0, width, height);
  }, []);

  const drawGrid = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    if (!showGrid) return;

    const gridOffset = (time * 8) % ANIMATION_CONFIG.GRID_SIZE;
    ctx.strokeStyle = `rgba(64, 224, 255, ${ANIMATION_CONFIG.GRID_OPACITY})`;
    ctx.lineWidth = ANIMATION_CONFIG.GRID_LINE_WIDTH;

    for (let x = -ANIMATION_CONFIG.GRID_SIZE + gridOffset; x < width + ANIMATION_CONFIG.GRID_SIZE; x += ANIMATION_CONFIG.GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = -ANIMATION_CONFIG.GRID_SIZE + gridOffset; y < height + ANIMATION_CONFIG.GRID_SIZE; y += ANIMATION_CONFIG.GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }, [showGrid]);

  const drawConnections = useCallback((ctx: CanvasRenderingContext2D, neurons: Neuron[], currentTime: number) => {
    neurons.forEach((neuron, index) => {
      neuron.connections.forEach(targetIndex => {
        const target = neurons[targetIndex];
        if (!target) return;

        const activity = (neuron.activity + target.activity) / 2;
        const baseOpacity = Math.max(ANIMATION_CONFIG.CONNECTION_OPACITY_MIN, activity * ANIMATION_CONFIG.CONNECTION_OPACITY_SCALE);

        // LLM-aware connection coloring
        let connectionColor = COLORS.connection;
        if (neuron.llmAffinity !== 'neutral' && target.llmAffinity === neuron.llmAffinity) {
          connectionColor = COLORS.llm[neuron.llmAffinity].secondary;
        }

        const gradient = ctx.createLinearGradient(neuron.x, neuron.y, target.x, target.y);
        gradient.addColorStop(0, `${connectionColor}${Math.floor(baseOpacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${baseOpacity * 0.3})`);
        gradient.addColorStop(1, `${connectionColor}${Math.floor(baseOpacity * 255).toString(16).padStart(2, '0')}`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.max(0.5, ANIMATION_CONFIG.CONNECTION_WIDTH_BASE + activity * ANIMATION_CONFIG.CONNECTION_WIDTH_SCALE);

        // Smooth animated dash
        const dashLength = 3 + activity * 4;
        ctx.setLineDash([dashLength, dashLength * 1.5]);
        ctx.lineDashOffset = -currentTime * ANIMATION_CONFIG.DASH_ANIMATION_SPEED * (1 + activity);

        ctx.beginPath();
        ctx.moveTo(neuron.x, neuron.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });
    });
  }, []);

  const drawSignals = useCallback((ctx: CanvasRenderingContext2D, signals: Signal[]) => {
    signals.forEach(signal => {
      signal.trail.forEach((point, idx) => {
        if (idx === 0) return;

        const prevPoint = signal.trail[idx - 1];
        const gradient = ctx.createLinearGradient(prevPoint.x, prevPoint.y, point.x, point.y);
        gradient.addColorStop(0, `${signal.color}${Math.floor(prevPoint.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${signal.color}${Math.floor(point.opacity * 255).toString(16).padStart(2, '0')}`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.max(1, 3 * signal.strength);
        ctx.shadowColor = signal.color;
        ctx.shadowBlur = 6 * signal.strength;

        ctx.beginPath();
        ctx.moveTo(prevPoint.x, prevPoint.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    });
  }, []);

  const drawLLMNodes = useCallback((ctx: CanvasRenderingContext2D, llmNodes: LLMNode[], time: number, currentTime: number) => {
    llmNodes.forEach(llm => {
      const pulse = Math.sin(time * 2 + llm.x * 0.01) * 0.15 + 0.85;
      const size = llm.size * (1 + llm.activity * 0.4) * pulse;
      const colorConfig = COLORS.llm[llm.type];

      // Enhanced outer glow effect
      if (llm.activity > ANIMATION_CONFIG.GLOW_INTENSITY_MIN) {
        for (let i = 0; i < ANIMATION_CONFIG.GLOW_LAYERS; i++) {
          const glowSize = size * (ANIMATION_CONFIG.GLOW_SIZE_MULTIPLIER - i * 0.5);
          const glowAlpha = (llm.activity * 0.8) / (i + 1);
          
          ctx.shadowColor = colorConfig.glow;
          ctx.shadowBlur = ANIMATION_CONFIG.SHADOW_BLUR_MAX * llm.activity;
          ctx.fillStyle = `${colorConfig.glow}${Math.floor(glowAlpha * 60).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(llm.x, llm.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }

      // Main LLM node with enhanced gradient
      const gradient = ctx.createRadialGradient(
        llm.x - size * 0.25, llm.y - size * 0.25, 0,
        llm.x, llm.y, size * ANIMATION_CONFIG.BORDER_PULSE_MULTIPLIER
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.3, `${colorConfig.primary}FF`);
      gradient.addColorStop(0.8, `${colorConfig.secondary}DD`);
      gradient.addColorStop(1, `${colorConfig.secondary}20`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(llm.x, llm.y, size, 0, Math.PI * 2);
      ctx.fill();

      // Enhanced border
      ctx.strokeStyle = `${colorConfig.accent}${Math.floor((0.8 + llm.activity * 0.2) * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 2 + llm.activity;
      ctx.beginPath();
      ctx.arc(llm.x, llm.y, size, 0, Math.PI * 2);
      ctx.stroke();

      // Enhanced logo designs
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 3;
      
      switch (llm.type) {
        case 'chatgpt':
          // ChatGPT logo with rounded squares
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          const squareSize = size * 0.35;
          ctx.beginPath();
          ctx.roundRect(llm.x - squareSize/2, llm.y - squareSize/2, squareSize, squareSize, squareSize * 0.2);
          ctx.fill();
          
          ctx.fillStyle = colorConfig.primary;
          ctx.font = `bold ${size * 0.25}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('GPT', llm.x, llm.y);
          break;
          
        case 'gemini':
          // Enhanced Gemini constellation pattern
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          const starSize = size * 0.08;
          const positions = [
            { x: llm.x - size * 0.25, y: llm.y - size * 0.15 },
            { x: llm.x + size * 0.25, y: llm.y - size * 0.15 },
            { x: llm.x - size * 0.15, y: llm.y + size * 0.25 },
            { x: llm.x + size * 0.15, y: llm.y + size * 0.25 },
            { x: llm.x, y: llm.y - size * 0.3 },
            { x: llm.x, y: llm.y + size * 0.1 }
          ];
          
          // Draw stars
          positions.forEach(pos => {
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
              const angle = (i * 4 * Math.PI) / 5;
              const x = pos.x + Math.cos(angle) * starSize;
              const y = pos.y + Math.sin(angle) * starSize;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
          });
          
          // Connect with lines
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(positions[0].x, positions[0].y);
          ctx.lineTo(positions[1].x, positions[1].y);
          ctx.lineTo(positions[3].x, positions[3].y);
          ctx.lineTo(positions[2].x, positions[2].y);
          ctx.lineTo(positions[0].x, positions[0].y);
          ctx.stroke();
          break;
          
        case 'grok':
          // Enhanced X logo with cross pattern
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.lineWidth = size * 0.15;
          ctx.lineCap = 'round';
          
          const crossSize = size * 0.4;
          ctx.beginPath();
          ctx.moveTo(llm.x - crossSize, llm.y - crossSize);
          ctx.lineTo(llm.x + crossSize, llm.y + crossSize);
          ctx.moveTo(llm.x + crossSize, llm.y - crossSize);
          ctx.lineTo(llm.x - crossSize, llm.y + crossSize);
          ctx.stroke();
          break;
          
        case 'claude':
          // Enhanced Claude logo with abstract curves
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.lineWidth = size * 0.08;
          ctx.lineCap = 'round';
          
          // Draw flowing curves
          ctx.beginPath();
          ctx.arc(llm.x - size * 0.15, llm.y, size * 0.3, Math.PI * 0.2, Math.PI * 0.8);
          ctx.arc(llm.x + size * 0.15, llm.y, size * 0.3, Math.PI * 1.2, Math.PI * 1.8);
          ctx.stroke();
          
          // Center dot
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.beginPath();
          ctx.arc(llm.x, llm.y, size * 0.08, 0, Math.PI * 2);
          ctx.fill();
          break;
      }
      
      ctx.restore();

      // Enhanced processing load indicator with multiple rings
      if (llm.processingLoad > 0.05) {
        const rings = 2;
        for (let ring = 0; ring < rings; ring++) {
          const ringRadius = size * (1.4 + ring * 0.2);
          const ringAlpha = llm.processingLoad * (1 - ring * 0.3);
          
          ctx.strokeStyle = `${colorConfig.accent}${Math.floor(ringAlpha * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2 - ring * 0.5;
          ctx.setLineDash([8, 8]);
          ctx.lineDashOffset = -currentTime * 0.01 * (ring + 1);
          
          ctx.beginPath();
          ctx.arc(llm.x, llm.y, ringRadius, 0, Math.PI * 2 * llm.processingLoad);
          ctx.stroke();
          
          ctx.setLineDash([]);
        }
      }

      // Activity pulse rings
      if (llm.activity > 0.3) {
        for (let i = 0; i < 3; i++) {
          const pulsePhase = (currentTime * ANIMATION_CONFIG.PULSE_ANIMATION_SPEED + i * 0.5) % 1;
          const pulseRadius = size * (1.5 + pulsePhase * 2);
          const pulseAlpha = llm.activity * (1 - pulsePhase) * 0.4;
          
          ctx.strokeStyle = `${colorConfig.glow}${Math.floor(pulseAlpha * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(llm.x, llm.y, pulseRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    });
  }, []);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    if (!showParticles) return;

    particles.forEach(particle => {
      const alpha = particle.life / particle.maxLife;
      const size = particle.size * alpha;

      const llmColorConfig = particle.llmType !== 'neutral' ? COLORS.llm[particle.llmType] : null;
      const particleColor = llmColorConfig ? llmColorConfig.primary : particle.color;

      ctx.fillStyle = `${particleColor}${Math.floor(alpha * 200).toString(16).padStart(2, '0')}`;
      ctx.shadowColor = particleColor;
      ctx.shadowBlur = 4 * alpha;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }, [showParticles]);

  const drawNeurons = useCallback((ctx: CanvasRenderingContext2D, neurons: Neuron[]) => {
    neurons.forEach((neuron) => {
      const baseSize = Math.max(1.5, neuron.radius);
      const activityPulse = Math.sin(neuron.pulsePhase) * 0.3 + 1;
      const size = baseSize * (1 + neuron.activity * 0.5) * activityPulse;

      const neuralColorConfig = COLORS.neural[neuron.type];
      const llmColorConfig = neuron.llmAffinity !== 'neutral' ? COLORS.llm[neuron.llmAffinity] : null;

      // Enhanced glow
      if (neuron.glowIntensity > ANIMATION_CONFIG.GLOW_INTENSITY_MIN || neuron.activity > ANIMATION_CONFIG.ACTIVITY_THRESHOLD) {
        const glowIntensity = Math.max(neuron.glowIntensity, neuron.activity * 0.7);
        const glowColor = llmColorConfig ? llmColorConfig.glow : neuralColorConfig.glow;

        ctx.shadowColor = glowColor;
        ctx.shadowBlur = Math.max(6, glowIntensity * ANIMATION_CONFIG.SHADOW_BLUR_MAX);
        ctx.fillStyle = `rgba(255, 255, 255, ${glowIntensity * 0.3})`;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, size * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Main neuron with LLM-aware coloring
      const gradient = ctx.createRadialGradient(
        neuron.x - size * 0.3, neuron.y - size * 0.3, 0,
        neuron.x, neuron.y, size
      );

      const primaryColor = llmColorConfig ? llmColorConfig.primary : neuralColorConfig.base;
      const alpha = 0.7 + neuron.activity * 0.3;

      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.4, `${primaryColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${primaryColor}40`);

      ctx.fillStyle = gradient;
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = Math.max(3, neuron.activity * 15);
      ctx.beginPath();
      ctx.arc(neuron.x, neuron.y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // LLM affinity indicator
      if (neuron.llmAffinity !== 'neutral' && neuron.activity > 0.3) {
        ctx.strokeStyle = `${llmColorConfig?.accent || '#FFFFFF'}${Math.floor(neuron.activity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, size * ANIMATION_CONFIG.BORDER_PULSE_MULTIPLIER, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
  }, []);

  const drawLabels = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    if (!showLabels) return;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#00FFFF';
    ctx.shadowBlur = 2;

    const currentLLM = globalProcessingStateRef.current.currentLLM;
    const llmSuffix = currentLLM !== 'hybrid' ? ` [${currentLLM.toUpperCase()}]` : '';

    ctx.fillText('INPUT', width * ANIMATION_CONFIG.LAYER_POSITIONS[0], height - 15);
    ctx.fillText('PROCESSING' + llmSuffix, width * ANIMATION_CONFIG.LAYER_POSITIONS[1], height - 15);
    ctx.fillText('REASONING', width * ANIMATION_CONFIG.LAYER_POSITIONS[2], height - 15);
    ctx.fillText('OUTPUT', width * ANIMATION_CONFIG.LAYER_POSITIONS[3], height - 15);

    ctx.shadowBlur = 0;
  }, [showLabels]);

  const drawMouseTrail = useCallback((ctx: CanvasRenderingContext2D, mouse: typeof mouseRef.current) => {
    // Enhanced mouse trail
    if (mouse.trail.length > 1) {
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.7 + mouse.interactionStrength * 0.3})`;
      ctx.lineWidth = 2 + mouse.interactionStrength * 2;
      ctx.shadowColor = '#00FFFF';
      ctx.shadowBlur = 8;

      ctx.beginPath();
      for (let i = 0; i < mouse.trail.length - 1; i++) {
        const point = mouse.trail[i];
        const alpha = (1 - i / mouse.trail.length) * point.alpha;

        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          const nextPoint = mouse.trail[i + 1];
          const cpx = (point.x + nextPoint.x) / 2;
          const cpy = (point.y + nextPoint.y) / 2;
          ctx.quadraticCurveTo(point.x, point.y, cpx, cpy);
        }

        mouse.trail[i].alpha *= 0.94;
      }

      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }, []);

  const drawCursor = useCallback((ctx: CanvasRenderingContext2D, mouse: typeof mouseRef.current, currentTime: number) => {
    // Enhanced cursor interaction
    if (mouse.isActive) {
      const pulse = Math.sin(currentTime * ANIMATION_CONFIG.CURSOR_PULSE_SPEED) * 0.2 + 0.8;
      const dynamicRadius = Math.min(120, ANIMATION_CONFIG.CURSOR_RADIUS_BASE + mouse.interactionStrength * ANIMATION_CONFIG.CURSOR_RADIUS_VARIANCE);

      ctx.strokeStyle = `rgba(0, 255, 255, ${pulse * 0.8})`;
      ctx.lineWidth = 2 + mouse.interactionStrength;
      ctx.setLineDash([8, 8]);
      ctx.lineDashOffset = -currentTime * 0.1;
      ctx.shadowColor = '#00FFFF';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, dynamicRadius * pulse, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.shadowBlur = 0;

      if (mouse.clicked) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, ANIMATION_CONFIG.CURSOR_RADIUS_BASE, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }, []);

  // Main initialization function
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Enhanced smooth rendering settings
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // High DPI support with optimization
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize streamlined 4-layer neural network with LLM integration
    const initEnhancedNeuralNetwork = () => {
      const neurons: Neuron[] = [];
      const clusters: NeuralCluster[] = [];
      const canvasWidth = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const canvasHeight = canvas.height / Math.min(window.devicePixelRatio || 1, 2);

      // Create LLM nodes
      const llmNodes = createLLMNodes(canvasWidth, canvasHeight);

      // 4 optimized neural layers with configurable counts
      const layers = [
        { type: 'input' as const, count: neuronCount.input || 10, x: canvasWidth * ANIMATION_CONFIG.LAYER_POSITIONS[0], specialization: 'input_processing' },
        { type: 'processing' as const, count: neuronCount.processing || 15, x: canvasWidth * ANIMATION_CONFIG.LAYER_POSITIONS[1], specialization: 'multi_modal_reasoning' },
        { type: 'reasoning' as const, count: neuronCount.reasoning || 12, x: canvasWidth * ANIMATION_CONFIG.LAYER_POSITIONS[2], specialization: 'knowledge_synthesis' },
        { type: 'output' as const, count: neuronCount.output || 8, x: canvasWidth * ANIMATION_CONFIG.LAYER_POSITIONS[3], specialization: 'response_generation' }
      ];

      let neuronIndex = 0;
      const llmTypes: ('chatgpt' | 'gemini' | 'grok' | 'claude')[] = ['chatgpt', 'gemini', 'grok', 'claude'];

      layers.forEach((layer, layerIndex) => {
        const { neurons: layerNeurons, clusterNeurons } = createNeuronsForLayer(layer, layerIndex, canvasHeight, neuronIndex);
        neurons.push(...layerNeurons);

        // Create neural cluster
        clusters.push({
          id: `cluster-${layerIndex}`,
          center: { x: layer.x, y: canvasHeight / 2, z: 0 },
          neurons: clusterNeurons,
          specialization: layer.specialization as NeuralCluster['specialization'],
          activation: 0,
          learningProgress: 0,
          complexity: Math.random() * 0.4 + 0.6,
          dominantLLM: llmTypes[layerIndex % llmTypes.length]
        });

        neuronIndex += layer.count;
      });

      // Create intelligent connections between layers
      establishConnections(neurons, layers);

      neuronsRef.current = neurons;
      neuralClustersRef.current = clusters;
      llmNodesRef.current = llmNodes;
      signalsRef.current = [];
      particlesRef.current = [];
      dataStreamsRef.current = [];
    };

    initEnhancedNeuralNetwork();

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touches = Array.from(e.touches).map(touch => ({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        id: touch.identifier
      }));
      
      mouseRef.current.touches = touches;
      
      if (touches.length > 0) {
        const touch = touches[0];
        mouseRef.current.x = touch.x;
        mouseRef.current.y = touch.y;
        mouseRef.current.isActive = true;
        
        // Trigger click-like behavior for touch
        handleInteraction(touch.x, touch.y, true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touches = Array.from(e.touches).map(touch => ({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        id: touch.identifier
      }));
      
      mouseRef.current.touches = touches;
      
      if (touches.length > 0) {
        const touch = touches[0];
        handleInteraction(touch.x, touch.y, false);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      mouseRef.current.touches = [];
      mouseRef.current.isActive = false;
      mouseRef.current.trail = [];
    };

    // Unified interaction handler for mouse and touch
    const handleInteraction = (newX: number, newY: number, isClick: boolean = false) => {
      // Smooth velocity calculation with damping
      mouseRef.current.velocity.x = (mouseRef.current.velocity.x * ANIMATION_CONFIG.VELOCITY_DAMPING) + (newX - mouseRef.current.lastX) * (1 - ANIMATION_CONFIG.VELOCITY_DAMPING);
      mouseRef.current.velocity.y = (mouseRef.current.velocity.y * ANIMATION_CONFIG.VELOCITY_DAMPING) + (newY - mouseRef.current.lastY) * (1 - ANIMATION_CONFIG.VELOCITY_DAMPING);

      const speed = Math.sqrt(mouseRef.current.velocity.x ** 2 + mouseRef.current.velocity.y ** 2);
      mouseRef.current.interactionStrength = Math.min(1, speed / 15);

      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
      mouseRef.current.isActive = true;

      // Smooth trail with better interpolation
      mouseRef.current.trail.unshift({ 
        x: newX, 
        y: newY, 
        alpha: 1,
        z: Math.sin(Date.now() * 0.008) * 15
      });
      if (mouseRef.current.trail.length > ANIMATION_CONFIG.MOUSE_TRAIL_LENGTH) {
        mouseRef.current.trail.pop();
      }

      // Enhanced neural interactions with LLM context
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt((neuron.x - newX) ** 2 + (neuron.y - newY) ** 2);
        const interactionRadius = isClick ? ANIMATION_CONFIG.INTERACTION_RADIUS_CLICK : ANIMATION_CONFIG.INTERACTION_RADIUS_BASE;
        
        if (distance < interactionRadius) {
          const influence = Math.pow((interactionRadius - distance) / interactionRadius, 1.5);

          neuron.activity = Math.min(1, neuron.activity + influence * (isClick ? 0.02 : 0.012));
          neuron.glowIntensity = Math.max(neuron.glowIntensity, influence * (isClick ? 0.9 : 0.7));

          // Create contextual particles based on LLM affinity
          if (showParticles && neuron.activity > 0.6 && Math.random() > (isClick ? 0.5 : 0.88)) {
            createFluidParticles(neuron.x, neuron.y, neuron.z, isClick ? ANIMATION_CONFIG.PARTICLE_COUNT_CLICK : ANIMATION_CONFIG.PARTICLE_COUNT_DEFAULT, 'thought', neuron.llmAffinity);
          }
        }
      });

      // LLM node interactions
      llmNodesRef.current.forEach(llmNode => {
        const distance = Math.sqrt((llmNode.x - newX) ** 2 + (llmNode.y - newY) ** 2);
        const interactionRadius = isClick ? ANIMATION_CONFIG.LLM_INTERACTION_RADIUS_CLICK : ANIMATION_CONFIG.LLM_INTERACTION_RADIUS;
        
        if (distance < interactionRadius) {
          const influence = (interactionRadius - distance) / interactionRadius;
          llmNode.activity = Math.min(1, llmNode.activity + influence * (isClick ? 0.02 : 0.015));
          llmNode.processingLoad = Math.max(llmNode.processingLoad, influence * (isClick ? 1.0 : 0.8));

          if (showParticles && Math.random() > (isClick ? 0.3 : 0.85)) {
            createFluidParticles(llmNode.x, llmNode.y, llmNode.z, isClick ? 6 : 3, 'response', llmNode.type);
          }
        }
      });

      if (isClick) {
        mouseRef.current.clicked = true;
        handleClickResponse(newX, newY);
        setTimeout(() => { mouseRef.current.clicked = false; }, 150);
      }
    };

    // Smooth mouse interactions
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      handleInteraction(newX, newY, false);
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
      mouseRef.current.trail = [];
      mouseRef.current.velocity = { x: 0, y: 0 },
      mouseRef.current.interactionStrength = 0;
    };

    const handleClickResponse = (clickX: number, clickY: number) => {
      // Create intelligent response based on nearest LLM
      let nearestLLM = llmNodesRef.current[0];
      let minDistance = Infinity;

      llmNodesRef.current.forEach(llm => {
        const distance = Math.sqrt((llm.x - clickX) ** 2 + (llm.y - clickY) ** 2);
        if (distance < minDistance) {
          minDistance = distance;
          nearestLLM = llm;
        }
      });

      // Activate the nearest LLM and create cascade effect
      nearestLLM.activity = 1;
      nearestLLM.processingLoad = 1;
      nearestLLM.lastQuery = Date.now();
      globalProcessingStateRef.current.currentLLM = nearestLLM.type;
      globalProcessingStateRef.current.activeQueries++;

      // Create response particles
      if (showParticles) {
        createFluidParticles(clickX, clickY, 0, 8, 'response', nearestLLM.type);
      }

      // Trigger neural cascade
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt(Math.pow(neuron.x - clickX, 2) + Math.pow(neuron.y - clickY, 2));
        if (distance < ANIMATION_CONFIG.INTERACTION_RADIUS_CLICK) {
          const influence = (ANIMATION_CONFIG.INTERACTION_RADIUS_CLICK - distance) / ANIMATION_CONFIG.INTERACTION_RADIUS_CLICK;

          setTimeout(() => {
            neuron.activity = Math.min(1, neuron.activity + influence * 0.8);
            neuron.energy = Math.min(1, neuron.energy + influence * 0.6);
            neuron.glowIntensity = influence * 0.9;
            neuron.lastActivation = Date.now();

            // Create signals with LLM context
            neuron.connections.forEach(targetIndex => {
              if (Math.random() > 0.3) {
                const target = neuronsRef.current[targetIndex];
                const signal: Signal = {
                  from: index,
                  to: targetIndex,
                  progress: 0,
                  strength: neuron.activity * influence * (0.7 + Math.random() * 0.3),
                  id: `${index}-${targetIndex}-${Date.now()}-${Math.random()}`,
                  color: COLORS.llm[nearestLLM.type].glow,
                  trail: [],
                  frequency: 0.025 + Math.random() * 0.02,
                  amplitude: influence,
                  dataType: ['query', 'reasoning', 'response', 'knowledge'][Math.floor(Math.random() * 4)] as Signal['dataType'],
                  processingTime: 0,
                  llmSource: nearestLLM.type
                };
                signalsRef.current.push(signal);

                // Create corresponding data stream
                createSmoothDataStream(
                  { x: neuron.x, y: neuron.y, z: neuron.z },
                  { x: target.x, y: target.y, z: target.z },
                  nearestLLM.type
                );
              }
            });
          }, distance * 0.8); // Smooth wave propagation
        }
      });
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      handleInteraction(clickX, clickY, true);
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
    // Touch event listeners
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Enhanced fluid animation loop
    const animate = (animationTime: number) => {
      const deltaTime = animationTime - lastTimeRef.current;
      lastTimeRef.current = animationTime;
      const dt = Math.min(deltaTime / ANIMATION_CONFIG.FRAME_TIME_TARGET, ANIMATION_CONFIG.MAX_DELTA_TIME); // Smooth frame limiting
      const time = animationTime * ANIMATION_CONFIG.TIME_SCALE;
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const height = canvas.height / Math.min(window.devicePixelRatio || 1, 2);
      const currentTime = Date.now();

      // Drawing operations
      drawBackground(ctx, width, height);
      drawGrid(ctx, width, height, time);

      const neurons = neuronsRef.current;
      const signals = signalsRef.current;
      const particles = particlesRef.current;
      const llmNodes = llmNodesRef.current;
      const mouse = mouseRef.current;

      // Update all entities
      updateLLMNodes(llmNodes, dt, currentTime);
      updateParticles(particles, llmNodes, dt);
      updateNeurons(neurons, dt, currentTime);
      updateSignals(signals, neurons, dt, currentTime);

      // Draw all entities
      drawConnections(ctx, neurons, currentTime);
      drawSignals(ctx, signals);
      drawLLMNodes(ctx, llmNodes, time, currentTime);
      drawParticles(ctx, particles);
      drawNeurons(ctx, neurons);
      drawLabels(ctx, width, height);
      drawMouseTrail(ctx, mouse);
      drawCursor(ctx, mouse, currentTime);

      // Global processing state decay
      globalProcessingStateRef.current.activeQueries = Math.max(0, globalProcessingStateRef.current.activeQueries - 0.01 * dt);
      globalProcessingStateRef.current.processingLoad *= Math.pow(ANIMATION_CONFIG.GLOBAL_STATE_DECAY, dt);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start enhanced animation
    setTimeout(() => {
      setIsLoaded(true);
      requestAnimationFrame(animate);
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createFluidParticles, createSmoothDataStream, createLLMNodes, createNeuronsForLayer, establishConnections, updateLLMNodes, updateParticles, updateNeurons, updateSignals, drawBackground, drawGrid, drawConnections, drawSignals, drawLLMNodes, drawParticles, drawNeurons, drawLabels, drawMouseTrail, drawCursor, showParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)',
        cursor: 'crosshair',
        pointerEvents: 'auto',
        touchAction: 'none'
      }}
    />
  );
}
