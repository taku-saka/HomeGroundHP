import React from "react";
import { motion } from "framer-motion";
import { newsItems } from "../data/news";

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-dark mb-4">
            NEWS
          </h2>
          <div className="w-20 h-1 bg-moss mx-auto mb-6"></div>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            最新のニュースやお知らせをご覧いただけます
          </p> */}
        </div>

        <div className="max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm text-moss font-medium">
                    {item.date}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-moss-dark mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 sm:text-md text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
