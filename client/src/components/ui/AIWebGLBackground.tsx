
import React, { useRef, useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  energy: number;
  hue: number;
  connections: number[];
  pulsePhase: number;
  activated: boolean;
  activationTime: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  hue: number;
  size: number;
}

interface AIWebGLBackgroundProps {
  className?: string;
}

export default function AIWebGLBackground({ className = '' }: AIWebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isPressed: false, lastClick: 0 });
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

    // Initialize neural network nodes
    const initNodes = () => {
      const nodes: Node[] = [];
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      const numNodes = Math.min(60, Math.floor((canvasWidth * canvasHeight) / 15000));
      
      for (let i = 0; i < numNodes; i++) {
        const node: Node = {
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 3 + Math.random() * 4,
          energy: Math.random(),
          hue: 180 + Math.random() * 100, // Cyan to purple range for AI theme
          connections: [],
          pulsePhase: Math.random() * Math.PI * 2,
          activated: false,
          activationTime: 0,
        };
        nodes.push(node);
      }

      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j && node.connections.length < 4) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120 && Math.random() > 0.7) {
              node.connections.push(j);
            }
          }
        });
      });

      nodesRef.current = nodes;
    };

    initNodes();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isPressed = true;
      mouseRef.current.lastClick = Date.now();
      
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Find nearest node and activate it
      const nodes = nodesRef.current;
      let nearestNode = -1;
      let nearestDistance = Infinity;
      
      nodes.forEach((node, i) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < nearestDistance && distance < 100) {
          nearestDistance = distance;
          nearestNode = i;
        }
      });
      
      if (nearestNode !== -1) {
        // Activate node and send data packets
        nodes[nearestNode].activated = true;
        nodes[nearestNode].activationTime = Date.now();
        
        // Create data packets to connected nodes
        nodes[nearestNode].connections.forEach(connectionIndex => {
          packetsRef.current.push({
            fromNode: nearestNode,
            toNode: connectionIndex,
            progress: 0,
            speed: 0.8 + Math.random() * 1.2,
            hue: 60 + Math.random() * 60, // Yellow to orange for data flow
            size: 2 + Math.random() * 3,
          });
        });
      }
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
      const canvasWidth = canvas.width / window.devicePixelRatio;
      const canvasHeight = canvas.height / window.devicePixelRatio;
      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;
      const nodes = nodesRef.current;
      const packets = packetsRef.current;

      // Clear with fade effect
      ctx.fillStyle = 'rgba(8, 8, 12, 0.03)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update nodes
      nodes.forEach((node, i) => {
        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          // Attraction/repulsion based on mouse state
          const attraction = mouse.isPressed ? force * 0.8 : -force * 0.3;
          node.vx += Math.cos(angle) * attraction * 0.02;
          node.vy += Math.sin(angle) * attraction * 0.02;
          
          // Increase energy when mouse is near
          node.energy = Math.min(1, node.energy + force * 0.05);
        } else {
          node.energy *= 0.99;
        }

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Apply friction
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Add neural-like oscillation
        node.vx += Math.sin(time * 0.8 + i * 0.1) * 0.01;
        node.vy += Math.cos(time * 0.6 + i * 0.15) * 0.01;

        // Boundary wrapping
        if (node.x < 0) node.x = canvasWidth;
        if (node.x > canvasWidth) node.x = 0;
        if (node.y < 0) node.y = canvasHeight;
        if (node.y > canvasHeight) node.y = 0;

        // Update pulse phase
        node.pulsePhase += 0.05 + node.energy * 0.1;

        // Deactivate nodes after time
        if (node.activated && Date.now() - node.activationTime > 2000) {
          node.activated = false;
        }
      });

      // Update data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i];
        packet.progress += packet.speed * 0.01;

        if (packet.progress >= 1) {
          // Activate destination node
          const destNode = nodes[packet.toNode];
          if (destNode) {
            destNode.activated = true;
            destNode.activationTime = Date.now();
            destNode.energy = Math.min(1, destNode.energy + 0.3);
          }
          packets.splice(i, 1);
        }
      }

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          if (!connectedNode) return;

          const distance = Math.sqrt(
            (node.x - connectedNode.x) ** 2 + (node.y - connectedNode.y) ** 2
          );

          // Connection strength based on node energy and distance
          const strength = Math.max(0.1, (node.energy + connectedNode.energy) / 2) * 
                          Math.max(0.3, 1 - distance / 200);

          // Draw connection line
          const gradient = ctx.createLinearGradient(
            node.x, node.y, connectedNode.x, connectedNode.y
          );
          
          const alpha = strength * 0.6;
          gradient.addColorStop(0, `hsla(${node.hue}, 70%, 60%, ${alpha})`);
          gradient.addColorStop(1, `hsla(${connectedNode.hue}, 70%, 60%, ${alpha})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(0.5, strength * 2);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();

          // Add glow effect for active connections
          if (node.activated || connectedNode.activated) {
            ctx.shadowColor = `hsl(${(node.hue + connectedNode.hue) / 2}, 80%, 70%)`;
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      });

      // Draw data packets
      packets.forEach(packet => {
        const fromNode = nodes[packet.fromNode];
        const toNode = nodes[packet.toNode];
        if (!fromNode || !toNode) return;

        const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

        // Packet trail
        ctx.strokeStyle = `hsla(${packet.hue}, 90%, 70%, 0.8)`;
        ctx.lineWidth = packet.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        
        const prevProgress = Math.max(0, packet.progress - 0.1);
        const prevX = fromNode.x + (toNode.x - fromNode.x) * prevProgress;
        const prevY = fromNode.y + (toNode.y - fromNode.y) * prevProgress;
        
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Packet glow
        ctx.shadowColor = `hsl(${packet.hue}, 90%, 70%)`;
        ctx.shadowBlur = packet.size * 3;
        ctx.fillStyle = `hsla(${packet.hue}, 90%, 80%, 0.9)`;
        ctx.beginPath();
        ctx.arc(x, y, packet.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulseIntensity = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const energyBoost = node.energy * 0.5;
        const activationBoost = node.activated ? 0.8 : 0;
        
        const totalRadius = Math.max(1, node.radius + energyBoost * 3 + activationBoost * 5);
        const opacity = 0.6 + energyBoost * 0.3 + activationBoost * 0.4;

        // Node glow
        if (node.activated || node.energy > 0.3) {
          const glowRadius = totalRadius * (2 + activationBoost * 2);
          const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, glowRadius
          );
          
          glowGradient.addColorStop(0, `hsla(${node.hue}, 80%, 70%, ${opacity * 0.4})`);
          glowGradient.addColorStop(1, `hsla(${node.hue}, 80%, 70%, 0)`);
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main node
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, totalRadius
        );
        
        const brightness = 50 + energyBoost * 30 + activationBoost * 40;
        nodeGradient.addColorStop(0, `hsla(${node.hue}, 90%, ${brightness + 20}%, ${opacity})`);
        nodeGradient.addColorStop(0.7, `hsla(${node.hue}, 80%, ${brightness}%, ${opacity * 0.8})`);
        nodeGradient.addColorStop(1, `hsla(${node.hue}, 70%, ${brightness - 10}%, 0)`);

        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, totalRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core highlight
        const coreSize = Math.max(0.5, totalRadius * 0.3);
        ctx.fillStyle = `hsla(${node.hue + 30}, 100%, 90%, ${opacity * pulseIntensity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, coreSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add ambient AI-themed effects
      const gridSize = 100;
      ctx.strokeStyle = `hsla(200, 50%, 30%, 0.1)`;
      ctx.lineWidth = 0.5;
      
      // Subtle grid pattern
      for (let x = 0; x < canvasWidth; x += gridSize) {
        if (Math.sin(time * 0.2 + x * 0.01) > 0.8) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvasHeight);
          ctx.stroke();
        }
      }
      
      for (let y = 0; y < canvasHeight; y += gridSize) {
        if (Math.cos(time * 0.15 + y * 0.01) > 0.8) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvasWidth, y);
          ctx.stroke();
        }
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
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
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
        background: 'radial-gradient(ellipse at center, #0f1419 0%, #080c10 70%, #050608 100%)',
        cursor: 'crosshair',
      }}
    />
  );
}
