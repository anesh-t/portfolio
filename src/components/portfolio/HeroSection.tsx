import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Code2, Github, Linkedin, Mail, Terminal, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import profileImage from "@/assets/profile-anesh.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 15);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 15);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(220 25% 14%) 40%, hsl(180 20% 12%) 100%)" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cursor-following gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, hsl(16 84% 62% / 0.12), transparent 70%)",
          top: "10%",
          right: "10%",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, hsl(180 33% 30% / 0.15), transparent 70%)",
          bottom: "5%",
          left: "5%",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "hsl(16 84% 62% / 0.5)" : "hsl(180 33% 50% / 0.4)",
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8 border"
                style={{
                  background: "hsl(16 84% 62% / 0.1)",
                  borderColor: "hsl(16 84% 62% / 0.3)",
                  color: "hsl(16 84% 70%)",
                }}
              >
                <Sparkles className="w-4 h-4" />
                Open to Opportunities
              </motion.span>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-display leading-[1.05] mb-6 text-white">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block font-light italic text-white/90"
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block font-bold"
                  style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Anesh Thangaraj
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg md:text-xl text-white/80 mb-3 leading-relaxed max-w-2xl font-sans"
              >
                Business Data Analyst · Applied GenAI & LLM Agents · Analytics Automation & BI
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-base text-white/45 mb-10 max-w-xl leading-relaxed font-sans"
              >
                Turning ambiguous business problems into decision-ready insights.
                <br />
                MS Business Analytics @ GWU · IMF Extern · AWS Certified
              </motion.p>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-3"
              >
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/anesh-t", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/anesh-t", label: "GitHub" },
                  { icon: Mail, href: "mailto:aneshraj14@gmail.com", label: "Email" },
                  { icon: Code2, href: "https://www.hackerrank.com/profile/aneshraj14", label: "HackerRank" },
                  { icon: Terminal, href: "https://leetcode.com/u/Anesh_T/", label: "LeetCode" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: "hsl(0 0% 100% / 0.1)",
                      background: "hsl(0 0% 100% / 0.04)",
                      backdropFilter: "blur(12px)",
                    }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Glowing ring behind image */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-60 blur-2xl"
              style={{ background: "linear-gradient(135deg, hsl(16 84% 62% / 0.3), hsl(38 92% 60% / 0.2), hsl(180 33% 50% / 0.2))" }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Decorative rotating ring */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-dashed"
              style={{ borderColor: "hsl(16 84% 62% / 0.2)" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            {/* Image container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2" style={{ borderColor: "hsl(16 84% 62% / 0.4)" }}>
              <img
                src={profileImage}
                alt="Anesh Thangaraj"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(180deg, transparent 60%, hsl(220 30% 8% / 0.4) 100%)" }} />
            </div>

            {/* Floating accent dots */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
              style={{ background: "hsl(16 84% 62%)" }}
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 -left-3 w-3 h-3 rounded-full"
              style={{ background: "hsl(38 92% 60%)" }}
              animate={{ y: [0, 6, 0], opacity: [0.5, 0.9, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-accent transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
