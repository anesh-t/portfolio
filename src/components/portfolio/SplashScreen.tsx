import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "exit">("logo");

  useEffect(() => {
    try {
      const ctx = new AudioContext();
      const now = ctx.currentTime;

      // Soft ambient pad — warm rising chord
      const notes = [261.6, 329.6, 392, 523.3]; // C4, E4, G4, C5
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.04, now + i * 0.12 + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
        osc.start(now + i * 0.12);
        osc.stop(now + 2);
      });

      // Gentle shimmer on top
      const shimmer = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      shimmer.connect(shimmerGain);
      shimmerGain.connect(ctx.destination);
      shimmer.type = "triangle";
      shimmer.frequency.setValueAtTime(1046.5, now + 0.5); // C6
      shimmerGain.gain.setValueAtTime(0, now + 0.5);
      shimmerGain.gain.linearRampToValueAtTime(0.02, now + 0.7);
      shimmerGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
      shimmer.start(now + 0.5);
      shimmer.stop(now + 1.8);
    } catch (e) {
      // Audio not supported
    }

    const timer = setTimeout(() => setPhase("exit"), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === "logo" && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, hsl(220 30% 8%), hsl(220 25% 14%))" }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(16 84% 62% / 0.15), transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(180 33% 24% / 0.2), transparent 70%)" }}
            animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />

          <div className="relative text-center">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 50%))" }}
            >
              <span className="text-3xl font-display font-bold text-white">AT</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
            >
              Anesh
              <span
                className="ml-2"
                style={{
                  backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 50%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Thangaraj
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-white/40 text-sm mt-3 tracking-widest uppercase font-sans"
            >
              Business Data Analyst · GenAI
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-8 mx-auto h-0.5 rounded-full overflow-hidden"
              style={{ width: 120, background: "hsl(220 15% 20%)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(16 84% 62%), hsl(38 92% 50%))" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
