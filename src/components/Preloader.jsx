import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                        onComplete?.();
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-[#04081A] flex flex-col items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
                    }}
                >
                    {/* Logo/Name Animation */}
                    <motion.div
                        className="relative mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold"
                            style={{
                                background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {"Apon".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Glowing underline */}
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Progress bar */}
                    <div className="w-64 md:w-80">
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(progress, 100)}%` }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        <motion.p
                            className="text-gray-500 text-sm mt-4 text-center font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {Math.round(Math.min(progress, 100))}%
                        </motion.p>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    background: `rgba(${Math.random() > 0.5 ? '34, 211, 238' : '139, 92, 246'}, 0.3)`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
