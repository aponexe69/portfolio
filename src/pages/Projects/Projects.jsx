import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "BCIC IT CLUB Website",
    description:
      "A website for the BCIC IT Club, showcasing events, members, and resources.",
    link: "https://blogger.googleusercontent.com/img/a/AVvXsEgmpnZ8CBb8JViM9XURA3r1ERtzVL3UFhHLZuanc_fqePyscciipaUEGXCPLZoQ602PpTUAH8q4DVLAQMWWkG-nn_deqgjRBauvees1aLZH9wK-Tl66gH14ztaCO5gynevR6C1dsYGp1PicT19aIWlCe6cecjW2aaJvMfvON1UxRQtHYtP3wEYIoQZ3bMtu",
    color: "#22d3ee",
    githubLink: "https://github.com/aponexe69",
    liveLink: "https://bcic-itclub.blogspot.com/",
    tags: ["React", "Tailwind", "Blog"],
  },
  {
    title: "A Quiz App",
    description:
      "A quiz application built with React and Tailwind CSS, featuring multiple-choice questions, real-time scoring, and a user-friendly interface.",
    link: "https://blogger.googleusercontent.com/img/a/AVvXsEiSC8Ldfq3aKpgI2ribpFM6kfiF5z79bLEPxJn4MVenZSn5uTxLIhY8UuEL0EaTTqmkcTs-XsQmq6VaE8L7kLjai-CJbHP1adVBvygqFWcc7hP1p2xTuJcBTmHLO4gwIjC7SHhOysEsdHZeWDjrK--KRgb8yIpAesD4SwYY-gO5KOII2-J0_0_pN8iNKuy1",
    color: "#8b5cf6",
    githubLink: "https://github.com/aponexe69/quiz",
    liveLink: "https://aponexe69.github.io/quiz/",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    title: "🚀 Apon's College Project",
    description: "🚀 A blogger project made in my college days.",
    link: "https://blogger.googleusercontent.com/img/a/AVvXsEi7ETyNWfOS8liCVoqjPwKIJuP4muTcvtLR5ybh-PHMsoZuED6oO5fKqToPZRDEz7Wbtvwnjx9cpSLHB7E2hlFeBHwt9NO86xUYYHYG1yPF9nwe71LgiBp8TPLU4xmd9-MqNvlX4I5YapdQukkLxrbg5HRr1Q9BVmRL7oT1e9aL23BdyX_HfCUV83pmRd-Ej",
    color: "#ec4899",
    githubLink: "https://github.com/aponexe69",
    liveLink: "https://aponcollege.blogspot.com/",
    tags: ["Blogger", "HTML", "CSS"],
  },
  {
    title: "Animated Matrix Website 🔥",
    description:
      "A visually captivating website featuring an animated matrix background effect using HTML, CSS, and JavaScript.",
    link: "https://blogger.googleusercontent.com/img/a/AVvXsEg8dQX-OYwUgm0LoD1c5lmGFA_Isdgpy-I0bETM5471gRc-TWp4e8lk5pNDXIZAR-NHEavQ38BKfrX-8rtV_7yN_Q0VTSYGcxVCZT4MAEMZUvVnDeBPe7l2MexiMlaaU9aCwvu000zb0jVxs1di9t_9zIXqGtNR3Xf8NS6zOI9pOhbT4vBew9kpBVmJgGPW",
    color: "#10b981",
    githubLink: "https://github.com/aponexe69/portfolio-v3",
    liveLink: "https://aponexe69.github.io/portfolio-v3/",
    tags: ["JavaScript", "Animation", "CSS"],
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-[#04081A] relative" ref={container}>
        {/* Header Section */}
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Featured Work
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto px-4">
              A collection of projects that showcase my skills in web
              development, design, and problem-solving.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-3 bg-cyan-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="text-white w-full pb-32">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                tags={project.tags}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  tags,
}) {
  const container = useRef(null);
  const cardRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 });

  // 3D Tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTiltStyle({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        ref={cardRef}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          rotateX: tiltStyle.rotateX,
          rotateY: tiltStyle.rotateY,
          transformPerspective: 1000,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500"
          style={{ background: color }}
          whileHover={{ opacity: 0.2 }}
        />

        {/* Card content */}
        <div className="relative w-full flex flex-col md:flex-row bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl">
          {/* Image section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden group">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${color}40 0%, transparent 100%)`,
              }}
            />

            {/* Project number badge */}
            <motion.div
              className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white"
              style={{ background: `${color}90`, backdropFilter: "blur(8px)" }}
              whileHover={{ scale: 1.1 }}
            >
              Project {String(i + 1).padStart(2, "0")}
            </motion.div>

            {/* Tags */}
            <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
              {tags?.map((tag, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Decorative line */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div
                  className="h-[2px] w-20"
                  style={{
                    background: `linear-gradient(90deg, ${color}, transparent)`,
                  }}
                />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-gray-400 leading-relaxed line-clamp-4 md:line-clamp-none">
                {description}
              </p>
            </div>

            <div className="mt-6 md:mt-auto pt-6">
              <div
                className="w-full h-[1px] mb-6"
                style={{
                  background: `linear-gradient(90deg, ${color}50, transparent)`,
                }}
              />

              <div className="flex items-center gap-6">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: `${color}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color }}>
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: `${color}20` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color }}>
                    Live Demo
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  tags: PropTypes.array,
};
