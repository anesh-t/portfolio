import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science, Business Analytics",
    school: "George Washington University",
    department: "School of Business",
    period: "Aug 2024 – Dec 2025",
    location: "Washington, DC",
    gpa: "3.74 / 4.0",
    honors: ["GW Business Fellowship Award", "Community Choice Award – Fall 2025 GenAI Case Competition"],
    coursework: [
      "Machine Learning",
      "Data Warehousing",
      "Visualization for Analytics",
      "Statistical Modeling",
      "Database Management (SQL)",
      "Business Process Analytics",
      "Cloud Computing (AWS)",
      "Applied GenAI & LLM Agents",
    ],
  },
  {
    degree: "Bachelor of Technology, Computer Science & Engineering",
    school: "Vellore Institute of Technology",
    department: "School of Computer Science and Engineering",
    period: "Aug 2020 – Jun 2024",
    location: "Vellore, India",
    honors: [],
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "Software Engineering",
      "Probability & Statistics",
    ],
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 md:py-28 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="text-accent">Education</span>
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-12" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-6 md:p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>

                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-base text-accent font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.department}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {edu.location}
                      </span>
                      {edu.gpa && (
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Honors */}
                  {edu.honors.length > 0 && (
                    <div className="space-y-1.5">
                      {edu.honors.map((honor, j) => (
                        <div key={j} className="inline-flex items-center gap-1.5 mr-3 px-3 py-1 rounded-full bg-amber/10 text-amber text-xs font-semibold border border-amber/20">
                          🏆 {honor}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Coursework */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-accent" /> Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
