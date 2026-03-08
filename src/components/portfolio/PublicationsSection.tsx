import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Eye, Download, TrendingUp, Quote } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const metrics = [
  { icon: Quote, value: "26", label: "Citations", gradient: "from-violet-500 to-purple-500" },
  { icon: Eye, value: "9.4k", label: "Views", gradient: "from-blue-500 to-cyan-500" },
  { icon: Download, value: "1.4k", label: "Downloads", gradient: "from-emerald-500 to-teal-500" },
  { icon: TrendingUp, value: "4.7", label: "Impact Factor", gradient: "from-accent to-amber-500" },
  { icon: BookOpen, value: "7.3", label: "CiteScore", gradient: "from-pink-500 to-rose-500" },
];

const PublicationsSection = () => (
  <section id="publications" className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
    <BackgroundShapes variant="dots" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Publications & <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Research</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        {/* Publication card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -3 }}
          className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-1"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 text-xs font-bold border border-violet-500/20"
            >
              Peer-Reviewed Journal
            </motion.span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-foreground mt-4 leading-snug"
          >
            <a href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1421751/full" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Analyzing Classification and Feature Selection Strategies for Diabetes Prediction across Diverse Diabetes Datasets
            </a>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-accent font-semibold mt-2 flex items-center gap-1.5"
          >
            <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
              <BookOpen className="w-4 h-4" />
            </motion.div>
            Frontiers in Artificial Intelligence · Aug 21, 2024
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-3xl"
          >
            Analyzed ML models (RF, XGB, LR, GB, SVM) for diabetes prediction, achieving precision/recall up to 0.9. Employed LIME, SHAP, Chi-square for critical predictor identification, enhancing model transparency in healthcare decision-making.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="text-xs text-muted-foreground mt-2"
          >
            Co-authors: Saravana Kumar I J, Rithik R. Ragupathi, Sundaravelan S
          </motion.p>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="relative flex flex-col items-center p-4 rounded-xl bg-muted border border-border text-center overflow-hidden cursor-default group/metric"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${metric.gradient} transition-all duration-300 group-hover/metric:h-1`} />
                <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <metric.icon className="w-4 h-4 text-accent mb-2" />
                </motion.div>
                <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                <span className="text-xs text-muted-foreground">{metric.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            whileHover={{ x: 4 }}
            href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1421751/full"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold text-sm mt-6"
          >
            Read Full Paper <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

      </motion.div>
    </div>
  </section>
);

export default PublicationsSection;
