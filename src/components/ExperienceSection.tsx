import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CV from "../assets/CV_Patrice_Atin.pdf";

const experiences = [
  {
    year: "Avril 2026",
    role: "Développeur Full Stack",
    company: "FlightPulse AI",
    description:
      "Plateforme de prédiction de prix de vols avec IA. Frontend Next.js 15 avec Tailwind CSS et Framer Motion. Backend Express avec Prisma ORM et PostgreSQL. Déploiement Vercel et Render avec Docker.",
  },
  {
    year: "Mars 2026",
    role: "Développeur Full Stack",
    company: "Générateur de README",
    description:
      "Application web développée avec React et Vite permettant de générer des README.md avec rendu Markdown en temps réel, sauvegarde automatique via LocalStorage et export de fichiers.",
  },
  {
    year: "Janvier 2026",
    role: "Développeur Full Stack",
    company: "Portfolio Personnel",
    description:
      "Conception d'un portfolio regroupant mes projets académiques et personnels, illustrant mes compétences en développement, conception et résolution de problématiques techniques.",
  },
  {
    year: "Juin 2025",
    role: "Développeur Full Stack",
    company: "Projet E-commerce",
    description:
      "Création d'un site e-commerce avec React (front-end) et Node.js / Express.js (back-end). Présenté comme réalisation principale de fin d'année.",
  },
  {
    year: "Mars 2025",
    role: "Développeur Web",
    company: "Projet Entreprise Scolaire",
    description:
      "Conception en équipe d'un site e-commerce pour une enseigne de vêtements et accessoires de sport, réalisé avec HTML/CSS, JavaScript et PHP.",
  },
  {
    year: "Novembre 2024",
    role: "Développeur Game Jam",
    company: "Game Jam",
    description:
      "Création d'un jeu fun en 2 jours en équipe en utilisant différentes technologies comme GDevelop, Löve, PhaserJS ou encore GameMaker.",
  },
  {
    year: "Juin 2024",
    role: "Agent Contractuel",
    company: "DGFIP",
    description:
      "Traitement des dossiers administratifs (classement et archivage). Support aux équipes fiscales via la mise à jour de fichiers et bases de données.",
  },
];

const tools = [
  "React", "TypeScript", "Node.js", "Express",
  "PHP", "SQL", "JavaScript", "HTML/CSS",
  "Figma", "GitLab", "GitHub"
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-base font-body tracking-[0.3em] text-primary uppercase mb-3 font-semibold">
            Parcours
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-foreground">
            Expérience
            <br />
            <span className="text-gold-gradient">Professionnelle</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 top-2 z-10" />
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}
              >
                <span className="text-xs font-body tracking-[0.2em] text-primary uppercase font-bold">
                  {exp.year}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-body text-primary/80 mb-2 font-semibold">
                  {exp.company}
                </p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outils & Technologies */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-[600px] overflow-hidden">
            <p className="text-sm font-body tracking-[0.2em] text-primary uppercase mb-6 font-semibold text-center">
              Outils & Technologies
            </p>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-3 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {[...tools, ...tools].map((tool, i) => (
                  <span
                    key={i}
                    className="text-sm px-5 py-2 bg-card border border-border rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

{/* Bouton Télécharger CV */}
<div className="mt-60 flex justify-center">
  <a
    href={CV}
    download="Mon_CV.pdf"
    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg 
              transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8" />
    </svg>
    Télécharger mon CV
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;