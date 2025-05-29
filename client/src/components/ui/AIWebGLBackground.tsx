
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
  type: 'input' | 'hidden' | 'output' | 'memory' | 'attention';
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
  memoryStrength: number;
  attentionFocus: number;
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
  dataType: 'text' | 'image' | 'audio' | 'vector' | 'prediction';
  processingTime: number;
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
  type: 'data' | 'energy' | 'quantum' | 'memory' | 'computation';
  spin: number;
  frequency: number;
}

interface DataStream {
  id: string;
  path: Array<{ x: number; y: number; z: number }>;
  progress: number;
  speed: number;
  intensity: number;
  dataType: 'input' | 'processing' | 'output' | 'feedback';
  packets: Array<{ position: number; size: number; color: string }>;
}

interface QuantumField {
  x: number;
  y: number;
  z: number;
  radius: number;
  strength: number;
  phase: number;
  frequency: number;
  coherence: number;
  entanglement: number[];
}

interface NeuralCluster {
  id: string;
  center: { x: number; y: number; z: number };
  neurons: number[];
  specialization: 'pattern_recognition' | 'decision_making' | 'memory_formation' | 'prediction' | 'creativity';
  activation: number;
  learningProgress: number;
  complexity: number;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const dataStreamsRef = useRef<DataStream[]>([]);
  const quantumFieldsRef = useRef<QuantumField[]>([]);
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
    interactionStrength: 0
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const lastTimeRef = useRef(0);
  const evolutionCycleRef = useRef(0);
  const learningEpochRef = useRef(0);
  const globalProcessingStateRef = useRef({
    attentionFocus: { x: 0, y: 0 },
    memoryConsolidation: 0,
    creativityMode: false,
    problemSolvingActive: false,
    patternRecognitionActive: false
  });

  // Enhanced AI-inspired color palette with semantic meaning
  const colors = {
    input: { base: '#00FF80', glow: '#00FF80', trail: '#40E0D0', semantic: 'data_ingestion' },
    hidden: { base: '#40E0FF', glow: '#00BFFF', trail: '#1E90FF', semantic: 'processing' },
    output: { base: '#FF8040', glow: '#FF6347', trail: '#FF4500', semantic: 'results' },
    memory: { base: '#9D4EDD', glow: '#C77DFF', trail: '#E0AAFF', semantic: 'storage' },
    attention: { base: '#FFD700', glow: '#FFA500', trail: '#FFFF00', semantic: 'focus' },
    neural: { base: '#9D4EDD', glow: '#C77DFF', trail: '#E0AAFF' },
    quantum: { base: '#FF006E', glow: '#FF5D8F', trail: '#FFADCC' },
    connection: '#40E0FF',
    background: { 
      start: '#0A0A0F', 
      mid: '#0F0F1A', 
      end: '#0A0A0F',
      darkOverlay: 'rgba(0, 0, 0, 0.75)',
      quantumField: 'rgba(157, 78, 221, 0.08)'
    },
    particle: '#00FFFF',
    energy: '#FFD700',
    data: {
      text: '#00CED1',
      image: '#FF69B4',
      audio: '#32CD32',
      vector: '#FF6347',
      prediction: '#9370DB'
    },
    cluster: {
      pattern_recognition: '#FF4500',
      decision_making: '#00FF00',
      memory_formation: '#9400D3',
      prediction: '#FFD700',
      creativity: '#FF1493'
    }
  };

