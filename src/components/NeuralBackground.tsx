"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    const isMobile = window.innerWidth < 768;
    const NODE_COUNT = isMobile ? 25 : 40;
    const CONNECTION_DISTANCE = isMobile ? 170 : 250;
    const CONNECTION_OPACITY = isMobile ? 0.25 : 0.35;
    const CONNECTION_WIDTH = isMobile ? 0.8 : 1;
    const ACCENT_COLOR = { r: 0, g: 255, b: 209 }; // #00FFD1

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      nodes = [];
      const w = canvas.width;
      const h = canvas.height;
      const margin = 60;

      for (let i = 0; i < NODE_COUNT; i++) {
        // Bias nodes toward the sides (left and right edges)
        const side = Math.random();
        let x: number;
        if (side < 0.4) {
          // Left cluster
          x = margin + Math.random() * (w * 0.2);
        } else if (side > 0.6) {
          // Right cluster
          x = w * 0.8 + Math.random() * (w * 0.2 - margin);
        } else {
          // Sparse center
          x = w * 0.2 + Math.random() * (w * 0.6);
        }

        nodes.push({
          x,
          y: margin + Math.random() * (h - margin * 2),
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1.5 + Math.random() * 2,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.005 + Math.random() * 0.01,
        });
      }
    };

    const update = () => {
      const w = canvas.width;
      const h = canvas.height;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += node.pulseSpeed;

        // Soft bounce off edges
        if (node.x < 20 || node.x > w - 20) node.vx *= -1;
        if (node.y < 20 || node.y > h - 20) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(5, Math.min(w - 5, node.x));
        node.y = Math.max(5, Math.min(h - 5, node.y));
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * CONNECTION_OPACITY;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${ACCENT_COLOR.r}, ${ACCENT_COLOR.g}, ${ACCENT_COLOR.b}, ${opacity})`;
            ctx.lineWidth = CONNECTION_WIDTH;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(node.pulsePhase);
        const opacity = 0.15 + pulse * 0.25;
        const glowRadius = node.radius + pulse * 2;

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_COLOR.r}, ${ACCENT_COLOR.g}, ${ACCENT_COLOR.b}, ${opacity * 0.08})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_COLOR.r}, ${ACCENT_COLOR.g}, ${ACCENT_COLOR.b}, ${opacity})`;
        ctx.fill();
      }
    };

    const animate = () => {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initNodes();
    animate();

    const handleResize = () => {
      resize();
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)',
      }}
      aria-hidden="true"
    />
  );
}
