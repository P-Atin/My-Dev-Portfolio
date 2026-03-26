import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GoldIcosahedron from "./GoldIcosahedron";
import ParticleField from "./ParticleField";
import { Code2, Layers, Zap } from "lucide-react";

const subtitles = [
  "Développeur Full-Stack",
  "Passionné UI/UX",
  "Étudiant SUPINFO",
  "Créatif & Curieux",
];

const stats = [
  { icon: Code2, value: "5+", label: "Projets réalisés" },
  { icon: Layers, value: "2+", label: "Ans de formation" },
  { icon: Zap, value: "100%", label: "Investi & Motivé" },
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = subtitles[subtitleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex <= 1) {
            setIsDeleting(false);
            setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, subtitleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleField />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-base font-body tracking-[0.3em] text-primary uppercase mb-4 font-semibold">
            Bienvenue dans mon univers
          </p>
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] mb-6">
            <span className="text-foreground">Atin</span>
            <br />
            <span className="text-gold-gradient">Patrice</span>
          </h1>
          <div className="flex items-center gap-1 mb-8">
            <span className="text-xl sm:text-2xl font-body text-foreground font-medium">
              {currentText}
            </span>
            <span className="inline-block w-0.5 h-7 bg-primary animate-typewriter-cursor" />
          </div>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-8 max-w-lg">
            Étudiant en 2ème année à SUPINFO, je transforme des idées en expériences 
            numériques attractives, en alliant créativité, éco-conception et accessibilité.
          </p>
          <div className="flex gap-4 mb-12">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gold-gradient text-primary-foreground font-body text-sm tracking-wider uppercase hover:shadow-gold-lg transition-shadow duration-300 font-semibold"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 border border-primary/30 text-primary font-body text-sm tracking-wider uppercase hover:bg-primary/10 transition-all duration-300 font-semibold"
            >
              Me contacter
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xl font-heading font-bold text-foreground">{value}</span>
                  <p className="text-xs font-body text-muted-foreground tracking-wider">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="hidden lg:block h-[500px]"
        >
          <GoldIcosahedron />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-body tracking-widest text-muted-foreground uppercase">
          Défiler
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
