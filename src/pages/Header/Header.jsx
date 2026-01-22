import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { id: "home", icon: FaHome, text: "Home", path: "/" },
  { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
  { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
  { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
  { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
  { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Hide/show header based on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setIsScrolled(latest > 50);
    lastScrollY.current = latest;
  });

  // Update active link when location changes
  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveLink(path);
  }, [location]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
          }`}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.nav
            className={`relative mx-auto max-w-4xl px-2 py-2 rounded-2xl transition-all duration-300 ${isScrolled
                ? "bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-black/20 border border-gray-800/50"
                : "bg-transparent"
              }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient border animation for scrolled state */}
            {isScrolled && (
              <motion.div
                className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 pl-2">
                <motion.div
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  A
                </motion.div>
                <motion.span
                  className="font-bold text-white text-lg hidden sm:block"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Apon
                </motion.span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map(({ id, icon: Icon, text, path }, index) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => setActiveLink(id)}
                  >
                    <motion.div
                      className={`relative px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors ${activeLink === id
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                        }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Active background */}
                      {activeLink === id && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30"
                          layoutId="activeNav"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon className={`text-sm relative z-10 ${activeLink === id ? "text-cyan-400" : ""}`} />
                      <span className="relative z-10">{text}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-800/50 text-white border border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTimes className="text-lg" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="text-lg" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden shadow-2xl">
                <div className="p-4 space-y-2">
                  {navLinks.map(({ id, icon: Icon, text, path }, index) => (
                    <Link
                      key={id}
                      to={path}
                      onClick={() => {
                        setActiveLink(id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeLink === id
                            ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30"
                            : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                          }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className={`text-lg ${activeLink === id ? "text-cyan-400" : ""}`} />
                        <span className="font-medium">{text}</span>
                        {activeLink === id && (
                          <motion.div
                            className="ml-auto w-2 h-2 rounded-full bg-cyan-400"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
