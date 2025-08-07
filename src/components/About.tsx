import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Music, Users, BarChart, Building } from "lucide-react";

const statsData = [
  { icon: Music, value: "1,000+", label: "提供曲" },
  { icon: Users, value: "100+", label: "提供アーティスト" },
  { icon: Building, value: "30+", label: "取引企業" },
  { icon: BarChart, value: "10+", label: "年の経験" },
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-dark mb-4">
            ABOUT
          </h2>
          <div className="w-20 h-1 bg-moss mx-auto mb-6"></div>
          <div className="text-gray-600 max-w-2xl mx-auto text-lg">
            私たちは、音楽をつくる人も届ける人も、
            <br />
            <p className="text-2xl md:text-3xl mx-1 mt-3 mb-[0.5px] font-bold text-moss-dark">
              "自分のままで居られる場所
              <br className="md:hidden block" /> = ホームグラウンド"
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="origin-left h-1  w-3/5 md:block md:w-full mx-auto bg-moss-light mb-4 rounded-xl"
            />
            を目指します。
            <br />
            <br />
            心を動かす表現を支え、育み、世界と繋げていく。
            <br />
            すべてのクリエイターとともに、新しい価値を奏で続けます。
          </div>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* <div className="mb-4 text-gray-200 max-w-4xl m-auto">
              <h3 className="text-xl font-san font-semibold mb-6 text-center text-white">
                MVV： Mission / Vision / Value
              </h3>
              <div className="text-sm font-light block md:grid md:grid-cols-[1fr_1fr_1.6fr] gap-2 mx-1">
                <div className="mt-2 mb-4 bg-moss-dark rounded-lg pt-6 pb-8 px-2">
                  <div className="text-2xl text-white text-center mb-6">
                    Mission
                    <p className="text-[1rem]">(存在意義)</p>
                  </div>
                  <p className="mx-4 text-left">
                    創る人の“居場所”をつくり、音楽の力で社会に光を届ける。
                    <p className="mt-0 md:mt-4">
                      私たちは、アーティストやクリエイターが自分らしく挑戦できる環境を整え、才能と可能性を音楽と共に発信します。
                    </p>
                  </p>
                </div>
                <div className="mt-2 mb-4 bg-moss-dark rounded-lg pt-6 pb-8 px-2">
                  <div className="text-2xl text-white text-center mb-6">
                    Vision
                    <p className="text-[1rem]">(目指す未来像)</p>
                  </div>
                  <p className="mx-4 text-left">
                    誰もが“ホームグラウンド”を持てる世界を。
                    <p className="mt-0 md:mt-4">
                      音楽を軸に、表現者が育ち、支え合い、次世代にバトンを渡していける。
                    </p>
                    <p className="mt-0 md:mt-4">
                      そんな文化と循環を創る、持続可能なプロダクションを実現します。
                    </p>
                  </p>
                </div>
                <div className="text-sm mt-2 mb-4 bg-moss-dark rounded-lg pt-6 pb-8 px-2">
                  <div className="text-2xl text-white text-center mb-6">
                    Value
                    <p className="text-[1rem]">(行動指針)</p>
                  </div>
                  <div className="mx-2 block md:grid md:grid-cols-2 gap-3">
                    <div className="md:mb-0 mb-2 md:block grid grid-cols-[1fr_4fr] bg-moss rounded-lg p-3">
                      <div className="text-center text-lg text-white mr-4 mb-1">
                        Realness
                      </div>
                      <div className="text-left">
                        本音で創る。真っ直ぐに届ける。
                        <br />
                        嘘のない表現を尊重し、ありのままの個性を大切にします。
                      </div>
                    </div>
                    <div className="md:mb-0 mb-2 md:block grid grid-cols-[1fr_4fr] bg-moss rounded-lg p-3">
                      <div className="text-center text-lg text-white mr-4 mb-1">
                        Nurture
                      </div>
                      <div className="text-left">
                        育て合う文化を大切に。
                        <br />
                        教える／教わるの関係に留まらず、仲間として共に成長します。
                      </div>
                    </div>
                    <div className="md:mb-0 mb-2 md:block grid grid-cols-[1fr_4fr] bg-moss rounded-lg p-3">
                      <div className="text-center text-lg text-white mr-4 mb-1">
                        Connect
                      </div>
                      <div className="text-left">
                        音楽で世界と繋がる。
                        <br />
                        デジタルとリアルを横断し、多様な価値観と感性を融合します。
                      </div>
                    </div>
                    <div className="mb-0 md:block grid grid-cols-[1fr_4fr] bg-moss rounded-lg p-3">
                      <div className="text-center text-lg text-white mr-4 mb-1">
                        Challenge
                      </div>
                      <div className="text-left">
                        「好き」を武器に、挑戦し続ける。
                        <br />
                        音楽に対する情熱を原動力に、常に新しい表現・仕組みを模索します。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <stat.icon className="mx-auto mb-3 text-moss" size={32} />
                <div className="text-3xl font-bold text-moss-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
