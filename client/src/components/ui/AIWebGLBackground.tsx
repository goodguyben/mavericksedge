
import React, { useRef, useEffect, useState } from 'react';

interface Neuron {
  x: number;
  y: number;
  radius: number;
  activity: number;
  maxActivity: number;
  connections: number[];
  pulsePhase: number;
  type: 'input' | 'hidden' | 'output';
}

interface Pulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  strength: number;
  id: number;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const neuronsRef = useRef<Neuron[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const [isLoaded, setIsLoaded] = useState(false);
  const pulseIdRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize neural network
    const initNeuralNetwork = () => {
      const neurons: Neuron[] = [];
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Create layers of neurons (like a brain structure)
      const layers = [
        { count: 8, x: canvasWidth * 0.15, type: 'input' as const },
        { count: 12, x: canvasWidth * 0.35, type: 'hidden' as const },
        { count: 15, x: canvasWidth * 0.5, type: 'hidden' as const },
        { count: 12, x: canvasWidth * 0.65, type: 'hidden' as const },
        { count: 6, x: canvasWidth * 0.85, type: 'output' as const }
      ];

      let neuronIndex = 0;
      layers.forEach(layer => {
        const startY = (canvasHeight - (layer.count - 1) * 60) / 2;
        for (let i = 0; i < layer.count; i++) {
          neurons.push({
            x: layer.x + (Math.random() - 0.5) * 40,
            y: startY + i * 60 + (Math.random() - 0.5) * 20,
            radius: layer.type === 'hidden' ? 8 : 6,
            activity: Math.random() * 0.3,
            maxActivity: 1,
            connections: [],
            pulsePhase: Math.random() * Math.PI * 2,
            type: layer.type
          });
        }
      });

      // Create connections between layers
      const layerSizes = layers.map(l => l.count);
      let currentIndex = 0;
      
      for (let l = 0; l < layers.length - 1; l++) {
        const currentLayerSize = layerSizes[l];
        const nextLayerSize = layerSizes[l + 1];
        
        for (let i = 0; i < currentLayerSize; i++) {
          const neuronIdx = currentIndex + i;
          const connectionsCount = Math.min(nextLayerSize, 3 + Math.floor(Math.random() * 3));
          
          // Connect to next layer neurons
          for (let j = 0; j < connectionsCount; j++) {
            const targetIdx = currentIndex + currentLayerSize + Math.floor(Math.random() * nextLayerSize);
            if (!neurons[neuronIdx].connections.includes(targetIdx)) {
              neurons[neuronIdx].connections.push(targetIdx);
            }
          }
        }
        currentIndex += currentLayerSize;
      }

      neuronsRef.current = neurons;
    };

    initNeuralNetwork();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true
      };
    };

    const handleMouseClick = () => {
      // Trigger a wave of activity on click
      const neurons = neuronsRef.current;
      const mouse = mouseRef.current;
      
      neurons.forEach((neuron, index) => {
        const distance = Math.sqrt(
          Math.pow(neuron.x - mouse.x, 2) + Math.pow(neuron.y - mouse.y, 2)
        );
        
        if (distance < 150) {
          neuron.activity = Math.min(1, neuron.activity + (150 - distance) / 150);
          
          // Create pulses from this neuron
          neuron.connections.forEach(targetIdx => {
            pulsesRef.current.push({
              fromIndex: index,
              toIndex: targetIdx,
              progress: 0,
              strength: neuron.activity,
              id: pulseIdRef.current++
            });
          });
        }
      });
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleMouseClick);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      
      // Clear canvas with gradient background
      const gradient = ctx.createRadialGradient(
        canvasWidth / 2, canvasHeight / 2, 0,
        canvasWidth / 2, canvasHeight / 2, Math.max(canvasWidth, canvasHeight) / 2
      );
      gradient.addColorStop(0, '#0A0A0F');
      gradient.addColorStop(0.5, '#0D0D13');
      gradient.addColorStop(1, '#050507');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const neurons = neuronsRef.current;
      const pulses = pulsesRef.current;
      const mouse = mouseRef.current;
      const time = Date.now() * 0.001;

      // Update neuron activity
      neurons.forEach((neuron, index) => {
        // Natural decay
        neuron.activity *= 0.995;
        
        // Mouse influence
        if (mouse.isActive) {
          const distance = Math.sqrt(
            Math.pow(neuron.x - mouse.x, 2) + Math.pow(neuron.y - mouse.y, 2)
          );
          
          if (distance < 100) {
            const influence = (100 - distance) / 100;
            neuron.activity = Math.min(1, neuron.activity + influence * 0.02);
          }
        }
        
        // Update pulse phase
        neuron.pulsePhase += 0.05 + neuron.activity * 0.1;
      });

      // Update pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += 0.03;
        
        if (pulse.progress >= 1) {
          // Pulse reached target, activate target neuron
          const targetNeuron = neurons[pulse.toIndex];
          if (targetNeuron) {
            targetNeuron.activity = Math.min(1, targetNeuron.activity + pulse.strength * 0.3);
            
            // Propagate to next layer
            if (Math.random() < pulse.strength * 0.7) {
              targetNeuron.connections.forEach(nextTarget => {
                pulses.push({
                  fromIndex: pulse.toIndex,
                  toIndex: nextTarget,
                  progress: 0,
                  strength: pulse.strength * 0.8,
                  id: pulseIdRef.current++
                });
              });
            }
          }
          
          pulses.splice(i, 1);
        }
      }

      // Auto-generate some activity
      if (Math.random() < 0.02) {
        const inputNeurons = neurons.filter(n => n.type === 'input');
        const randomInput = inputNeurons[Math.floor(Math.random() * inputNeurons.length)];
        if (randomInput) {
          randomInput.activity = Math.min(1, randomInput.activity + 0.5);
        }
      }

      // Draw connections
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
      ctx.lineWidth = 1;
      neurons.forEach((neuron, index) => {
        neuron.connections.forEach(targetIdx => {
          const target = neurons[targetIdx];
          if (target) {
            const opacity = 0.1 + neuron.activity * 0.3;
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
            
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      });

      // Draw pulses
      pulses.forEach(pulse => {
        const fromNeuron = neurons[pulse.fromIndex];
        const toNeuron = neurons[pulse.toIndex];
        
        if (fromNeuron && toNeuron) {
          const x = fromNeuron.x + (toNeuron.x - fromNeuron.x) * pulse.progress;
          const y = fromNeuron.y + (toNeuron.y - fromNeuron.y) * pulse.progress;
          
          const size = 3 + pulse.strength * 2;
          const opacity = pulse.strength * (1 - pulse.progress * 0.5);
          
          // Outer glow
          ctx.shadowColor = '#00FFFF';
          ctx.shadowBlur = 10;
          ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner core
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw neurons
      neurons.forEach((neuron, index) => {
        const baseSize = neuron.radius;
        const activityPulse = Math.sin(neuron.pulsePhase) * 0.3 + 1;
        const size = baseSize * (1 + neuron.activity * 0.5) * activityPulse;
        
        // Neuron type colors
        let color;
        switch (neuron.type) {
          case 'input':
            color = `rgba(0, 255, 100, ${0.6 + neuron.activity * 0.4})`;
            break;
          case 'output':
            color = `rgba(255, 100, 0, ${0.6 + neuron.activity * 0.4})`;
            break;
          default:
            color = `rgba(100, 150, 255, ${0.4 + neuron.activity * 0.6})`;
        }
        
        // Outer glow
        if (neuron.activity > 0.1) {
          ctx.shadowColor = color;
          ctx.shadowBlur = 15 * neuron.activity;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, Math.max(1, size), 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core for active neurons
        if (neuron.activity > 0.3) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(255, 255, 255, ${neuron.activity * 0.8})`;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, Math.max(1, size * 0.4), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw mouse influence area
      if (mouse.isActive) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    setTimeout(() => {
      setIsLoaded(true);
      animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleMouseClick);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        cursor: 'crosshair',
      }}
    />
  );
}
