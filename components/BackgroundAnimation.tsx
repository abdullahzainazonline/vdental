"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      type: "tooth" | "scissor";
      color: string;
      opacity: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.4; // Gentler movement
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 3 + 3; // Good visible size

        // 50/50 mix or slightly more teeth
        this.type = Math.random() > 0.4 ? "tooth" : "scissor";

        // Professional Medical Colors: White, Teal, Slate Blue
        const colors = ["#ffffff", "#0E7490", "#0D9488", "#64748B"];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.opacity = Math.random() * 0.2 + 0.1; // Subtle but visible
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.003;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < -50) this.x = canvas!.width + 50;
        if (this.x > canvas!.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas!.height + 50;
        if (this.y > canvas!.height + 50) this.y = -50;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;

        const s = this.size * 4;

        if (this.type === "tooth") {
          // Professional Molar Shape
          ctx.beginPath();
          // Crown
          ctx.moveTo(-s / 2, -s / 3);
          ctx.quadraticCurveTo(-s / 4, -s / 1.2, 0, -s / 3); // Left cusp
          ctx.quadraticCurveTo(s / 4, -s / 1.2, s / 2, -s / 3); // Right cusp
          // Body
          ctx.quadraticCurveTo(s / 1.5, 0, s / 2, s / 4);
          // Roots
          ctx.lineTo(s / 3, s); // Right root
          ctx.lineTo(0, s / 3); // Bifurcation
          ctx.lineTo(-s / 3, s); // Left root
          // Body finish
          ctx.lineTo(-s / 2, s / 4);
          ctx.quadraticCurveTo(-s / 1.5, 0, -s / 2, -s / 3);
          ctx.fill();
        } else if (this.type === "scissor") {
          // Professional Medical Scissor / Forceps Icon
          ctx.lineWidth = this.size * 0.8;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          // Draw as a stroked X with loops

          ctx.beginPath();
          // Left Blade/Handle
          ctx.moveTo(-s / 2, -s);
          ctx.lineTo(s / 3, s / 1.5);
          ctx.stroke();

          // Right Blade/Handle
          ctx.beginPath();
          ctx.moveTo(s / 2, -s);
          ctx.lineTo(-s / 3, s / 1.5);
          ctx.stroke();

          // Handles (Loops)
          ctx.lineWidth = this.size * 0.6;
          ctx.beginPath();
          ctx.arc(-s / 2.2, s, s / 3.5, 0, Math.PI * 2); // Left Loop
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(s / 2.2, s, s / 3.5, 0, Math.PI * 2); // Right Loop
          ctx.stroke();

          // Pivot screw
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(0, -s / 6, s / 6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(25, Math.floor((canvas.width * canvas.height) / 40000)); // Cap at 25 for flawless mobile performance
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none" // fixed position, z-0 (behind content which is usually z-10+)
      style={{ mixBlendMode: "normal" }}
    />
  );
}
