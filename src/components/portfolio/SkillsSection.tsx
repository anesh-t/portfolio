import { motion } from "framer-motion";
import { Database, Brain, Cloud, BarChart3, Code, Users, ExternalLink } from "lucide-react";

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

const certifications = [
  {
    emoji: "🎓",
    title: "MS in Business Analytics",
    detail: "George Washington University · Jan 2026",
    link: "https://registrar.gwu.edu/cecredentials-validation",
  },
  {
    emoji: "☁️",
    title: "AWS Certified Cloud Practitioner",
    detail: "Amazon Web Services · Valid through Jul 2026",
  },
  {
    emoji: "🤖",
    title: "What Is Generative AI?",
    detail: "LinkedIn Learning · Aug 2025",
    link: "https://www.linkedin.com/learning/certificates/29eb2858b5463b70c646272bcd2b022157ea9047112b7e641838dfa9f00dd86e/",
  },
  {
    emoji: "📊",
    title: "SmartBridge Analytics & AI Training",
    detail: "SmartBridge · Analytics & AI Focus",
  },
];

const publications = [
  {
    emoji: "📄",
    title: "Published in Frontiers in AI",
    detail: "ML-Based Diabetes Prediction (2024) · 500+ Downloads",
    link: "https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2024.1421751/full",
    coAuthors: "Saravana Kumar I J, Rithik R. Ragupathi, Sundaravelan S",
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

        {/* Certifications */}
        <div className="mt-12 p-6 rounded-xl bg-card border border-border shadow-card">
          <h3 className="font-bold text-foreground mb-4">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {certifications.map((cert, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-lg shrink-0">{cert.emoji}</span>
                <div>
                  <p className="font-medium text-foreground">{cert.title}</p>
                  <p className="text-xs text-muted-foreground">{cert.detail}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-0.5">
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mt-6 p-6 rounded-xl bg-card border border-border shadow-card">
          <h3 className="font-bold text-foreground mb-4">Publications</h3>
          {publications.map((pub, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-lg shrink-0">{pub.emoji}</span>
              <div>
                <p className="font-medium text-foreground">{pub.title}</p>
                <p className="text-xs text-muted-foreground">{pub.detail}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Co-authors: {pub.coAuthors}</p>
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-0.5">
                    Read Paper <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

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
