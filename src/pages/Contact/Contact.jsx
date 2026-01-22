import React, { useState, useRef } from "react";
import { Send, MapPin, Mail, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/aponexe69", label: "GitHub", color: "#6e5494" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077b5" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1da1f2" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "apon10080@gmail.com", color: "purple" },
  { icon: MapPin, label: "Location", value: "Mirpur, Dhaka", color: "pink" },
];

// Floating label input component
const FloatingInput = ({ label, type = "text", value, onChange, error, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative">
      <motion.input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-4 pt-6 rounded-xl bg-gray-900/50 border-2 transition-all duration-300 outline-none peer
          ${error
            ? "border-red-500/50 focus:border-red-500"
            : "border-gray-700/50 focus:border-cyan-500 hover:border-gray-600"
          }
        `}
        placeholder=" "
        {...props}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none
          ${isFocused || hasValue
            ? "top-2 text-xs text-cyan-400"
            : "top-1/2 -translate-y-1/2 text-gray-500"
          }
        `}
      >
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-sm mt-2 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// Toast notification component
const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 50, scale: 0.9 }}
    className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3
      ${type === "success"
        ? "bg-gradient-to-r from-green-500/90 to-emerald-500/90"
        : "bg-gradient-to-r from-red-500/90 to-pink-500/90"
      } backdrop-blur-sm`}
  >
    {type === "success" ? (
      <CheckCircle className="w-5 h-5 text-white" />
    ) : (
      <AlertCircle className="w-5 h-5 text-white" />
    )}
    <span className="text-white font-medium">{message}</span>
  </motion.div>
);

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({ message: "Please fill in all required fields", type: "error" });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setIsSubmitting(true);

    const form = new FormData();
    form.append("access_key", "90f4b8af-e590-42b0-beaf-10b18f66a703");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setToast({ message: "Message sent successfully! 🎉", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setToast({ message: result.message || "Failed to send message", type: "error" });
      }
    } catch (error) {
      setToast({ message: "An error occurred. Please try again.", type: "error" });
    }

    setIsSubmitting(false);
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <main className="bg-[#04081A] text-white min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <section ref={containerRef} className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="container mx-auto max-w-6xl">
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
              Let's Connect
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-cyan-500/30 transition-colors group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`p-3 rounded-xl bg-${item.color}-500/10 group-hover:bg-${item.color}-500/20 transition-colors`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.label}</h3>
                      <p className="text-gray-400">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800/50 flex items-center justify-center hover:border-cyan-500/30 transition-all"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ "--hover-color": social.color }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative code block */}
              <motion.div
                className="hidden lg:block p-4 rounded-xl bg-gray-900/30 border border-gray-800/30 font-mono text-sm"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="text-gray-500">// Let's build something amazing</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">collaboration</span> ={" "}
                  <span className="text-green-400">"success"</span>;
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />

                <div className="relative backdrop-blur-xl bg-gray-900/50 p-8 rounded-2xl border border-gray-800/50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FloatingInput
                        label="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={errors.name}
                      />
                      <FloatingInput
                        label="Your Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                      />
                    </div>

                    <FloatingInput
                      label="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      error={errors.subject}
                    />

                    <div className="relative">
                      <motion.textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows="5"
                        className={`w-full px-4 py-4 pt-6 rounded-xl bg-gray-900/50 border-2 transition-all duration-300 outline-none resize-none
                          ${errors.message
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-700/50 focus:border-cyan-500 hover:border-gray-600"
                          }
                        `}
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-2 text-xs text-cyan-400 pointer-events-none">
                        Your Message
                      </label>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-2 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="magnetic w-full relative overflow-hidden rounded-xl font-semibold py-4 px-6 text-white transition-all disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} />}
      </AnimatePresence>
    </main>
  );
}
