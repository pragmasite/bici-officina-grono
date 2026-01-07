import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.contact.title1} <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone */}
            <motion.a
              variants={itemVariants}
              href="tel:+41762272180"
              className="group flex gap-4 rounded-xl bg-card p-6 border border-border shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">{t.contact.phone}</p>
                <p className="text-lg font-medium text-foreground">+41 76 227 21 80</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              href="mailto:info@biciofficina.ch"
              className="group flex gap-4 rounded-xl bg-card p-6 border border-border shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">{t.contact.email}</p>
                <p className="text-lg font-medium text-foreground">info@biciofficina.ch</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.a
              variants={itemVariants}
              href="https://www.google.com/maps/place/Via+Cantonale+101,+6537+Grono"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-xl bg-card p-6 border border-border shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">{t.contact.address}</p>
                <p className="text-lg font-medium text-foreground">Via Cantonale 101, 6537 Grono</p>
              </div>
            </motion.a>

            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41762272180">{t.contact.callNow}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-2xl shadow-soft border border-border h-[400px]"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2741.5626847365!2d9.145384612309445!3d46.24802297107621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548f8f8f8f8f9%3A0x1234567890abc!2sVia%20Cantonale%20101%2C%206537%20Grono!5e0!3m2!1sit!2sch!4v1234567890"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
