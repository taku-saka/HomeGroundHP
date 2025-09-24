import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Project } from "../types";

const Hero: React.FC = () => {
  // Create an array of 24 images by repeating the projects array
  const artists = projects
    .filter((project) => project.category === "Artists")
    .reverse();
  const influencer = projects
    .filter((project) => project.category === "Influencer")
    .reverse();
  const filtered = [...artists, ...influencer];
  const [visibleImages, setVisibleImages] = useState<Project[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 表示数の切り替え（スマホ: 12枚 / PC: 24枚）
  useEffect(() => {
    const updateVisibleImages = () => {
      const count = window.innerWidth < 768 ? 12 : 24;
      setVisibleImages(filtered.slice(0, count));
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, [filtered]);

  // スライド切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visibleImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [visibleImages.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* 24 images grid background with artistic gradient overlay */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-  md:grid-cols-6 md:grid-rows-4 gap-0">
        {/* grid-cols-3 md:grid-cols-6にしたい */}
        {visibleImages.map((image, index) => (
          <motion.div
            key={`${image.id}`}
            className="relative overflow-hidden"
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0.4,
              scale: index === currentSlide ? 1.1 : 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-moss-dark/30 to-moss-dark/90"></div>
          </motion.div>
        ))}
      </div>

      {/* Artistic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-moss-dark/50 via-moss/70 to-moss-dark/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-moss-dark/30 via-transparent to-moss-dark/30"></div>

      {/* Content overlay with enhanced artistic elements */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            ></motion.div>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-xl md:text-5xl text-gray-100 mb-12 max-w-2xl mx-auto mt-12 font-light leading-relaxed"
          >
            音楽を、"生きる場所"に。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="#works"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full transition-all duration-300 font-medium border border-white/30 hover:border-white/50"
            >
              WORKS
            </a>
            <a
              href="#contact"
              className="bg-white text-moss-dark hover:bg-greige-light px-10 py-4 rounded-full transition-colors duration-300 font-medium"
            >
              CONTACT
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress indicators */}
      {/* <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl px-4">
          {visibleImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-500 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
