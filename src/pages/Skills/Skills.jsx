import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Card className="group relative overflow-hidden bg-gray-900/80 backdrop-blur-sm border-gray-800/50 hover:border-cyan-500/30 transition-all duration-500 h-full">
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
        }}
      />

      {/* Inner background */}
      <div className="absolute inset-[1px] rounded-lg bg-gray-900/95" />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />

      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            className={`p-3 rounded-xl bg-gray-800/50 ${color} transition-all duration-300`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
            >
              <Badge
                variant="outline"
                className="group/badge relative bg-gray-800/50 hover:bg-cyan-500/10 text-gray-100 border-gray-700/50 hover:border-cyan-500/50 flex items-center gap-2 py-2 px-3 transition-all duration-300"
              >
                <motion.span
                  className="transform transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  {skill.icon}
                </motion.span>
                <span className="font-medium text-sm">{skill.name}</span>
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-cyan-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Responsive", icon: <Layout className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Wireframing", icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" /> },
        { name: "Prototyping", icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        { name: "Webpack", icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" /> },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        { name: "UI Animation", icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" /> },
        { name: "SVG Animation", icon: <MdAnimation className="w-4 h-4 text-[#00C853]" /> },
        { name: "3D Modeling", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" /> },
        { name: "Motion Graphics", icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" /> },
      ],
    },
  ];

  return (
    <main ref={containerRef} className="text-white min-h-screen bg-[#04081A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <section className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            Technical Expertise
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Icon Cloud */}
        <motion.div
          className="flex justify-center items-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <IconCloudDemo />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