  const createParticles = useCallback((x: number, y: number, z: number = 0, count: number = 5, type: Particle['type'] = 'data', color: string = colors.particle) => {
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        z: z + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        vz: (Math.random() - 0.5) * 4,
        life: 120 + Math.random() * 60,
        maxLife: 120 + Math.random() * 60,
        size: Math.random() * 4 + 1,
        color,
        type,
        spin: Math.random() * 0.1,
        frequency: Math.random() * 0.05 + 0.01
      });
    }
  }, []);

  const createDataStream = useCallback((startNeuron: Neuron, endNeuron: Neuron, dataType: DataStream['dataType']) => {
    const id = `stream-${Date.now()}-${Math.random()}`;
    const path = [];
    
    // Create curved path with multiple control points
    const steps = 20;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const curve = Math.sin(t * Math.PI) * 0.3;
      const x = startNeuron.x + (endNeuron.x - startNeuron.x) * t + curve * 50;
      const y = startNeuron.y + (endNeuron.y - startNeuron.y) * t + curve * 30;
      const z = startNeuron.z + (endNeuron.z - startNeuron.z) * t + curve * 20;
      path.push({ x, y, z });
    }

    const packets = [];
    for (let i = 0; i < 5; i++) {
      packets.push({
        position: Math.random() * 0.8,
        size: Math.random() * 3 + 1,
        color: colors.data[dataType as keyof typeof colors.data] || colors.data.text
      });
    }

    dataStreamsRef.current.push({
      id,
      path,
      progress: 0,
      speed: 0.015 + Math.random() * 0.01,
      intensity: 0.8 + Math.random() * 0.2,
      dataType,
      packets
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI support
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize advanced neural network with specialized clusters
    const initAdvancedNeuralNetwork = () => {
      const neurons: Neuron[] = [];
      const clusters: NeuralCluster[] = [];
      const quantumFields: QuantumField[] = [];
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Create specialized neural layers with different architectures
      const layers = [
        { type: 'input' as const, count: 12, x: canvasWidth * 0.08, specialization: 'data_reception' },
        { type: 'attention' as const, count: 8, x: canvasWidth * 0.22, specialization: 'pattern_recognition' },
        { type: 'hidden' as const, count: 16, x: canvasWidth * 0.35, specialization: 'processing' },
        { type: 'memory' as const, count: 10, x: canvasWidth * 0.48, specialization: 'memory_formation' },
        { type: 'hidden' as const, count: 14, x: canvasWidth * 0.62, specialization: 'decision_making' },
        { type: 'hidden' as const, count: 12, x: canvasWidth * 0.75, specialization: 'prediction' },
        { type: 'output' as const, count: 8, x: canvasWidth * 0.92, specialization: 'results' }
      ];

      let neuronIndex = 0;
      layers.forEach((layer, layerIndex) => {
        const clusterNeurons: number[] = [];
        const verticalSpacing = Math.min(50, (canvasHeight * 0.8) / layer.count);
        const startY = (canvasHeight - (layer.count * verticalSpacing)) / 2;
        
        for (let i = 0; i < layer.count; i++) {
          const baseY = startY + i * verticalSpacing;
          const neuron: Neuron = {
            x: layer.x + (Math.random() - 0.5) * 20,
            y: baseY + (Math.random() - 0.5) * 20,
            z: (Math.random() - 0.5) * 100,
            targetX: layer.x,
            targetY: baseY,
            targetZ: 0,
            vx: 0,
            vy: 0,
            vz: 0,
            radius: 3 + Math.random() * 4,
            activity: Math.random() * 0.2,
            energy: Math.random(),
            type: layer.type,
            connections: [],
            pulsePhase: Math.random() * Math.PI * 2,
            lastActivation: 0,
            glowIntensity: 0,
            learningRate: 0.001 + Math.random() * 0.009,
            weight: Math.random() * 2 - 1,
            bias: Math.random() * 0.5 - 0.25,
            evolutionStage: 0,
            memoryStrength: Math.random(),
            attentionFocus: Math.random()
          };
          
          neurons.push(neuron);
          clusterNeurons.push(neuronIndex);
          neuronIndex++;
        }

        // Create neural cluster
        clusters.push({
          id: `cluster-${layerIndex}`,
          center: { x: layer.x, y: canvasHeight / 2, z: 0 },
          neurons: clusterNeurons,
          specialization: layer.specialization as NeuralCluster['specialization'],
          activation: 0,
          learningProgress: 0,
          complexity: Math.random() * 0.5 + 0.5
        });
      });

      // Create sophisticated connections with attention mechanisms
      let currentIndex = 0;
      layers.forEach((layer, layerIndex) => {
        if (layerIndex < layers.length - 1) {
          const nextLayerStart = currentIndex + layer.count;
          const nextLayerCount = layers[layerIndex + 1].count;
          
          for (let i = 0; i < layer.count; i++) {
            const neuronIdx = currentIndex + i;
            const connectionCount = Math.floor(Math.random() * 4) + 3; // 3-6 connections
            const possibleConnections = Array.from({ length: nextLayerCount }, (_, j) => nextLayerStart + j);
            
            // Weighted connection selection based on spatial proximity and specialization
            for (let j = 0; j < Math.min(connectionCount, nextLayerCount); j++) {
              const weights = possibleConnections.map(targetIdx => {
                const target = neurons[targetIdx];
                const source = neurons[neuronIdx];
                const distance = Math.sqrt(
                  Math.pow(target.x - source.x, 2) + 
                  Math.pow(target.y - source.y, 2)
                );
                return 1 / (1 + distance * 0.001); // Closer neurons more likely to connect
              });
              
              const totalWeight = weights.reduce((sum, w) => sum + w, 0);
              let random = Math.random() * totalWeight;
              let selectedIndex = 0;
              
              for (let k = 0; k < weights.length; k++) {
                random -= weights[k];
                if (random <= 0) {
                  selectedIndex = k;
                  break;
                }
              }
              
              const targetIdx = possibleConnections.splice(selectedIndex, 1)[0];
              neurons[neuronIdx].connections.push(targetIdx);
            }
          }
        }
        currentIndex += layer.count;
      });

      // Initialize quantum fields for enhanced processing
      for (let i = 0; i < 6; i++) {
        quantumFields.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          z: (Math.random() - 0.5) * 200,
          radius: 80 + Math.random() * 120,
          strength: 0.5 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          frequency: 0.01 + Math.random() * 0.02,
          coherence: Math.random(),
          entanglement: []
        });
      }

      // Create entanglement between quantum fields
      quantumFields.forEach((field, i) => {
        const entanglementCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < entanglementCount; j++) {
          const targetIndex = Math.floor(Math.random() * quantumFields.length);
          if (targetIndex !== i && !field.entanglement.includes(targetIndex)) {
            field.entanglement.push(targetIndex);
          }
        }
      });

      neuronsRef.current = neurons;
      neuralClustersRef.current = clusters;
      quantumFieldsRef.current = quantumFields;
      signalsRef.current = [];
      particlesRef.current = [];
      dataStreamsRef.current = [];
    };

    initAdvancedNeuralNetwork();

    // Enhanced mouse interactions with meaningful feedback
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      // Calculate velocity and interaction strength
      mouseRef.current.velocity.x = newX - mouseRef.current.lastX;
      mouseRef.current.velocity.y = newY - mouseRef.current.lastY;
      const speed = Math.sqrt(mouseRef.current.velocity.x ** 2 + mouseRef.current.velocity.y ** 2);
      mouseRef.current.interactionStrength = Math.min(1, speed / 20);
      
      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
      mouseRef.current.isActive = true;
      
      // Enhanced mouse trail with 3D depth
      mouseRef.current.trail.unshift({ 
        x: newX, 
        y: newY, 
        alpha: 1,
        z: Math.sin(Date.now() * 0.01) * 20
      });
      if (mouseRef.current.trail.length > 25) {
        mouseRef.current.trail.pop();
      }
      
      // Update global attention focus
      globalProcessingStateRef.current.attentionFocus = { x: newX, y: newY };
      
      // Create contextual particles based on interaction type
      if (speed > 8 && Math.random() > 0.6) {
        const particleType: Particle['type'] = speed > 15 ? 'energy' : speed > 12 ? 'computation' : 'data';
        createParticles(newX, newY, 0, Math.floor(speed / 8), particleType, colors.particle);
      }
      
      // Intelligent neuron interaction with attention mechanisms
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt((neuron.x - newX) ** 2 + (neuron.y - newY) ** 2);
        if (distance < 200) {
          const influence = (200 - distance) / 200;
          const attentionBoost = neuron.type === 'attention' ? 2 : 1;
          
          neuron.activity = Math.min(1, neuron.activity + influence * 0.015 * attentionBoost);
          neuron.attentionFocus = Math.max(neuron.attentionFocus, influence);
          neuron.glowIntensity = Math.max(neuron.glowIntensity, influence * 0.8);
          
          // Adaptive learning based on interaction
          neuron.learningRate = Math.min(0.02, neuron.learningRate + influence * 0.001);
          
          // Create data streams for active neurons
          if (neuron.activity > 0.7 && Math.random() > 0.85) {
            neuron.connections.forEach(targetIndex => {
              if (Math.random() > 0.7) {
                const target = neuronsRef.current[targetIndex];
                createDataStream(neuron, target, 'processing');
              }
            });
          }
          
          // Quantum field resonance
          quantumFieldsRef.current.forEach(field => {
            const fieldDistance = Math.sqrt(
              (field.x - newX) ** 2 + (field.y - newY) ** 2
            );
            if (fieldDistance < field.radius) {
              field.coherence = Math.min(1, field.coherence + influence * 0.01);
              field.strength = Math.min(1, field.strength + influence * 0.005);
            }
          });
        }
      });
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
      mouseRef.current.trail = [];
      mouseRef.current.velocity = { x: 0, y: 0 };
      mouseRef.current.interactionStrength = 0;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      mouseRef.current.clicked = true;
      
      // Determine click type and create appropriate response
      const isShiftClick = e.shiftKey;
      const isRightClick = e.button === 2;
      const explosionSize = isShiftClick ? 30 : isRightClick ? 20 : 15;
      const explosionRadius = isShiftClick ? 400 : isRightClick ? 300 : 200;
      
      // Create explosion with meaningful particle types
      const particleTypes: Particle['type'][] = ['data', 'energy', 'computation', 'quantum'];
      particleTypes.forEach(type => {
        createParticles(clickX, clickY, 0, explosionSize / 4, type, colors.particle);
      });
      
      // Trigger global processing modes
      if (isShiftClick) {
        globalProcessingStateRef.current.creativityMode = true;
        globalProcessingStateRef.current.problemSolvingActive = true;
      } else if (isRightClick) {
        globalProcessingStateRef.current.patternRecognitionActive = true;
        globalProcessingStateRef.current.memoryConsolidation = 1;
      }
      
      // Enhanced neural activation with propagation waves
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt(Math.pow(neuron.x - clickX, 2) + Math.pow(neuron.y - clickY, 2));
        if (distance < explosionRadius) {
          const influence = (explosionRadius - distance) / explosionRadius;
          const activationStrength = isShiftClick ? 1.5 : isRightClick ? 1.2 : 0.9;
          
          neuron.activity = Math.min(1, neuron.activity + influence * activationStrength);
          neuron.energy = Math.min(1, neuron.energy + influence * 0.6);
          neuron.glowIntensity = influence;
          neuron.lastActivation = Date.now();
          neuron.evolutionStage = Math.min(5, neuron.evolutionStage + influence * 0.5);
          
          // Specialized activation based on neuron type
          if (neuron.type === 'memory') {
            neuron.memoryStrength = Math.min(1, neuron.memoryStrength + influence * 0.3);
          } else if (neuron.type === 'attention') {
            neuron.attentionFocus = Math.min(1, neuron.attentionFocus + influence * 0.4);
          }
          
          // Create signals with advanced properties
          setTimeout(() => {
            neuron.connections.forEach(targetIndex => {
              if (Math.random() > 0.15) {
                const target = neuronsRef.current[targetIndex];
                const signal: Signal = {
                  from: index,
                  to: targetIndex,
                  progress: 0,
                  strength: neuron.activity * influence,
                  id: `${index}-${targetIndex}-${Date.now()}-${Math.random()}`,
                  color: colors[neuron.type].trail,
                  trail: [],
                  frequency: 0.02 + Math.random() * 0.03,
                  amplitude: influence,
                  dataType: ['text', 'image', 'audio', 'vector', 'prediction'][Math.floor(Math.random() * 5)] as Signal['dataType'],
                  processingTime: 0
                };
                signalsRef.current.push(signal);
                
                // Create corresponding data stream
                createDataStream(neuron, target, 'processing');
              }
            });
          }, distance * 1.5); // Wave propagation delay
        }
      });
      
      // Activate neural clusters
      neuralClustersRef.current.forEach(cluster => {
        const clusterDistance = Math.sqrt(
          (cluster.center.x - clickX) ** 2 + (cluster.center.y - clickY) ** 2
        );
        if (clusterDistance < explosionRadius) {
          cluster.activation = Math.min(1, cluster.activation + 0.3);
          cluster.learningProgress = Math.min(1, cluster.learningProgress + 0.1);
        }
      });
      
      setTimeout(() => { mouseRef.current.clicked = false; }, 200);
    };

    const handleDoubleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Massive system-wide activation
      createParticles(clickX, clickY, 0, 40, 'quantum', colors.quantum.glow);
      
      // Global neural network activation with evolution
      neuronsRef.current.forEach((neuron, index) => {
        const distance = Math.sqrt(Math.pow(neuron.x - clickX, 2) + Math.pow(neuron.y - clickY, 2));
        setTimeout(() => {
          neuron.activity = 1;
          neuron.energy = 1;
          neuron.glowIntensity = 1;
          neuron.evolutionStage = Math.min(5, neuron.evolutionStage + 1);
          neuron.lastActivation = Date.now();
          
          // Evolution-based learning
          neuron.learningRate *= 1.1;
          neuron.weight += (Math.random() - 0.5) * 0.1;
        }, distance * 2);
      });
      
      // Trigger all global processing modes
      globalProcessingStateRef.current.creativityMode = true;
      globalProcessingStateRef.current.problemSolvingActive = true;
      globalProcessingStateRef.current.patternRecognitionActive = true;
      globalProcessingStateRef.current.memoryConsolidation = 1;
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('dblclick', handleDoubleClick);
    canvas.addEventListener('contextmenu', handleContextMenu);

    // Advanced animation loop with AI simulation
    const animate = (animationTime: number) => {
      const deltaTime = animationTime - lastTimeRef.current;
      lastTimeRef.current = animationTime;
      const dt = Math.min(deltaTime / 16.67, 2);

      const time = Date.now() * 0.001;
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      const currentTime = Date.now();
      
      // Evolution and learning cycles
      evolutionCycleRef.current += dt * 0.001;
      learningEpochRef.current += dt * 0.0005;
      
      // Create sophisticated multi-layered background
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height));
      gradient.addColorStop(0, colors.background.start);
      gradient.addColorStop(0.2, colors.background.mid);
      gradient.addColorStop(0.6, colors.background.end);
      gradient.addColorStop(1, '#000508');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Enhanced text readability overlay
      ctx.fillStyle = colors.background.darkOverlay;
      ctx.fillRect(0, 0, width, height);
      
      // Quantum field visualization
      quantumFieldsRef.current.forEach((field, index) => {
        field.phase += field.frequency * dt;
        field.coherence *= 0.999; // Slow decay
        
        if (field.coherence > 0.1) {
          ctx.save();
          ctx.globalCompositeOperation = 'screen';
          
          const fieldGradient = ctx.createRadialGradient(
            field.x, field.y, 0, 
            field.x, field.y, field.radius * field.coherence
          );
          const intensity = field.strength * field.coherence;
          fieldGradient.addColorStop(0, `rgba(157, 78, 221, ${intensity * 0.08})`);
          fieldGradient.addColorStop(0.5, `rgba(64, 224, 255, ${intensity * 0.03})`);
          fieldGradient.addColorStop(1, 'rgba(0, 255, 128, 0)');
          
          ctx.fillStyle = fieldGradient;
          ctx.fillRect(0, 0, width, height);
          
          // Entanglement visualization
          field.entanglement.forEach(targetIndex => {
            const target = quantumFieldsRef.current[targetIndex];
            if (target && target.coherence > 0.2) {
              ctx.strokeStyle = `rgba(255, 0, 110, ${intensity * target.coherence * 0.1})`;
              ctx.lineWidth = 2;
              ctx.setLineDash([5, 10]);
              ctx.lineDashOffset = -time * 20;
              ctx.beginPath();
              ctx.moveTo(field.x, field.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
              ctx.setLineDash([]);
            }
          });
          
          ctx.restore();
        }
      });
      
      // Advanced neural grid with semantic meaning
      const gridSize = 120;
      const semanticOffset = (time * 10) % gridSize;
      
      for (let x = -gridSize + semanticOffset; x < width + gridSize; x += gridSize) {
        const semanticAlpha = 0.015 + Math.sin(time * 0.6 + x * 0.005) * 0.01;
        const processingActivity = globalProcessingStateRef.current.problemSolvingActive ? 0.01 : 0;
        ctx.strokeStyle = `rgba(64, 224, 255, ${semanticAlpha + processingActivity})`;
        ctx.lineWidth = globalProcessingStateRef.current.creativityMode ? 1 : 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = -gridSize + semanticOffset; y < height + gridSize; y += gridSize) {
        const semanticAlpha = 0.015 + Math.cos(time * 0.4 + y * 0.005) * 0.01;
        const memoryActivity = globalProcessingStateRef.current.memoryConsolidation * 0.02;
        ctx.strokeStyle = `rgba(64, 224, 255, ${semanticAlpha + memoryActivity})`;
        ctx.lineWidth = globalProcessingStateRef.current.patternRecognitionActive ? 1 : 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Data stream processing
      for (let i = dataStreamsRef.current.length - 1; i >= 0; i--) {
        const stream = dataStreamsRef.current[i];
        stream.progress += stream.speed * dt;
        
        if (stream.progress >= 1) {
          dataStreamsRef.current.splice(i, 1);
          continue;
        }
        
        // Render data stream
        if (stream.path.length > 1) {
          ctx.strokeStyle = `rgba(0, 206, 209, ${stream.intensity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = '#00CED1';
          ctx.shadowBlur = 8;
          
          ctx.beginPath();
          ctx.moveTo(stream.path[0].x, stream.path[0].y);
          for (let j = 1; j < stream.path.length; j++) {
            ctx.lineTo(stream.path[j].x, stream.path[j].y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
          
          // Render data packets
          stream.packets.forEach(packet => {
            const pathIndex = Math.floor(packet.position * (stream.path.length - 1));
            if (pathIndex < stream.path.length) {
              const pos = stream.path[pathIndex];
              ctx.fillStyle = packet.color;
              ctx.shadowColor = packet.color;
              ctx.shadowBlur = 5;
              ctx.beginPath();
              ctx.arc(pos.x, pos.y, packet.size, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
              
              packet.position += stream.speed * dt * 2;
            }
          });
        }
      }

      const neurons = neuronsRef.current;
      const signals = signalsRef.current;
      const particles = particlesRef.current;
      const clusters = neuralClustersRef.current;
      const mouse = mouseRef.current;

      // Advanced particle simulation
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Type-specific behavior
        switch (particle.type) {
          case 'quantum':
            particle.spin += particle.frequency * dt;
            particle.vx += Math.sin(particle.spin) * 0.1;
            particle.vy += Math.cos(particle.spin) * 0.1;
            break;
          case 'energy':
            // Attracted to high-activity neurons
            neurons.forEach(neuron => {
              if (neuron.activity > 0.5) {
                const dx = neuron.x - particle.x;
                const dy = neuron.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                  const force = neuron.activity * 0.001 / (distance + 1);
                  particle.vx += dx * force;
                  particle.vy += dy * force;
                }
              }
            });
            break;
          case 'memory':
            particle.vx *= 0.95; // Slower movement for memory particles
            particle.vy *= 0.95;
            break;
        }
        
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
        particle.z += particle.vz * dt;
        particle.life -= dt;
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        particle.vz *= 0.98;
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Enhanced neuron updates with learning and evolution
      neurons.forEach((neuron, index) => {
        // Evolution-based movement
        neuron.pulsePhase += (0.008 + neuron.activity * 0.015 + neuron.evolutionStage * 0.002) * dt;
        
        // Advanced return to target with learning adaptation
        const dx = neuron.targetX - neuron.x;
        const dy = neuron.targetY - neuron.y;
        const dz = neuron.targetZ - neuron.z;
        
        const adaptationFactor = 1 + neuron.learningRate * neuron.evolutionStage;
        neuron.vx += dx * 0.008 * adaptationFactor * dt;
        neuron.vy += dy * 0.008 * adaptationFactor * dt;
        neuron.vz += dz * 0.006 * adaptationFactor * dt;
        
        // Decay with memory persistence
        const timeSinceActivation = currentTime - neuron.lastActivation;
        const memoryFactor = neuron.type === 'memory' ? 0.002 : 0.004;
        const decayRate = memoryFactor / (1 + neuron.memoryStrength);
        
        if (timeSinceActivation > 150) {
          neuron.activity = Math.max(0.02, neuron.activity * (1 - decayRate * dt));
          neuron.energy = Math.max(0.05, neuron.energy * (1 - decayRate * 0.8 * dt));
          neuron.glowIntensity = Math.max(0, neuron.glowIntensity * (1 - 0.015 * dt));
        }
        
        // Attention-based interactions
        if (mouse.isActive) {
          const dx = mouse.x - neuron.x;
          const dy = mouse.y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 180) {
            const influence = (180 - distance) / 180;
            const attentionMultiplier = neuron.type === 'attention' ? 2.5 : 1;
            
            neuron.activity = Math.min(1, neuron.activity + influence * 0.01 * attentionMultiplier * dt);
            neuron.attentionFocus = Math.max(neuron.attentionFocus, influence * 0.8);
            neuron.glowIntensity = Math.max(neuron.glowIntensity, influence * 0.6);
            
            // Learning from interaction
            neuron.learningRate = Math.min(0.03, neuron.learningRate + influence * 0.0005 * dt);
            
            // Quantum interaction effects
            const quantumForce = influence * mouse.interactionStrength * 0.001 * dt;
            if (distance > 60) {
              neuron.vx += dx * quantumForce * 0.8; // Attraction
              neuron.vy += dy * quantumForce * 0.8;
            } else {
              neuron.vx -= dx * quantumForce; // Repulsion
              neuron.vy -= dy * quantumForce;
            }
          }
        }
        
        // Apply movement with adaptive damping
        neuron.x += neuron.vx * dt;
        neuron.y += neuron.vy * dt;
        neuron.z += neuron.vz * dt;
        
        const dampingFactor = Math.pow(0.94, dt);
        neuron.vx *= dampingFactor;
        neuron.vy *= dampingFactor;
        neuron.vz *= dampingFactor;
        
        // Autonomous neural firing with specialization
        const baseFireRate = 0.0003;
        const specializationBoost = {
          'input': 1.2,
          'attention': 1.5,
          'hidden': 1.0,
          'memory': 0.8,
          'output': 1.1
        };
        
        const fireRate = baseFireRate * specializationBoost[neuron.type] * (1 + neuron.energy) * (1 + neuron.evolutionStage * 0.2);
        
        if (Math.random() < fireRate * dt) {
          neuron.activity = Math.min(1, neuron.activity + 0.3 + neuron.learningRate * 10);
          neuron.lastActivation = currentTime;
          
          // Create contextual signals
          neuron.connections.forEach(targetIndex => {
            if (Math.random() > 0.5) {
              const target = neurons[targetIndex];
              const dataTypes: Signal['dataType'][] = ['text', 'image', 'audio', 'vector', 'prediction'];
              const signal: Signal = {
                from: index,
                to: targetIndex,
                progress: 0,
                strength: neuron.activity * (0.8 + Math.random() * 0.4),
                id: `${index}-${targetIndex}-${currentTime}-${Math.random()}`,
                color: colors[neuron.type].trail,
                trail: [],
                frequency: 0.01 + Math.random() * 0.02,
                amplitude: neuron.activity,
                dataType: dataTypes[Math.floor(Math.random() * dataTypes.length)],
                processingTime: 0
              };
              signals.push(signal);
              
              // Create corresponding data stream for important signals
              if (signal.strength > 0.6) {
                createDataStream(neuron, target, 'processing');
              }
            }
          });
        }
      });

      // Neural cluster processing
      clusters.forEach(cluster => {
        let totalActivity = 0;
        cluster.neurons.forEach(neuronIndex => {
          totalActivity += neurons[neuronIndex].activity;
        });
        cluster.activation = totalActivity / cluster.neurons.length;
        
        // Learning progress based on cluster specialization
        if (cluster.activation > 0.6) {
          cluster.learningProgress = Math.min(1, cluster.learningProgress + 0.001 * dt);
        }
        
        // Decay cluster activation
        cluster.activation *= Math.pow(0.995, dt);
      });

      // Enhanced signal processing
      for (let i = signals.length - 1; i >= 0; i--) {
        const signal = signals[i];
        signal.progress += 0.012 * dt * (1 + signal.frequency * 50);
        signal.processingTime += dt;
        
        if (signal.progress >= 1) {
          // Signal completion with learning effects
          const targetNeuron = neurons[signal.to];
          if (targetNeuron) {
            const learningBoost = signal.strength * signal.processingTime * 0.001;
            targetNeuron.activity = Math.min(1, targetNeuron.activity + signal.strength * 0.5);
            targetNeuron.energy = Math.min(1, targetNeuron.energy + signal.strength * 0.25);
            targetNeuron.learningRate = Math.min(0.03, targetNeuron.learningRate + learningBoost);
            targetNeuron.lastActivation = currentTime;
            targetNeuron.glowIntensity = Math.max(targetNeuron.glowIntensity, signal.strength * 0.8);
            
            // Specialized processing based on data type
            switch (signal.dataType) {
              case 'text':
                createParticles(targetNeuron.x, targetNeuron.y, targetNeuron.z, 2, 'data', colors.data.text);
                break;
              case 'image':
                createParticles(targetNeuron.x, targetNeuron.y, targetNeuron.z, 3, 'computation', colors.data.image);
                break;
              case 'prediction':
                targetNeuron.evolutionStage = Math.min(5, targetNeuron.evolutionStage + 0.1);
                createParticles(targetNeuron.x, targetNeuron.y, targetNeuron.z, 4, 'quantum', colors.data.prediction);
                break;
            }
          }
          signals.splice(i, 1);
          continue;
        }
        
        // Enhanced trail rendering
        const fromNeuron = neurons[signal.from];
        const toNeuron = neurons[signal.to];
        
        if (fromNeuron && toNeuron) {
          const x = fromNeuron.x + (toNeuron.x - fromNeuron.x) * signal.progress;
          const y = fromNeuron.y + (toNeuron.y - fromNeuron.y) * signal.progress;
          const z = fromNeuron.z + (toNeuron.z - fromNeuron.z) * signal.progress;
          
          // Add to trail with frequency modulation
          signal.trail.push({ 
            x: x + Math.sin(signal.processingTime * signal.frequency * 100) * signal.amplitude * 5,
            y: y + Math.cos(signal.processingTime * signal.frequency * 80) * signal.amplitude * 3,
            z: z,
            opacity: 1 
          });
          
          if (signal.trail.length > 12) {
            signal.trail.shift();
          }
          
          // Update trail opacity with frequency-based decay
          signal.trail.forEach((point, idx) => {
            point.opacity = (idx + 1) / signal.trail.length * 0.9 * signal.strength;
          });
        }
      }

      // Draw enhanced connections with semantic visualization
      neurons.forEach((neuron, index) => {
        neuron.connections.forEach(targetIndex => {
          const target = neurons[targetIndex];
          if (!target) return;
          
          const activity = (neuron.activity + target.activity) / 2;
          const learningStrength = (neuron.learningRate + target.learningRate) / 2;
          const evolutionLevel = (neuron.evolutionStage + target.evolutionStage) / 2;
          
          const baseOpacity = Math.max(0.08, activity * 0.5 + learningStrength * 5);
          const opacity = baseOpacity * (1 + evolutionLevel * 0.1);
          
          // Semantic connection coloring
          const connectionType = neuron.type + '-' + target.type;
          let connectionColor = '#40E0FF';
          
          switch (connectionType) {
            case 'input-attention':
              connectionColor = '#FFD700';
              break;
            case 'attention-hidden':
              connectionColor = '#FF69B4';
              break;
            case 'hidden-memory':
              connectionColor = '#9370DB';
              break;
            case 'memory-hidden':
              connectionColor = '#32CD32';
              break;
            case 'hidden-output':
              connectionColor = '#FF6347';
              break;
          }
          
          const gradient = ctx.createLinearGradient(neuron.x, neuron.y, target.x, target.y);
          gradient.addColorStop(0, `${connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.3})`);
          gradient.addColorStop(1, `${connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(0.5, 1 + activity * 3 + evolutionLevel * 0.5);
          
          // Animated dash pattern based on signal flow
          const dashLength = 4 + activity * 6;
          ctx.setLineDash([dashLength, dashLength * 2]);
          ctx.lineDashOffset = -currentTime * 0.08 * (1 + activity);
          
          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
          ctx.setLineDash([]);
        });
      });

      // Draw signal trails with advanced effects
      signals.forEach(signal => {
        signal.trail.forEach((point, idx) => {
          if (idx === 0) return;
          
          const prevPoint = signal.trail[idx - 1];
          const gradient = ctx.createLinearGradient(prevPoint.x, prevPoint.y, point.x, point.y);
          gradient.addColorStop(0, `rgba(0, 255, 255, ${prevPoint.opacity * signal.strength})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${point.opacity * signal.strength * 0.8})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(1, 4 * signal.strength);
          ctx.shadowColor = signal.color;
          ctx.shadowBlur = 10 * signal.strength;
          
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
          ctx.shadowBlur = 0;
        });
      });

      // Render particles with type-specific effects
      particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        const size = particle.size * alpha;
        
        // Type-specific rendering
        switch (particle.type) {
          case 'quantum':
            // Quantum superposition effect
            ctx.fillStyle = `rgba(255, 0, 110, ${alpha * 0.7})`;
            ctx.shadowColor = colors.quantum.glow;
            ctx.shadowBlur = 8 * alpha;
            
            for (let i = 0; i < 3; i++) {
              const offset = Math.sin(particle.spin + i * Math.PI / 3) * 3;
              ctx.beginPath();
              ctx.arc(particle.x + offset, particle.y + offset, size * 0.8, 0, Math.PI * 2);
              ctx.fill();
            }
            break;
            
          case 'energy':
            // Pulsing energy effect
            const energyPulse = Math.sin(particle.spin * 10) * 0.3 + 0.7;
            ctx.fillStyle = `rgba(255, 215, 0, ${alpha * energyPulse})`;
            ctx.shadowColor = colors.energy;
            ctx.shadowBlur = 6 * alpha * energyPulse;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, size * energyPulse, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 'memory':
            // Persistent memory trail
            ctx.fillStyle = `rgba(157, 78, 221, ${alpha * 0.8})`;
            ctx.shadowColor = colors.memory.glow;
            ctx.shadowBlur = 4 * alpha;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 'computation':
            // Binary-like computation visualization
            ctx.fillStyle = `rgba(0, 206, 209, ${alpha * 0.9})`;
            ctx.shadowColor = colors.data.vector;
            ctx.shadowBlur = 5 * alpha;
            ctx.fillRect(particle.x - size/2, particle.y - size/2, size, size);
            break;
            
          default:
            ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.8})`;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 5 * alpha;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.shadowBlur = 0;
      });

      // Draw neural clusters with specialization visualization
      clusters.forEach(cluster => {
        if (cluster.activation > 0.2) {
          const clusterColor = colors.cluster[cluster.specialization] || '#40E0FF';
          const pulse = Math.sin(time * 2 + cluster.center.x * 0.01) * 0.2 + 0.8;
          const radius = 40 + cluster.activation * 30;
          
          // Cluster boundary
          ctx.strokeStyle = `rgba(255, 255, 255, ${cluster.activation * 0.3 * pulse})`;
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 6]);
          ctx.lineDashOffset = time * 30;
          ctx.beginPath();
          ctx.arc(cluster.center.x, cluster.center.y, radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
          
          // Specialization indicator
          ctx.fillStyle = `rgba(${parseInt(clusterColor.slice(1, 3), 16)}, ${parseInt(clusterColor.slice(3, 5), 16)}, ${parseInt(clusterColor.slice(5, 7), 16)}, ${cluster.activation * 0.15})`;
          ctx.beginPath();
          ctx.arc(cluster.center.x, cluster.center.y, radius * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Enhanced neurons with evolution visualization
      neurons.forEach((neuron) => {
        const baseSize = Math.max(2, neuron.radius);
        const activityPulse = Math.sin(neuron.pulsePhase) * 0.4 + 1;
        const evolutionMultiplier = 1 + neuron.evolutionStage * 0.2;
        const size = baseSize * (1 + neuron.activity * 0.7) * activityPulse * evolutionMultiplier;
        
        const colorConfig = colors[neuron.type];
        const alpha = 0.6 + neuron.activity * 0.4;
        
        // Evolution stage visualization
        if (neuron.evolutionStage > 1) {
          for (let i = 0; i < Math.floor(neuron.evolutionStage); i++) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + i * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(neuron.x, neuron.y, size * (1 + i * 0.3), 0, Math.PI * 2);
            ctx.stroke();
          }
        }
        
        // Enhanced glow effect
        if (neuron.glowIntensity > 0.1 || neuron.activity > 0.5) {
          const glowIntensity = Math.max(neuron.glowIntensity, neuron.activity * 0.8);
          ctx.shadowColor = colorConfig.glow;
          ctx.shadowBlur = Math.max(8, glowIntensity * 30);
          ctx.fillStyle = `rgba(255, 255, 255, ${glowIntensity * 0.4})`;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, size * 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        // Main neuron body with sophisticated gradient
        const gradient = ctx.createRadialGradient(
          neuron.x - size * 0.4, neuron.y - size * 0.4, 0,
          neuron.x, neuron.y, size
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.3, colorConfig.base + 'CC');
        gradient.addColorStop(0.7, colorConfig.base + '80');
        gradient.addColorStop(1, colorConfig.base + '20');
        
        ctx.fillStyle = gradient;
        ctx.shadowColor = colorConfig.glow;
        ctx.shadowBlur = Math.max(4, neuron.activity * 20);
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Specialized neuron core
        if (neuron.energy > 0.4) {
          const coreColor = neuron.type === 'attention' ? '#FFD700' : 
                           neuron.type === 'memory' ? '#9370DB' : '#FFFFFF';
          ctx.shadowBlur = 0;
          ctx.fillStyle = `${coreColor}${Math.floor((neuron.energy * alpha) * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Learning progress indicator
        if (neuron.learningRate > 0.01) {
          ctx.strokeStyle = `rgba(0, 255, 128, ${neuron.learningRate * 20})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, size * 1.2, 0, Math.PI * 2 * neuron.learningRate * 50);
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
      });

      // Global processing state indicators
      if (globalProcessingStateRef.current.creativityMode) {
        ctx.fillStyle = 'rgba(255, 20, 147, 0.1)';
        ctx.fillRect(0, 0, width, height);
        setTimeout(() => { globalProcessingStateRef.current.creativityMode = false; }, 3000);
      }
      
      if (globalProcessingStateRef.current.problemSolvingActive) {
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 10]);
        ctx.strokeRect(20, 20, width - 40, height - 40);
        ctx.setLineDash([]);
        setTimeout(() => { globalProcessingStateRef.current.problemSolvingActive = false; }, 2000);
      }
      
      // Decay global processing states
      globalProcessingStateRef.current.memoryConsolidation *= 0.998;
      
      // Enhanced UI with semantic information
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      
      // Layer labels with processing state
      ctx.shadowColor = '#00FFFF';
      ctx.shadowBlur = 3;
      
      const processingIndicator = globalProcessingStateRef.current.problemSolvingActive ? ' [SOLVING]' : 
                                 globalProcessingStateRef.current.creativityMode ? ' [CREATING]' : '';
      
      ctx.fillText('INPUT LAYER', width * 0.08, height - 20);
      ctx.fillText('ATTENTION', width * 0.22, height - 20);
      ctx.fillText('PROCESSING' + processingIndicator, width * 0.5, height - 20);
      ctx.fillText('MEMORY', width * 0.48, height - 35);
      ctx.fillText('OUTPUT LAYER', width * 0.92, height - 20);
      
      // Evolution cycle indicator
      ctx.font = '10px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`Evolution Cycle: ${evolutionCycleRef.current.toFixed(2)}`, 20, height - 40);
      ctx.fillText(`Learning Epoch: ${learningEpochRef.current.toFixed(2)}`, 20, height - 25);
      
      ctx.shadowBlur = 0;

      // Enhanced mouse interaction visualization
      if (mouse.trail.length > 1) {
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.8 + mouse.interactionStrength * 0.2})`;
        ctx.lineWidth = 2 + mouse.interactionStrength * 3;
        ctx.shadowColor = '#00FFFF';
        ctx.shadowBlur = 12;
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
          
          mouse.trail[i].alpha *= 0.92;
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Interactive cursor with semantic feedback
      if (mouse.isActive) {
        const pulse = Math.sin(currentTime * 0.006) * 0.3 + 0.7;
        const speed = Math.sqrt(mouse.velocity.x ** 2 + mouse.velocity.y ** 2);
        const dynamicRadius = Math.min(200, 100 + speed * 3 + mouse.interactionStrength * 50);
        
        // Main interaction field
        ctx.strokeStyle = `rgba(0, 255, 255, ${pulse * 0.7})`;
        ctx.lineWidth = 3 + mouse.interactionStrength * 2;
        ctx.setLineDash([12, 12]);
        ctx.lineDashOffset = -currentTime * 0.15;
        ctx.shadowColor = '#00FFFF';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, dynamicRadius * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Interaction strength indicator
        if (mouse.interactionStrength > 0.3) {
          const strengthPulse = Math.sin(currentTime * 0.02) * 0.3 + 0.7;
          ctx.strokeStyle = `rgba(255, 255, 255, ${mouse.interactionStrength * strengthPulse})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, (dynamicRadius * 0.5) * strengthPulse, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
        
        // Click feedback
        if (mouse.clicked) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start enhanced animation
    setTimeout(() => {
      setIsLoaded(true);
      requestAnimationFrame(animate);
    }, 150);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('dblclick', handleDoubleClick);
      canvas.removeEventListener('contextmenu', handleContextMenu);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticles, createDataStream]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 z-0 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)',
        cursor: 'crosshair',
        pointerEvents: 'auto'
      }}
    />
  );
}
