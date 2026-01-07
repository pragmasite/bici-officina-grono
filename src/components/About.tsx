import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
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
    <section id="chi-siamo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.about.title1} <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="rounded-xl bg-primary/5 p-6 border border-primary/10">
              <div className="text-4xl font-serif text-primary font-bold mb-2">20+</div>
              <p className="text-foreground/70">{t.about.stat1}</p>
            </div>
            <div className="rounded-xl bg-primary/5 p-6 border border-primary/10">
              <div className="text-4xl font-serif text-primary font-bold mb-2">3</div>
              <p className="text-foreground/70">{t.about.stat2}</p>
            </div>
            <div className="rounded-xl bg-primary/5 p-6 border border-primary/10">
              <div className="text-4xl font-serif text-primary font-bold mb-2">5★</div>
              <p className="text-foreground/70">{t.about.stat3}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl bg-card p-6 border border-border shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="font-serif text-lg text-primary mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
