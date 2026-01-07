import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryDescriptions = {
    de: [
      "Rahmenheftmaschine",
      "Laminiermaschine",
      "Kreissäge & Stanze",
      "Glasschneiden",
      "Schrumpffolien-Service",
      "Vakuumpresse",
      "Button-Service",
      "Willkommen",
    ],
    en: [
      "Frame Stapler",
      "Laminating Machine",
      "Circular Saw & Punch",
      "Glass Cutting",
      "Shrink Wrap Service",
      "Vacuum Press",
      "Button Service",
      "Welcome",
    ],
  };

  const descriptions = galleryDescriptions[lang];

  const images = [
    { src: "/images/img-1.jpg", alt: descriptions[0] },
    { src: "/images/img-2.jpg", alt: descriptions[1] },
    { src: "/images/img-3.jpg", alt: descriptions[2] },
    { src: "/images/img-4.jpg", alt: descriptions[3] },
    { src: "/images/img-5.jpg", alt: descriptions[4] },
    { src: "/images/img-6.jpg", alt: descriptions[5] },
    { src: "/images/img-7.jpg", alt: descriptions[6] },
    { src: "/images/img-8.jpg", alt: descriptions[7] },
  ];

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-2">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid - 8 images displayed as thumbnails */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-auto rounded-lg"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-white text-lg font-medium"
              >
                {images[selectedIndex].alt}
              </motion.p>

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-accent transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-accent transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Counter */}
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm">
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
