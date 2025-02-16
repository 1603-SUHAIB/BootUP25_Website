import React, { useEffect, useRef, useState } from "react";

const ParticleCursorEffect = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const particles = useRef([]);
  const particleCount = 80;
  const mouse = useRef({ x: undefined, y: undefined });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsla(${270 + Math.random() * 60}, 100%, 50%, 0.6)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        if (mouse.current.x !== undefined && mouse.current.y !== undefined) {
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 100;
            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    particles.current = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 26, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      requestAnimationFrame(() => {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      });
    };

    const handleMouseLeave = () => {
      mouse.current.x = undefined;
      mouse.current.y = undefined;
    };

    const handleClick = (event) => {
      for (let i = 0; i < 5; i++) {
        const particle = new Particle();
        particle.x = event.clientX;
        particle.y = event.clientY;
        particle.speedX = Math.random() * 4 - 2;
        particle.speedY = Math.random() * 4 - 2;
        particles.current.push(particle);
      }
      if (particles.current.length > particleCount + 20) {
        particles.current.splice(0, particles.current.length - (particleCount + 20));
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-follower"
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          border: "2px solid #9000ff",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "all 0.1s ease",
          zIndex: 1000,
          left: mouse.x - 10 + "px",
          top: mouse.y - 10 + "px",
        }}
      ></div>
      <canvas ref={canvasRef} style={{ display: "block", position: "absolute", top: 0, left: 0 }}></canvas>
    </>
  );
};

export default ParticleCursorEffect;
