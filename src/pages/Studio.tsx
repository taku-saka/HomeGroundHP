import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mic } from "lucide-react";

const Studio: React.FC = () => {
  const studioFeatures = [
    {
      icon: Mic,
      title: "使用機材",
      description: "COMING SOON..",
    },
    {
      icon: Clock,
      title: "24時間利用可能",
      description: "深夜の制作にも対応、柔軟な時間帯での利用が可能",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] bg-moss-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-moss-dark/90 to-moss-dark/70">
          <img
            src="/studio/studio-hero.jpg"
            alt="Studio"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              STUDIO
            </h1>
            <p className="text-xl text-greige-light max-w-2xl mx-auto px-4">
              プロフェッショナルな音楽制作環境を提供する、最新設備を備えたレコーディングスタジオ
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-moss-dark mb-6">
                充実した設備と快適な空間
                <br />
                <p className="text-3xl font-bold">【ソラノウエラボ】</p>
              </h2>
              <p className="text-gray-600 mb-8">
                プロフェッショナルなサウンドを実現する最新鋭の機材と、本格的なスタジオでは味わえないクリエイティブな発想を引き出す快適な空間をご用意しております。
                <br />
                <br />
                昼は富士山、夜は新宿の夜景を見渡せます。数多くのメジャーアーティスト、TOP
                YOUTUBERの方々にもご利用いただいております。
              </p>
              <div className="grid gap-6">
                {studioFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-moss p-3 rounded-full text-white">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-moss-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/img/studio-1.jpg"
                alt="Studio Interior"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/studio-2.jpg"
                alt="Recording Equipment"
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div> */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-moss-dark text-center mb-12">
              ソラノウエラボ<span className="text-2xl"> 情報</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-moss p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-moss-dark mb-2">
                    所在地
                  </h3>
                  <p className="text-gray-600">
                    〒160-0023
                    <br />
                    東京都新宿区 西新宿6-20-7
                    <br />
                    コンシェリア西新宿タワーズウエスト 19階
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-moss p-3 rounded-full text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-moss-dark mb-2">
                    営業時間
                  </h3>
                  <p className="text-gray-600">
                    24時間営業
                    <br />
                    予約制
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-moss p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-moss-dark mb-2">
                    お問い合わせ
                  </h3>
                  <p className="text-gray-600">
                    Email: mail@home-g.net
                    <br />
                    公式LINE:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
