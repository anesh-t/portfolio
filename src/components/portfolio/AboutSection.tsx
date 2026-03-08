import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const tags = ["Data Analytics", "Business Intelligence", "AI-Driven Decision Systems"];

const languages = [
  { lang: "English", level: "Full Professional" },
  { lang: "French", level: "Limited Working" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-section-warm relative overflow-hidden">
    <BackgroundShapes variant="circles" />
    <div className="container relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold mb-2">
          About{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Me
          </span>
        </motion.h2>
        <motion.div variants={itemVariants} className="w-16 h-1 bg-gradient-warm rounded-full mb-10" />

        {/* Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border cursor-default transition-shadow hover:shadow-md"
              style={{
                background: "hsl(16 84% 62% / 0.1)",
                borderColor: "hsl(16 84% 62% / 0.25)",
                color: "hsl(16 84% 65%)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Body copy */}
        <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
          {[
            <p key="p1">
              I'm a <strong className="text-foreground">Business Data Analyst</strong> focused on
              turning complex, ambiguous problems into clear, decision-ready insights.
            </p>,
            <p key="p2">
              My work sits at the intersection of{" "}
              <strong className="text-foreground">data analytics, operations, and applied AI</strong>.
              I enjoy building systems that help teams understand what is happening, why it is
              happening, and what actions they should take next.
            </p>,
            <p key="p3">
              During my time at the{" "}
              <strong className="text-foreground">International Monetary Fund</strong>, I developed{" "}
              <strong className="text-foreground">Power BI dashboards and analytics workflows</strong>{" "}
              that helped teams monitor operational KPIs and improve coordination across large-scale
              global meetings. I also built <strong className="text-foreground">FundMate</strong>, an
              internal <strong className="text-foreground">AI-powered knowledge assistant</strong>{" "}
              designed to simplify access to documentation and reduce manual coordination.
            </p>,
            <p key="p4">
              I hold a{" "}
              <strong className="text-foreground">B.Tech in Computer Science from VIT</strong> and am
              completing my{" "}
              <strong className="text-foreground">
                Master's in Business Analytics at The George Washington University
              </strong>
              . My projects range from{" "}
              <strong className="text-foreground">SQL-driven data warehouses</strong> and Tableau
              dashboards to{" "}
              <strong className="text-foreground">AI-enabled analytics systems</strong> that combine
              structured data with real-world decision workflows.
            </p>,
            <p key="p5">
              More broadly, I'm interested in how{" "}
              <strong className="text-foreground">analytics and AI</strong> can help organizations make
              faster, clearer, and more informed decisions.
            </p>,
          ].map((paragraph, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              custom={i}
            >
              {paragraph}
            </motion.div>
          ))}
        </div>

        {/* Footer meta */}
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 20 }} transition={{ type: "spring", stiffness: 300 }}>
              <Globe className="w-4 h-4 text-accent shrink-0" />
            </motion.div>
            {languages.map(({ lang, level }) => (
              <motion.span
                key={lang}
                whileHover={{ scale: 1.05, y: -1 }}
                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border cursor-default"
              >
                {lang} · {level}
              </motion.span>
            ))}
          </div>
          <motion.div
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" /> Arlington, VA · Open to Relocate
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
