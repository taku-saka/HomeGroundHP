import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

type Category = "Artists" | "Company" | "YouTube";

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Artists");
  const categories: Category[] = ["Artists", "Company", "YouTube"];

  const getFilteredProjects = () =>
    projects.filter((project) => project.category === activeCategory);

  const getDuplicatedProjects = (isBottomRow: boolean = false) => {
    const filtered = getFilteredProjects();
    if (isBottomRow) {
      // For bottom row, start from the middle
      const midPoint = Math.floor(filtered.length / 2);
      const secondHalf = filtered.slice(midPoint).reverse();
      const firstHalf = filtered.slice(0, midPoint).reverse();
      return [...firstHalf, ...secondHalf, ...firstHalf, ...secondHalf];
    }
    // For top row, keep original order
    return [...filtered.reverse(), ...filtered.reverse()];
  };

  const hasEnoughProjects = getFilteredProjects().length >= 4;

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-dark mb-4">
            WORKS
          </h2>
          <div className="w-20 h-1 bg-moss mx-auto mb-6"></div>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            テキストテキストテキストテキストテキストテキストテキスト
          </p> */}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-moss text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="w-[200%] relative max-w-6xl mx-auto overflow-hidden hover-pause">
          {hasEnoughProjects ? (
            <>
              {/* Top Row - Left to Right */}
              <div className="relative mb-6 overflow-hidden">
                <div
                  className="flex  gap-6 slide-left"
                  key={`top-${activeCategory}`}
                >
                  {getDuplicatedProjects().map((project, index) => (
                    <div
                      key={`top-${project.id}-${index}`}
                      className="flex-none w-44 md:w-60 group relative overflow-hidden rounded-lg shadow-md"
                    >
                      <div className="aspect-w-16 aspect-h-9 h-48">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition duration-300 filter group-hover:brightness-50"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90"></div>
                      <div className="absolute inset-0">
                        <div className="m-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow-lg">
                          {project.description}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 pb-1 text-white">
                        {project.client.length < 12 ? (
                          <div className="text-sm font-medium mb-1 text-shadow-md">
                            {project.client}
                          </div>
                        ) : (
                          <div className="text-xs font-medium mb-1 text-shadow-md">
                            {project.client}
                          </div>
                        )}
                        {project.title.length < 10 ? (
                          <h3 className="text-lg font-bold mb-1 text-shadow-md">
                            {project.title}
                          </h3>
                        ) : (
                          <h3 className="text-sm font-bold mb-1 text-shadow-md">
                            {project.title}
                          </h3>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row - Right to Left, starting from middle */}
              <div className="relative overflow-hidden">
                <div
                  className="flex flex-row-reverse w-[200%] gap-6 slide-right"
                  key={`bottom-${activeCategory}`}
                >
                  {getDuplicatedProjects(true).map((project, index) => (
                    <div
                      key={`top-${project.id}-${index}`}
                      className="flex-none w-48 md:w-60 group relative overflow-hidden rounded-lg shadow-md"
                    >
                      <div className="aspect-w-16 aspect-h-9 h-48">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition duration-300 filter group-hover:brightness-50"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90"></div>
                      <div className="absolute inset-0">
                        <div className="m-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow-lg">
                          {project.description}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 pb-1 text-white">
                        {project.client.length < 12 ? (
                          <div className="text-sm font-medium mb-1 text-shadow-md">
                            {project.client}
                          </div>
                        ) : (
                          <div className="text-xs font-medium mb-1 text-shadow-md">
                            {project.client}
                          </div>
                        )}
                        {project.title.length < 10 ? (
                          <h3 className="text-lg font-bold mb-1 text-shadow-md">
                            {project.title}
                          </h3>
                        ) : (
                          <h3 className="text-sm font-bold mb-1 text-shadow-md">
                            {project.title}
                          </h3>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // Single row display for categories with fewer projects
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredProjects().map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group relative overflow-hidden rounded-lg shadow-md"
                >
                  <div className="aspect-w-16 aspect-h-9 h-48">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-xs font-medium text-greige-light mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
