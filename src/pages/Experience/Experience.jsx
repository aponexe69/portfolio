import React, { useRef } from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    icon: Network,
    title: "WordPress Developer",
    company: "Fiverr",
    period: "2019 - 2020",
    description:
      "Worked on developing and customizing WordPress websites for clients globally.",
    skills: ["WordPress", "PHP", "CSS", "JavaScript"],
  },
  {
    icon: Layers,
    title: "Junior Frontend Developer",
    company: "Fiverr",
    period: "2021 - 2023",
    description:
      "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
    skills: ["React", "Tailwind CSS", "JavaScript", "Git"],
  },
  {
    icon: Code2,
    title: "JavaScript Developer",
    company: "Fiverr",
    period: "2023 - Present",
    description:
      "Contributed to developing JavaScript libraries and enhancing framework functionalities.",
    skills: ["Node.js", "TypeScript", "React", "MongoDB"],
  },
];

const ExperienceCard = ({ experience, index, isInView }) => {
  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="group relative"
    >
      {/* Connection line to timeline */}
      <div className="hidden lg:block absolute left-0 top-1/2 w-8 h-[2px] -translate-x-full bg-gradient-to-r from-transparent to-cyan-500/50" />

      {/* Card */}
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 p-8 transition-all duration-500"
        whileHover={{
          scale: 1.02,
          borderColor: "rgba(34, 211, 238, 0.5)",
          boxShadow: "0 0 40px rgba(34, 211, 238, 0.1)"
        }}
      >
        {/* Animated gradient border on hover */}
        <motion.div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
            zIndex: -1,
          }}
        />

        {/* Inner background */}
        <div className="absolute inset-[1px] rounded-2xl bg-gray-900/95 -z-[1]" />

        {/* Floating icon with pulse effect */}
        <div className="relative mb-6">
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center"
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-7 h-7 text-cyan-400" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="text-blue-400 font-semibold">{experience.company}</span>
              <span className="text-gray-600">•</span>
              <span className="text-sm font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {experience.period}
              </span>
            </div>
          </div>

          <p className="text-gray-300 border-l-2 border-cyan-500/50 pl-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {experience.skills.map((skill, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-700/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + idx * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(34, 211, 238, 0.1)",
                  borderColor: "rgba(34, 211, 238, 0.3)"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-6 h-[2px] bg-gradient-to-l from-cyan-500/50 to-transparent" />
          <div className="absolute top-0 right-0 w-[2px] h-6 bg-gradient-to-b from-cyan-500/50 to-transparent" />
        </div>
        <div className="absolute bottom-4 left-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-gradient-to-t from-purple-500/50 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[#04081A] relative overflow-hidden py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Content container */}
      <div ref={containerRef} className="relative container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Work History
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            "Transforming ideas into digital reality, one project at a time"
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <motion.div
              className="h-full bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Experience cards */}
          <div className="space-y-12 lg:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`lg:w-[45%] ${index % 2 === 0 ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                  }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#04081A]"
                  style={{ top: `calc(${index * 33}% + 100px)` }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.3, type: "spring" }}
                />

                <ExperienceCard
                  experience={exp}
                  index={index}
                  isInView={isInView}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
