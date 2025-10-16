import React from "react";

const Banners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-moss-dark mb-4">
                OTHER SERVICES
            </h2>
            <div className="w-20 h-1 bg-moss mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <a
                href="https://gramm-sound.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <img
                src="/banner/banner1.png"
                alt="G/amm banner"
                className="w-full h-auto rounded-lg shadow hover:opacity-90 transition"
                />
            </a>

            <a
            href="https://beauty.hotpepper.jp/slnH000246217/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            >
            <img
                src="/banner/banner2.png"
                alt="EVE banner"
                className="w-full h-auto rounded-lg shadow hover:opacity-90 transition"
            />
            </a>

            <a
            href="https://www.instagram.com/homeprint2025?igsh=MW1kcGxybndpZHV2MA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            >
            <img
                src="/banner/banner3.png"
                alt="HOME PRINT banner"
                className="w-full h-auto rounded-lg shadow hover:opacity-90 transition"
            />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Banners;


