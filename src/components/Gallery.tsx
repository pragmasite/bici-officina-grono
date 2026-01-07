import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Gallery images with descriptions in both languages
  const images = [
    { src: "/images/img-1.jpg", alt_it: "Showroom moderno", alt_en: "Modern showroom" },
    { src: "/images/img-2.jpg", alt_it: "Ruota professionale", alt_en: "Professional wheel" },
    { src: "/images/img-3.jpg", alt_it: "Diagnosi tecnica", alt_en: "Technical diagnosis" },
    { src: "/images/img-4.jpg", alt_it: "Riparazione precisione", alt_en: "Precision repair" },
  ];

  const getImageDescription = (image: typeof images[0]) => {
    return lang === "it" ? image.alt_it : image.alt_en;
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : (prev || 0) + 1));
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : (prev || 0) - 1));
    }
  };

  return (
    <section id="galleria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">{t.gallery.title}</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Grid gallery */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all"
            >
              <img
                src={image.src}
                alt={getImageDescription(image)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">{getImageDescription(image)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-foreground">
                <img
                  src={images[selectedIndex].src}
                  alt={getImageDescription(images[selectedIndex])}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image description */}
              <div className="mt-4 text-center text-white">
                <p className="text-lg font-medium">
                  {getImageDescription(images[selectedIndex])}
                </p>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-4 text-white/60 text-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
