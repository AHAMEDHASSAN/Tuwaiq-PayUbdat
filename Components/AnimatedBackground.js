"use client";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    // Configuration
    const particleCount = 50;
    const squareCount = 12;
    const connectionDistance = 160;
    const baseSpeed = 0.5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
        this.size = Math.random() * 2 + 1;
        this.color = `hsla(${190 + Math.random() * 40}, 100%, 70%, 0.9)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Square {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 60 + 40;
            this.vx = (Math.random() - 0.5) * (baseSpeed * 0.3);
            this.vy = (Math.random() - 0.5) * (baseSpeed * 0.3);
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.005;
            this.opacity = Math.random() * 0.1 + 0.05;
            this.color = `hsla(200, 100%, 60%, ${this.opacity})`;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.rotationSpeed;
            if (this.x < -this.size) this.x = canvas.width + this.size;
            if (this.x > canvas.width + this.size) this.x = -this.size;
            if (this.y < -this.size) this.y = canvas.height + this.size;
            if (this.y > canvas.height + this.size) this.y = -this.size;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(0, 212, 255, 0.5)";
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-this.size/2, -this.size/2, this.size, this.size);
            ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity * 0.2})`;
            ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
            ctx.restore();
        }
    }

    let particles = Array.from({ length: particleCount }, () => new Particle());
    let squares = Array.from({ length: squareCount }, () => new Square());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      squares.forEach(s => { s.update(); s.draw(); });
      particles.forEach(p => { p.update(); p.draw(); });

      // Draw Connections (Glow lines & Triangle fills)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${ (1 - dist / connectionDistance) * 0.4 })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // Check for Triangle
            for (let k = j + 1; k < particles.length; k++) {
              const dx2 = particles[i].x - particles[k].x;
              const dy2 = particles[i].y - particles[k].y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
              const dx3 = particles[j].x - particles[k].x;
              const dy3 = particles[j].y - particles[k].y;
              const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

              if (dist2 < connectionDistance && dist3 < connectionDistance) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(0, 212, 255, ${ (1 - (dist+dist2+dist3)/(3*connectionDistance)) * 0.1 })`;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.lineTo(particles[k].x, particles[k].y);
                ctx.closePath();
                ctx.fill();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-[#020024]"
      style={{
        background: "radial-gradient(circle at 50% 50%, #090979 0%, #020024 100%)"
      }}
    />
  );
};

export default AnimatedBackground;
