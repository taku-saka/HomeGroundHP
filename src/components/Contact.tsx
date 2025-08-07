import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-moss text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            CONTACT
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-greige-light">
            まずはお気軽にお問い合わせください。
            <br />
            ご入力いただいた個人情報は、プライバシーポリシーに基づいて管理いたします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-moss-dark p-8 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-serif font-semibold mb-8">
                お問い合わせフォーム
              </h3>
              {/*お問い合わせフォーム実装前の仮記載*/}
              {/* <div className="text-center text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                COMING SOON..
                <p className="mt-6 text-sm">
                  お問い合わせはメールよりお願いいたします。
                </p>
              </div> */}

              {/*お問い合わせフォーム*/}
              <form className="flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded bg-moss border border-moss-light focus:outline-none focus:ring-2 focus:ring-white text-white"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded bg-moss border border-moss-light focus:outline-none focus:ring-2 focus:ring-white text-white"
                      placeholder="user@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded bg-moss border border-moss-light focus:outline-none focus:ring-2 focus:ring-white text-white"
                    placeholder=""
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    お問い合わせ内容
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded bg-moss border border-moss-light focus:outline-none focus:ring-2 focus:ring-white text-white"
                    placeholder="お問い合わせ内容を入力してください"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-white text-moss-dark px-6 py-3 rounded-md font-medium hover:bg-greige transition-colors duration-300"
                  >
                    入力内容を確認する
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full text-moss">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">会社名</h4>
                  <p className="text-greige-light ml-1">
                    合同会社ホームグラウンド
                  </p>
                </div>
              </div> */}

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-moss">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1 ">所在地</h4>
                  <div className="text-[1.1rem] mt-7 py-1">首都圏事務所</div>
                  <p className="text-greige-light ml-1">
                    〒160-0023
                    <br />
                    東京都新宿区西新宿6−20−7
                    <br />
                    コンシェリア西新宿タワーズウエスト1902
                  </p>
                  <div className="text-[1.1rem] mt-7 py-1">福島事務所</div>

                  <p className="text-greige-light ml-1">
                    〒965-0033
                    <br /> 福島県会津若松市行仁町10-34
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-moss">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">メールアドレス</h4>
                  <p className="text-greige-light ml-1">mail@home-g.net</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
