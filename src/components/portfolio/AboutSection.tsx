import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, BookOpen, Globe, Briefcase } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const highlights = [
  { icon: Briefcase, label: "IMF Extern", sub: "Decision Support & BI", color: "from-blue-500 to-cyan-500" },
  { icon: GraduationCap, label: "MS Business Analytics", sub: "GWU · 3.74/4.0", color: "from-indigo-500 to-violet-500" },
  { icon: Award, label: "GW Fellowship", sub: "$22K Merit Award", color: "from-amber-500 to-orange-500" },
  { icon: BookOpen, label: "Published Research", sub: "Frontiers in AI · 26 Citations", color: "from-accent to-rose-500" },
];

const tags = ["Data Analytics", "Business Intelligence", "AI-Driven Decision Systems"];

const languages = [
  { lang: "English", level: "Full Professional" },
  { lang: "French", level: "Limited Working" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-section-warm relative overflow-hidden">
    <BackgroundShapes variant="circles" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          About <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-8" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text column */}
          <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed font-sans min-w-0">
            <p className="text-xl font-semibold text-foreground">
              Hi, I'm Anesh Thangaraj.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{
                    background: "hsl(16 84% 62% / 0.1)",
                    borderColor: "hsl(16 84% 62% / 0.25)",
                    color: "hsl(16 84% 65%)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="break-words">
              I'm a <strong className="text-foreground">Business Data Analyst</strong> focused on turning complex, ambiguous problems into clear, decision-ready insights.
            </p>
            <p className="break-words">
              My work sits at the intersection of <strong className="text-foreground">data analytics, operations, and applied AI</strong>. I enjoy building systems that help teams understand what is happening, why it is happening, and what actions they should take next.
            </p>
            <p className="break-words">
              During my time at the <strong className="text-foreground">International Monetary Fund</strong>, I developed <strong className="text-foreground">Power BI dashboards and analytics workflows</strong> that helped teams monitor operational KPIs and improve coordination across large-scale global meetings. I also built <strong className="text-foreground">FundMate</strong>, an internal <strong className="text-foreground">AI-powered knowledge assistant</strong> designed to simplify access to documentation and reduce manual coordination.
            </p>
            <p className="break-words">
              I hold a <strong className="text-foreground">B.Tech in Computer Science from VIT</strong> and am completing my <strong className="text-foreground">Master's in Business Analytics at The George Washington University</strong>. My projects range from <strong className="text-foreground">SQL-driven data warehouses</strong> and Tableau dashboards to <strong className="text-foreground">AI-enabled analytics systems</strong> that combine structured data with real-world decision workflows.
            </p>
            <p className="break-words">
              More broadly, I'm interested in how <strong className="text-foreground">analytics and AI</strong> can help organizations make faster, clearer, and more informed decisions.
            </p>

            {/* Languages */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Globe className="w-5 h-5 text-accent shrink-0" />
              {languages.map(({ lang, level }) => (
                <span key={lang} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border whitespace-nowrap">
                  {lang} · {level}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" /> Arlington, VA · Open to Relocate
            </div>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, sub, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
                <Icon className="w-7 h-7 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-sm text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
