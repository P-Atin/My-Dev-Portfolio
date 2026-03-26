import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Coffee, Globe, Heart } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 70 },
  { name: "TypeScript", level: 50 },
  { name: "Node.js", level: 75 },
  { name: "UI/UX Design", level: 90 },
  { name: "Cloud / DevOps", level: 50 },
];

const highlights = [
  { icon: Coffee, title: "3000+ Cafés", desc: "Et ça continue" },
  { icon: Heart, title: "Open Source", desc: "Contributeur actif" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-base font-body tracking-[0.3em] text-primary uppercase mb-3 font-semibold">
            À propos
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-foreground">
            Créateur d'Expériences
            <br />
            <span className="text-gold-gradient">Numériques</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-foreground/90 font-body text-lg leading-relaxed mb-6 font-medium">
              Développeur full-stack étudiant en 2ème année à SUPINFO, passionné par la
              création d'interfaces web attractives et accessibles. Basé à Paris, je
              me spécialise dans la transformation d'idées en expériences numériques
              soignées, en alliant créativité et éco-conception.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Mon approche allie précision technique et sensibilité design. Je crois au
              code propre, à l'architecture réfléchie et aux interfaces aussi agréables
              à utiliser qu'à regarder. De la conception à la mise en production, je
              m'investis pleinement dans chaque projet que je réalise.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Quand je ne code pas, vous me trouverez à lire des mangas, à cuisiner,
              ou sur un terrain de football. La curiosité et la créativité guident
              autant ma vie que mon travail.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="p-4 bg-card border border-border rounded-lg group hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm font-heading font-semibold text-foreground">{title}</p>
                  <p className="text-xs font-body text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-sm font-body tracking-[0.2em] text-primary uppercase mb-2 font-semibold">
              Compétences techniques
            </p>
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-sm text-foreground tracking-wider font-medium">
                    {skill.name}
                  </span>
                  <span className="font-body text-sm text-primary font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gold-gradient rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1.2,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
