import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mic } from "lucide-react";
import CollapsibleText from "../components/CollapsibleText";

const Studio: React.FC = () => {
  const studioFeatures = [
    {
      icon: Mic,
      title: "使用機材",
      description: `【Mic】
Sony C-100
RODE THE CLASSIC 2
Soundelux U99 Vintage※
Dpa 4006 stereo※
AEA R88A※

【Mic pre】

Langevin Dual Mic Pre with EQ
Avalon Design V5 SILVER

【Comp】
AMEK 9098CL
focusrite isa131

【EQ】
Manley MASSIVE PASSIVE STEREO EQ Mastering ver.(Only Mastering)

【Monitor】
Genelec 1031a

【DAW】
Protools 2021.6
STUDIO ONE
UA Apollo
PrismSound

※要予約機材`,
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
              プロフェッショナルな音楽制作環境を提供する、最新設備を備えた
              <br />
              レコーディングスタジオ
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-moss-dark text-center mb-6">
                充実した設備と快適な空間
                <br />
                <p className="text-3xl font-bold">【ソラノウエラボ】</p>
              </h2>
              <p className="text-gray-600 text-center mb-8">
                プロフェッショナルなサウンドを実現する最新鋭の機材と、
                <br className="block md:hidden" />
                本格的なスタジオでは味わえない
                <br />
                クリエイティブな発想を引き出す快適な空間をご用意しております。
                <br />
                <br />
                昼は富士山、夕日、夜は新宿の夜景を見渡せます。
                <br />
                数多くのメジャーアーティスト、インフルエンサーの方々にも
                <br />
                ご利用いただいております。ぜひお気軽にご連絡ください。
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
                      <CollapsibleText
                        title="詳細を見る"
                        text={feature.description}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 mt-12">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 left-16 xs:left-28 md:left-20 z-30"
              >
                <img
                  src="/studio/studio_bluesky.jpg"
                  alt=""
                  className="w-32 sm:w-56 md:w-72 rounded-md shadow-lg rotate-[-4deg]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-10 right-10 xs:right-16 md:right-10 z-30"
              >
                <img
                  src="/studio/studio_twilight.jpg"
                  alt=""
                  className="w-32 sm:w-48 md:w-64 rounded-md shadow-lg rotate-[2deg]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-5 left-20 xs:left-36 md:left-32 z-30"
              >
                <img
                  src="/studio/studio_cloudy.jpg"
                  alt=""
                  className="w-36 sm:w-44 md:w-60 rounded-md shadow-lg rotate-[5deg]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-0 right-16 xs:right-24 z-30"
              >
                <img
                  src="/studio/studio_night.jpg"
                  alt=""
                  className="w-36 sm:w-48 md:w-64 rounded-md shadow-lg rotate-[-10deg]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-moss-dark text-center mb-12">
              ソラノウエラボ<span className="text-2xl"> 情報</span>
            </h2>
            <div className="block sm:flex">
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
              <div className="pt-6 sm:pt-0 px-8">
                <iframe
                  className="border-0 w-full h-full rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3695782736827!2d139.68484217457197!3d35.69252192935565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2d5be4e1a4d%3A0x6c6bb63701e66f32!2z44Kz44Oz44K344Kn44Oq44Ki6KW_5paw5a6_44K_44Ov44O844K644O744Km44Ko44K544OI!5e0!3m2!1sja!2sjp!4v1758090403914!5m2!1sja!2sjp"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
