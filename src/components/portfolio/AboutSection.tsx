import { motion } from "framer-motion";
import { MapPin, Globe, Briefcase, GraduationCap, Brain, Sparkles, Target, Zap } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const highlights = [
  { icon: Briefcase, label: "IMF Extern", desc: "Built analytics systems for global operations", color: "from-blue-500 to-cyan-500" },
  { icon: Brain, label: "Applied GenAI", desc: "RAG assistants & LLM-powered agents", color: "from-violet-500 to-purple-500" },
  { icon: GraduationCap, label: "MS Analytics @ GWU", desc: "Business Analytics, GPA 3.74/4.0", color: "from-accent to-amber-500" },
  { icon: Target, label: "Decision Intelligence", desc: "Turning data into actionable insights", color: "from-emerald-500 to-teal-500" },
];

const tags = ["Data Analytics", "Business Intelligence", "AI-Driven Decision Systems", "SQL & Python", "Power BI & Tableau"];

const languages = [
  { lang: "English", level: "Full Professional" },
  { lang: "French", level: "Limited Working" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 relative overflow-hidden">
    {/* Rich gradient background */}
    <div className="absolute inset-0" style={{
      background: "linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(220 25% 12%) 30%, hsl(180 20% 10%) 60%, hsl(220 30% 8%) 100%)"
    }} />
    {/* Accent glow orbs */}
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(16 84% 62% / 0.08), transparent 70%)", top: "-10%", right: "-5%" }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(180 33% 30% / 0.1), transparent 70%)", bottom: "-5%", left: "-5%" }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
    />
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(0 0% 100% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.08) 1px, transparent 1px)",
      backgroundSize: "50px 50px",
    }} />

    <BackgroundShapes variant="circles" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Sparkles className="w-6 h-6" style={{ color: "hsl(16 84% 62%)" }} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            About{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Me</span>
          </h2>
        </div>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-10" />

        {/* Tags row */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-4 py-1.5 rounded-full text-xs font-semibold border cursor-default"
              style={{
                background: "hsl(16 84% 62% / 0.08)",
                borderColor: "hsl(16 84% 62% / 0.25)",
                color: "hsl(16 84% 70%)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Highlight cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative p-5 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: "hsl(0 0% 100% / 0.04)",
                border: "1px solid hsl(0 0% 100% / 0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} transition-all duration-300 group-hover:h-1`} />
              <motion.div
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-7 h-7 mb-3" style={{ color: "hsl(16 84% 62%)" }} />
              </motion.div>
              <h4 className="font-bold text-white text-sm mb-1">{label}</h4>
              <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story cards - replacing plain paragraphs */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{ background: "hsl(0 0% 100% / 0.03)", border: "1px solid hsl(0 0% 100% / 0.07)", backdropFilter: "blur(8px)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4" style={{ color: "hsl(16 84% 62%)" }} />
              <span className="text-xs font-bold text-white/70 uppercase tracking-wider">What I Do</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              I'm a <strong className="text-white">Business Data Analyst</strong> focused on
              turning complex, ambiguous problems into clear, decision-ready insights. My work sits at the intersection of{" "}
              <strong className="text-white">data analytics, operations, and applied AI</strong> — building systems that help teams understand what's happening and what to do next.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{ background: "hsl(0 0% 100% / 0.03)", border: "1px solid hsl(0 0% 100% / 0.07)", backdropFilter: "blur(8px)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500" />
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4" style={{ color: "hsl(16 84% 62%)" }} />
              <span className="text-xs font-bold text-white/70 uppercase tracking-wider">IMF Experience</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              At the <strong className="text-white">International Monetary Fund</strong>, I developed{" "}
              <strong className="text-white">Power BI dashboards and analytics workflows</strong>{" "}
              for global meetings. I also built <strong className="text-white">FundMate</strong>, an AI-powered knowledge assistant that reduced manual coordination by ~40%.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{ background: "hsl(0 0% 100% / 0.03)", border: "1px solid hsl(0 0% 100% / 0.07)", backdropFilter: "blur(8px)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4" style={{ color: "hsl(16 84% 62%)" }} />
              <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Education</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              I hold a <strong className="text-white">B.Tech in Computer Science from VIT</strong> and am completing my{" "}
              <strong className="text-white">Master's in Business Analytics at GWU</strong>. My projects span{" "}
              <strong className="text-white">SQL-driven data warehouses</strong>, Tableau dashboards, and{" "}
              <strong className="text-white">AI-enabled analytics systems</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -3 }}
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{ background: "hsl(0 0% 100% / 0.03)", border: "1px solid hsl(0 0% 100% / 0.07)", backdropFilter: "blur(8px)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-amber-500" />
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4" style={{ color: "hsl(16 84% 62%)" }} />
              <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Mission</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              I'm interested in how <strong className="text-white">analytics and AI</strong> can help organizations make faster, clearer, and more informed decisions — bridging the gap between raw data and <strong className="text-white">strategic action</strong>.
            </p>
          </motion.div>
        </div>

        {/* Footer meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 20 }} transition={{ type: "spring", stiffness: 300 }}>
              <Globe className="w-4 h-4 shrink-0" style={{ color: "hsl(16 84% 62%)" }} />
            </motion.div>
            {languages.map(({ lang, level }) => (
              <motion.span
                key={lang}
                whileHover={{ scale: 1.05, y: -1 }}
                className="px-3 py-1 rounded-full text-xs font-medium cursor-default"
                style={{
                  background: "hsl(0 0% 100% / 0.05)",
                  border: "1px solid hsl(0 0% 100% / 0.1)",
                  color: "hsl(0 0% 100% / 0.7)",
                }}
              >
                {lang} · {level}
              </motion.span>
            ))}
          </div>
          <motion.div
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "hsl(0 0% 100% / 0.5)" }}
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" /> Arlington, VA · Open to Relocate
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
