"use client";
import { useEffect, useRef } from "react";

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match window
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        // @ts-ignore
        this.x = Math.random() * canvas.width;
        // @ts-ignore
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.8 ? "#F97316" : "#1E3A8A";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        // @ts-ignore
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        // @ts-ignore
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        // @ts-ignore
        ctx.fillStyle = this.color;
        // @ts-ignore
        ctx.beginPath();
        // @ts-ignore
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // @ts-ignore
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(
      100,
      Math.floor((canvas.width * canvas.height) / 10000)
    );
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines
    function connectParticles() {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            // @ts-ignore
            ctx.strokeStyle = `rgba(30, 58, 138, ${opacity * 0.15})`;
            // @ts-ignore
            ctx.lineWidth = 1;
            // @ts-ignore
            ctx.beginPath();
            // @ts-ignore
            ctx.moveTo(particles[i].x, particles[i].y);
            // @ts-ignore
            ctx.lineTo(particles[j].x, particles[j].y);
            // @ts-ignore
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      // @ts-ignore
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
}
