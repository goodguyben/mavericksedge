` tags. I also need to make sure that there are no forbidden words in the final code.

```
<replit_final_file>
import React, { useRef, useEffect, useState } from 'react';

interface DataNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  connections: number[];
  activity: number;
  type: 'neuron' | 'data' | 'processor';
  pulsePhase: number;
  energy: number;
}

interface DataStream {
  startNode: number;
  endNode: number;
  progress: number;
  speed: number;
  intensity: number;
  particles: Array<{x: number, y: number, life: number}>;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<DataNode[]>([]);
  const streamsRef = useRef<DataStream[]>([]);
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    isPressed: false,
    influence: 0
  });
  const [isLoaded, setIsLoaded] = useState(false);

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

    // Initialize AI network
    const initNetwork = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      const nodes: DataNode[] = [];

      // Create neural network structure
      const layers = 4;
      const nodesPerLayer = [8, 12, 10, 6];

      for (let layer = 0; layer < layers; layer++) {
        const layerNodes = nodesPerLayer[layer];
        const layerSpacing = canvasHeight / (layerNodes + 1);
        const xPos = (canvasWidth / (layers + 1)) * (layer + 1);

        for (let i = 0; i < layerNodes; i++) {
          const yPos = layerSpacing * (i + 1);
          const nodeType = layer === 0 ? 'data' : layer === layers - 1 ? 'processor' : 'neuron';

          nodes.push({
            x: xPos + (Math.random() - 0.5) * 40,
            y: yPos + (Math.random() - 0.5) * 30,
            vx: 0,
            vy: 0,
            size: nodeType === 'processor' ? 8 : nodeType === 'neuron' ? 6 : 4,
            connections: [],
            activity: Math.random(),
            type: nodeType,
            pulsePhase: Math.random() * Math.PI * 2,
            energy: 0.5 + Math.random() * 0.5
          });
        }
      }

      // Create connections between layers
      for (let layer = 0; layer < layers - 1; layer++) {
        const currentLayerStart = nodesPerLayer.slice(0, layer).reduce((a, b) => a + b, 0);
        const nextLayerStart = nodesPerLayer.slice(0, layer + 1).reduce((a, b) => a + b, 0);

        for (let i = 0; i < nodesPerLayer[layer]; i++) {
          const currentNodeIndex = currentLayerStart + i;
          const connectionsCount = Math.min(nodesPerLayer[layer + 1], 3 + Math.floor(Math.random() * 3));

          for (let j = 0; j < connectionsCount; j++) {
            const targetIndex = nextLayerStart + Math.floor(Math.random() * nodesPerLayer[layer + 1]);
            if (!nodes[currentNodeIndex].connections.includes(targetIndex)) {
              nodes[currentNodeIndex].connections.push(targetIndex);
            }
          }
        }
      }

      nodesRef.current = nodes;

      // Initialize data streams
      const streams: DataStream[] = [];
      nodes.forEach((node, index) => {
        node.connections.forEach(targetIndex => {
          streams.push({
            startNode: index,
            endNode: targetIndex,
            progress: Math.random(),
            speed: 0.008 + Math.random() * 0.012,
            intensity: 0.3 + Math.random() * 0.7,
            particles: []
          });
        });
      });

      streamsRef.current = streams;
    };

    initNetwork();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.influence = Math.min(mouseRef.current.influence + 0.05, 1);
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isPressed = true;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Activate nearby nodes
      nodesRef.current.forEach(node => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          node.activity = Math.min(node.activity + 0.8, 1);
          node.energy = 1;
        }
      });
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
    };

    const handleMouseLeave = () => {
      mouseRef.current.influence = Math.max(mouseRef.current.influence - 0.1, 0);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      const time = Date.now() * 0.001;
      const nodes = nodesRef.current;
      const streams = streamsRef.current;
      const mouse = mouseRef.current;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(5, 8, 16, 0.08)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw connections/streams
      streams.forEach(stream => {
        const startNode = nodes[stream.startNode];
        const endNode = nodes[stream.endNode];

        if (!startNode || !endNode) return;

        // Update stream progress
        stream.progress += stream.speed;
        if (stream.progress > 1) {
          stream.progress = 0;
          // Transfer activity
          endNode.activity = Math.min(endNode.activity + startNode.activity * 0.3, 1);
        }

        // Draw connection line
        const connectionStrength = (startNode.activity + endNode.activity) * 0.5;
        const alpha = 0.1 + connectionStrength * 0.4;

        ctx.strokeStyle = `rgba(64, 224, 255, ${alpha})`;
        ctx.lineWidth = 1 + connectionStrength * 2;
        ctx.beginPath();
        ctx.moveTo(startNode.x, startNode.y);
        ctx.lineTo(endNode.x, endNode.y);
        ctx.stroke();

        // Draw data packet
        if (stream.progress > 0.1) {
          const packetX = startNode.x + (endNode.x - startNode.x) * stream.progress;
          const packetY = startNode.y + (endNode.y - startNode.y) * stream.progress;

          const packetSize = 2 + stream.intensity * 3;
          const glowSize = packetSize * 3;

          // Packet glow
          const gradient = ctx.createRadialGradient(
            packetX, packetY, 0,
            packetX, packetY, glowSize
          );
          gradient.addColorStop(0, `rgba(255, 165, 0, ${stream.intensity * 0.8})`);
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(packetX, packetY, glowSize, 0, Math.PI * 2);
          ctx.fill();

          // Packet core
          ctx.fillStyle = `rgba(255, 200, 50, ${stream.intensity})`;
          ctx.beginPath();
          ctx.arc(packetX, packetY, packetSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Mouse influence
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance && mouse.influence > 0) {
          const force = (maxDistance - distance) / maxDistance * mouse.influence;
          node.energy = Math.min(node.energy + force * 0.02, 1);

          if (mouse.isPressed) {
            node.activity = Math.min(node.activity + force * 0.1, 1);
          }
        }

        // Natural activity decay and pulsing
        node.activity *= 0.995;
        node.energy *= 0.998;
        node.pulsePhase += 0.05 + node.activity * 0.1;

        // Add some autonomous activity
        if (Math.random() < 0.002) {
          node.activity = Math.min(node.activity + 0.3, 1);
        }

        // Draw node based on type
        const pulseIntensity = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const totalActivity = (node.activity + node.energy) * pulseIntensity;
        const nodeSize = node.size * (0.8 + totalActivity * 0.5);

        // Node glow
        const glowRadius = nodeSize * (2 + totalActivity * 2);
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );

        let nodeColor: string;
        switch (node.type) {
          case 'data':
            nodeColor = `64, 224, 255`; // Cyan for data
            break;
          case 'processor':
            nodeColor = `255, 100, 100`; // Red for processors
            break;
          default:
            nodeColor = `100, 255, 150`; // Green for neurons
        }

        glowGradient.addColorStop(0, `rgba(${nodeColor}, ${totalActivity * 0.8})`);
        glowGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = `rgba(${nodeColor}, ${0.6 + totalActivity * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();

        // Node ring for processors
        if (node.type === 'processor') {
          ctx.strokeStyle = `rgba(${nodeColor}, ${totalActivity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize + 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Data type indicator
        if (node.type === 'data' && totalActivity > 0.5) {
          ctx.fillStyle = `rgba(255, 255, 255, ${totalActivity * 0.8})`;
          ctx.font = '8px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('01', node.x, node.y + 2);
        }
      });

      // Draw grid pattern in background
      ctx.strokeStyle = 'rgba(64, 224, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 40;

      for (let x = 0; x < canvasWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
      }

      for (let y = 0; y < canvasHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
      }

      // Draw title overlay
      ctx.fillStyle = 'rgba(64, 224, 255, 0.3)';
      ctx.font = '12px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('AI NEURAL NETWORK VISUALIZATION', 20, 30);

      // Draw stats
      const activeNodes = nodes.filter(n => n.activity > 0.1).length;
      const totalEnergy = nodes.reduce((sum, n) => sum + n.energy, 0);

      ctx.fillStyle = 'rgba(100, 255, 150, 0.6)';
      ctx.font = '10px monospace';
      ctx.fillText(`ACTIVE NODES: ${activeNodes}`, 20, 50);
      ctx.fillText(`NETWORK ENERGY: ${Math.round(totalEnergy)}%`, 20, 65);

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
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
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
        background: 'radial-gradient(ellipse at center, #0a0f1c 0%, #050810 70%, #020406 100%)',
        cursor: 'crosshair',
      }}
    />
  );
}