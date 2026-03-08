import { motion } from "framer-motion";
import { Users, ExternalLink } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";
import logoGwu from "@/assets/logo-gwu.png";
import logoVit from "@/assets/logo-vit.png";

const organizations = [
  {
    role: "Executive Vice President (Operations & Analytics)",
    organization: "GWU Graduate Consulting Club",
    institution: "The George Washington University School of Business",
    period: "Jan 2025 – Dec 2025",
    location: "Washington, DC",
    url: "https://www.linkedin.com/company/gwbusiness/",
    logo: logoGwu,
    color: "from-indigo-500 to-blue-500",
    bullets: [
      "Led end-to-end operations for consulting workshops, case events, and speaker sessions (150+ attendees).",
      "Coordinated speakers, alumni, logistics, and execution with minimal oversight.",
      "Designed tracking and reporting workflows (Excel, dashboards) to analyze attendance and engagement trends.",
      "Partnered with industry professionals and alumni to facilitate networking, mentorship, and panel discussions.",
    ],
  },
  {
    role: "Core Committee Member",
    organization: "Center for Social and Entrepreneurship Development (CSED)",
    institution: "Vellore Institute of Technology",
    period: "Jan 2021 – Feb 2024",
    location: "Vellore, India",
    url: "https://www.linkedin.com/school/400138/",
    logo: logoVit,
    color: "from-rose-500 to-pink-500",
    bullets: [
      "Contributed to social impact and entrepreneurship initiatives over 3+ years at VIT.",
    ],
  },
];

const OrganizationsSection = () => (
  <section id="organizations" className="py-20 md:py-28 bg-section-lavender relative overflow-hidden">
    <BackgroundShapes variant="crosses" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Clubs & <span className="text-gradient-warm" style={{ backgroundImage: "linear-gradient(135deg, hsl(16 84% 62%), hsl(38 92% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Organizations</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-warm rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${org.color} transition-all duration-300 group-hover:h-1.5`} />

              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden shrink-0 cursor-pointer"
                  style={{ width: '5rem', height: '5rem' }}
                >
                  <img src={org.logo} alt={org.organization} className="object-contain" style={{ width: '3.5rem', height: '3.5rem' }} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">{org.role}</h3>
                  <p className="text-accent font-semibold text-sm flex items-center gap-1.5">
                    <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
                      <Users className="w-3.5 h-3.5" />
                    </motion.div>
                    {org.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{org.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground">
                <span className="font-medium">{org.period}</span>
                <span>·</span>
                <span>{org.location}</span>
                <motion.a
                  whileHover={{ x: 3 }}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> LinkedIn
                </motion.a>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {org.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.08 }}
                    className="flex gap-2"
                  >
                    <span className="text-accent mt-1 shrink-0 text-lg leading-none">•</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default OrganizationsSection;
