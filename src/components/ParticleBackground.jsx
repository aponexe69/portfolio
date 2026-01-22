import { useEffect, useRef, useCallback } from "react";

export default function ParticleBackground({
    particleCount = 80,
    baseColor = "cyan",
    interactive = true
}) {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);

    const initParticles = useCallback((width, height) => {
        const particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }
        return particles;
    }, [particleCount]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            particlesRef.current = initParticles(width, height);
        };

        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        if (interactive) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        const getColor = (opacity) => {
            const colors = {
                cyan: `rgba(34, 211, 238, ${opacity})`,
                blue: `rgba(59, 130, 246, ${opacity})`,
                purple: `rgba(139, 92, 246, ${opacity})`,
                pink: `rgba(236, 72, 153, ${opacity})`,
            };
            return colors[baseColor] || colors.cyan;
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particlesRef.current.forEach((particle, i) => {
                // Mouse interaction
                if (interactive) {
                    const dx = mouseRef.current.x - particle.x;
                    const dy = mouseRef.current.y - particle.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        const force = (150 - dist) / 150;
                        particle.vx -= (dx / dist) * force * 0.02;
                        particle.vy -= (dy / dist) * force * 0.02;
                    }
                }

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Damping
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                // Wrap around edges
                if (particle.x < 0) particle.x = width;
                if (particle.x > width) particle.x = 0;
                if (particle.y < 0) particle.y = height;
                if (particle.y > height) particle.y = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = getColor(particle.opacity);
                ctx.fill();

                // Draw connections
                particlesRef.current.slice(i + 1).forEach((other) => {
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = getColor(0.1 * (1 - dist / 120));
                        ctx.stroke();
                    }
                });
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            if (interactive) {
                window.removeEventListener("mousemove", handleMouseMove);
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [baseColor, interactive, initParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}
