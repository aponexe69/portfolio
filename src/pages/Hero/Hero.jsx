import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import ParticleBackground from "@/components/ParticleBackground";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Animated Grid Background with enhanced visuals
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />

      {/* Animated grid */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_100%)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="60"
                height="60"
                fill="none"
                stroke="rgba(34, 211, 238, 0.15)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Magnetic button component
const MagneticButton = ({ children, href, variant = "primary" }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const baseClasses = "magnetic group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl transition-all duration-300 hover:scale-105";
  const variantClasses = variant === "primary"
    ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:shadow-[0_0_3rem_-0.5rem_#22d3ee]"
    : "bg-gradient-to-r from-gray-800 to-gray-700 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]";

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {variant === "primary" ? (
        <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-[#020617] transition-all duration-300 group-hover:bg-transparent">
          <span className="relative flex items-center justify-center gap-2 text-white font-medium">
            {children}
          </span>
        </span>
      ) : (
        <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-transparent group-hover:border-transparent">
          <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
            {children}
          </span>
        </span>
      )}
    </a>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const codeRef = useRef(null);

  const words = [
    "Full-Stack Developer & UI/UX Enthusiast",
    "JavaScript Developer & Web Developer",
    "Learning MERN Stack",
    "Linux & GitHub for DevOps Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: 'Asadujjaman Apon',
    title: 'Full-Stack Developer | Cloud Enthusiast',
    skills: [
        'React', 'NextJS', 'Redux', 'Express',
        'MySQL', 'MongoDB', 'Docker', 'AWS',
        'TypeScript', 'GraphQL', 'Git', 'Linux'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 4, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `);

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Stagger animations
    tl.from(badgeRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      delay: 0.5,
    })
      .from(headingRef.current?.querySelectorAll(".animate-word") || [], {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.1,
        duration: 0.8,
      }, "-=0.4")
      .from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      }, "-=0.4")
      .from(ctaRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
      }, "-=0.3")
      .from(codeRef.current, {
        opacity: 0,
        x: 100,
        rotationY: -15,
        duration: 1,
        ease: "power2.out",
      }, "-=0.8");

    // Floating badges animation
    gsap.to(".floating-badge", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, { scope: containerRef });

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
        {/* Interactive Particle Background */}
        <ParticleBackground particleCount={60} baseColor="cyan" />

        <section
          ref={containerRef}
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0"
        >
          <GridBackground />

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={15} />
          </div>

          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 pt-24 md:pt-28">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-72 lg:h-72 bg-cyan-500/20 rounded-full blur-[100px]" />
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-72 lg:h-72 bg-purple-500/20 rounded-full blur-[100px]" />

              {/* Welcome badge */}
              <motion.div
                ref={badgeRef}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-gray-300 text-sm font-medium">
                  Welcome to my universe
                </span>
              </motion.div>

              {/* Name section */}
              <div ref={headingRef} className="relative mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="animate-word inline-block">
                    <SparklesText text="Hello" />
                  </span>
                  <br />
                  <span className="animate-word inline-block">I'm</span>
                  <span className="animate-word inline-block ml-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Asadujjaman
                  </span>
                  <br />
                  <span className="animate-word inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Apon
                  </span>
                </h1>

                {/* Glowing effect behind name */}
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-[80px] animate-pulse" />
              </div>

              {/* Role badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 mb-8 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.5)" }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                <FlipWords
                  className="text-lg sm:text-xl text-cyan-400 font-medium"
                  words={words}
                />
              </motion.div>

              {/* Description */}
              <div ref={descRef} className="relative mb-12 max-w-xl">
                <p className="text-lg sm:text-xl text-gray-300/90 leading-relaxed">
                  Passionate JavaScript developer crafting beautiful, performant web experiences.
                  Building the future of the web, one component at a time. 💻✨
                </p>
              </div>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <MagneticButton href="https://github.com/aponexe69" variant="primary">
                  <span>View Projects</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </MagneticButton>

                <MagneticButton href="#contact" variant="secondary">
                  <span>Get Resume</span>
                  <span>📄</span>
                </MagneticButton>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-24 top-8 floating-badge">
                <motion.div
                  className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 text-purple-400 text-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  ✨ UI Magic
                </motion.div>
              </div>
              <div className="hidden lg:block absolute right-10 top-20 floating-badge">
                <motion.div
                  className="px-4 py-2 rounded-lg bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-sm"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  💻 Clean Code
                </motion.div>
              </div>
              <div className="hidden lg:block absolute top-64 left-[70%] floating-badge">
                <motion.div
                  className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 text-amber-400 text-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  💡 Innovation
                </motion.div>
              </div>
            </div>

            {/* Right column - Code window */}
            <div ref={codeRef} className="w-full lg:w-1/2 lg:pl-12">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />

                <div className="relative bg-[#0a0f1a] rounded-xl overflow-hidden border border-gray-800/50">
                  {/* Window header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-gray-800/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
                    </div>
                    <span className="ml-3 text-sm text-gray-400 flex items-center gap-2">
                      <span className="text-cyan-400">⚡</span>
                      developer.js
                    </span>
                  </div>

                  {/* Code content */}
                  <div className="relative overflow-hidden">
                    <pre className="language-javascript !bg-transparent !p-6 text-sm">
                      <code className="language-javascript">{code}</code>
                    </pre>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <span className="text-cyan-400">🖱️</span>
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex justify-center pt-2"
            whileHover={{ borderColor: "rgba(34, 211, 238, 0.8)" }}
          >
            <motion.div
              className="w-1.5 h-3 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        <PortfolioPage />
      </main>
    </>
  );
}
