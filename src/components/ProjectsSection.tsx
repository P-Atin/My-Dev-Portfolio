import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Personnel",
    description:
      "Portfolio regroupant mes projets académiques et personnels, illustrant mes compétences en développement, conception et résolution de problématiques techniques.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
    repo: "https://github.com/P-Atin/My-Dev-Portfolio",
  },
  {
    title: "Site E-commerce (Projet fin d'année)",
    description:
      "Création d'un site e-commerce complet avec React en front-end et Node.js / Express.js en back-end. Présenté comme réalisation principale de fin d'année à CODA.",
    tags: ["React", "Node.js", "Express", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    span: "col-span-1",
    repo: "https://gitlab.com/fullstack9585502/website_ecommerce_react",
  },
  {
    title: "Générateur de README",
    description:
      "Application web développée avec React et Vite permettant de générer des README.md avec rendu Markdown en temps réel, sauvegarde automatique via LocalStorage et export de fichiers.",
    tags: ["React", "Vite", "TypeScript", "Markdown"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    span: "col-span-1",
    repo: "https://github.com/P-Atin/readme-generator",
  },
  {
    title: "Game Jam",
    description:
      "Création d'un jeu en 2 jours en équipe lors d'une game jam, en explorant différentes technologies de développement de jeux vidéo.",
    tags: ["GDevelop", "PhaserJS", "Löve", "GameMaker"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
    repo: "https://www.linkedin.com/feed/update/urn:li:activity:7264668952914538497/?originTrackingId=MX65XB3dvSe0Xf2X58Tsmg%3D%3D",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-foreground">
            Projets
            <br />
            <span className="text-gold-gradient">Phares</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;