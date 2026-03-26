import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-heading text-2xl text-primary tracking-wider font-bold"
        >
          AP.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-widest uppercase font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden md:block text-sm font-body px-5 py-2 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-wider uppercase font-semibold"
        >
          Discutons
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
