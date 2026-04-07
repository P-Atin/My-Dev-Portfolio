import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/P-Atin" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/patrice-atin-b3a726329/" },
  { icon: Mail, label: "Email", href: "mailto:patriceatin@gmail.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .send(
        "service_fv4vcdb",
        "template_mrj7mto",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "M6KjbXCx0sJe41gkX"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setSuccess(false);
      });
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-base tracking-[0.3em] text-primary uppercase mb-3 font-semibold">
            Contact
          </p>
          <h2 className="text-5xl sm:text-6xl font-bold">
            Construisons Quelque Chose
            <br />
            <span className="text-gold-gradient">Ensemble</span>
          </h2>
        </motion.div>

        {/* Infos */}
<div className="flex justify-center gap-2 mb-12">
  <div className="flex items-center gap-2 p-4 bg-card border border-border rounded-lg">
    <Phone className="w-5 h-5 text-primary" />
    <p className="text-sm">+33 7 67 00 27 41</p>
  </div>
  <div className="flex items-center gap-2 p-4 bg-card border border-border rounded-lg">
    <MapPin className="w-5 h-5 text-primary" />
    <p className="text-sm">Paris, France</p>
  </div>
</div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Votre Nom"
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Votre Email"
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-lg"
            />
          </div>

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            type="text"
            placeholder="Sujet"
            required
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Votre message..."
            required
            className="w-full px-4 py-3 bg-secondary border border-border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gold-gradient rounded-lg font-bold"
          >
            {loading ? "Envoi..." : "Envoyer le Message"}
          </button>

          {/* Feedback */}
          {success === true && (
            <p className="text-green-500 text-center">Message envoyé ✅</p>
          )}
          {success === false && (
            <p className="text-red-500 text-center">Erreur lors de l'envoi ❌</p>
          )}
        </motion.form>

        {/* Socials */}
        <div className="flex justify-center gap-6">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href}>
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;