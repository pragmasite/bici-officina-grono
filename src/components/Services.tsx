import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Wrench, ShoppingCart, Lightbulb, Compass, Zap, Headphones } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const icons = [Wrench, ShoppingCart, Lightbulb, Compass, Zap, Headphones];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="servizi" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">{t.services.title}</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {t.services.items.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-xl bg-background p-8 border border-border shadow-soft hover:shadow-medium transition-all hover:-translate-y-2"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground/70">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
