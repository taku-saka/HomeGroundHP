import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Creators: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="creators" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-dark mb-4">
            CREATOR
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
              src="/creators/creator_section_image.jpg"
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
              様々な分野において経験豊富なクリエイターチームG/amm（グラム）がお客様のご要望を踏まえ、祐逸無二な理想のサウンドを実現します。
            </p>
            <motion.button
              onClick={() => navigate("/creators")}
              className="bg-moss text-white px-8 py-3 rounded-full hover:bg-moss-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              クリエイター一覧を見る
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
