import { motion } from "framer-motion";
import { Database, Brain, Cloud, BarChart3, Code, Users, ExternalLink, BookOpen, Eye, Download, TrendingUp, Quote } from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Analytics & BI",
    skills: ["Advanced SQL (PostgreSQL, MySQL)", "Tableau", "Power BI", "Excel (Advanced Modeling)", "KPI Design", "Dashboard Storytelling"],
  },
  {
    icon: Database,
    title: "Data & Statistics",
    skills: ["Data Cleaning & EDA", "Hypothesis Testing", "Regression Interpretation", "A/B Testing", "Forecasting (ARIMA)", "Data Validation"],
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python (Pandas, NumPy, Scikit-learn)", "R Programming", "Stata", "Git/GitHub", "FastAPI", "Jupyter"],
  },
  {
    icon: Brain,
    title: "AI & GenAI",
    skills: ["RAG", "Text-to-SQL / NL-to-SQL", "LangChain / LangGraph", "Prompt Engineering", "Pgvector / ChromaDB / Pinecone", "Neo4j Knowledge Graphs"],
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    skills: ["AWS (Bedrock, SageMaker, S3, EC2)", "Azure (SQL DB, Data Factory)", "ETL Pipelines", "Schema Design", "API Ingestion", "Monitoring & Logging"],
  },
  {
    icon: Users,
    title: "Business Skills",
    skills: ["Requirements Gathering (BRDs)", "SOPs", "Stakeholder Communication", "Executive Reporting", "Analytics Presentations", "Agile (Jira/Trello)"],
  },
];

const awards = [
  {
    emoji: "🏆",
    title: "Community Choice Award",
    detail: "Fall 2025 GenAI Case Competition · CFO Intelligence Platform",
  },
  {
    emoji: "🏅",
    title: "GW Business Fellowship Award",
    detail: "Merit-based · ~$22,000 (35% tuition coverage)",
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Core <span className="text-accent">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ icon: Icon, title, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
            >
              <Icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-foreground mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-6 md:p-8 rounded-xl bg-card border border-border shadow-card"
        >
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3 className="font-bold text-foreground text-lg">Published Research</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground leading-snug">
                Analyzing Classification and Feature Selection Strategies for Diabetes Prediction across Diverse Diabetes Datasets
              </h4>
              <p className="text-sm text-accent font-medium mt-1">
                Frontiers in Artificial Intelligence · Aug 21, 2024
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Analyzed machine learning models (RF, XGB, LR, GB, SVM) for diabetes prediction, achieving precision and recall of up to 0.9. Employed feature selection techniques (LIME, SHAP, Chi-square) to identify critical predictors such as age and family history, enhancing model transparency and data-driven decision-making in healthcare.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Co-authors: Saravana Kumar I J, Rithik R. Ragupathi, Sundaravelan S
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Quote, value: "26", label: "Citations" },
                { icon: Eye, value: "9.4k", label: "Views" },
                { icon: Download, value: "1.4k", label: "Downloads" },
                { icon: TrendingUp, value: "4.7", label: "Impact Factor" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col items-center p-4 rounded-lg bg-muted border border-border text-center"
                >
                  <metric.icon className="w-4 h-4 text-accent mb-2" />
                  <span className="text-xl font-bold text-foreground">{metric.value}</span>
                  <span className="text-xs text-muted-foreground">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-xs">
                CiteScore: 7.3
              </span>
              <a
                href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1421751/full"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
              >
                Read Full Paper <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Awards */}
        <div className="mt-6 p-6 rounded-xl bg-card border border-border shadow-card">
          <h3 className="font-bold text-foreground mb-4">Honors & Awards</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {awards.map((award, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-lg shrink-0">{award.emoji}</span>
                <div>
                  <p className="font-medium text-foreground">{award.title}</p>
                  <p className="text-xs text-muted-foreground">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
