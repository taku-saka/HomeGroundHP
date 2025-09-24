import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Studio: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="studio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-dark mb-4">
            STUDIO
          </h2>
          <div className="w-20 h-1 bg-moss mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/studio/studio-hero.jpg"
              alt="Creator"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <p className="text-gray-600 mb-8 text-lg text-center md:text-left">
              プロフェッショナルなサウンドを実現する最新鋭の機材と、本格的なスタジオでは味わえないクリエイティブな発想を引き出す快適な空間をご用意しております。
            </p>
            <motion.button
              onClick={() => navigate("/studio")}
              className="bg-moss text-white px-8 py-3 rounded-full hover:bg-moss-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              スタジオの詳細を見る
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
