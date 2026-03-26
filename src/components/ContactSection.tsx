import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/P-Atin" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/patrice-atin-b3a726329/" },
  { icon: Mail, label: "Email", href: "mailto:patriceatin@gmail.com" },
];

const MagneticButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center justify-center w-14 h-14 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
      data-hover
    >
      {children}
    </a>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-base font-body tracking-[0.3em] text-primary uppercase mb-3 font-semibold">
            Contact
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-foreground">
            Construisons Quelque Chose
            <br />
            <span className="text-gold-gradient">Ensemble</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-4 max-w-xl mx-auto">
            Vous avez un projet en tête ? Une idée à explorer ? N'hésitez pas à me contacter, 
            je serais ravi d'en discuter.
          </p>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground font-body">Email</p>
              <p className="text-sm text-foreground font-body font-medium">patriceatin@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground font-body">Téléphone</p>
              <p className="text-sm text-foreground font-body font-medium">+33 7 67 00 27 41</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground font-body">Localisation</p>
              <p className="text-sm text-foreground font-body font-medium">Paris, France</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mb-16"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Votre Nom"
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Votre Email"
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Sujet"
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            rows={5}
            placeholder="Parlez-moi de votre projet..."
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-4 bg-gold-gradient text-primary-foreground font-body text-sm tracking-wider uppercase hover:shadow-gold-lg transition-shadow duration-300 rounded-lg font-bold"
            data-hover
          >
            Envoyer le Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <MagneticButton key={label} href={href}>
              <Icon className="w-5 h-5" />
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-border pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-heading text-primary text-xl font-bold">AP.</span>
          <span className="text-xs font-body text-muted-foreground tracking-wider">
            © 2026 Atin Patrice. Tous droits réservés.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
