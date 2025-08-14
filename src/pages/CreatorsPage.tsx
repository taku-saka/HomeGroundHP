import React from "react";
import { motion } from "framer-motion";
import { creators } from "../data/creators";

const CreatorsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] bg-moss-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-moss-dark/90 to-moss-dark/70">
          <img
            src="/creators/creators-hero.jpg"
            alt="Creators"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              CREATORS
            </h1>
            <p className="text-xl text-greige-light max-w-2xl mx-auto px-4">
              HOMEGROUNDのクリエイターたちをご紹介します。
              それぞれが持つ独自の感性と確かな技術で、
              あなたの音楽制作をサポートいたします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {creators.map((creator, index) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative w-full aspect-[17/23] overflow-hidden">
                  <img
                    src={creator.imageUrl}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-moss-dark mb-2 text-center">
                    {creator.name}
                  </h2>
                  <p className="text-moss font-medium mb-3 text-center">
                    {creator.role}
                  </p>
                  <p className="text-gray-600">{creator.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatorsPage;
