import React from 'react';
// import { motion } from 'framer-motion';

const LimitedOffer = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/assets/images/sakura-bg.jpg')` }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            Spring Limited Edition
          </h2>
          <div className="w-24 h-1 bg-sake-gold mx-auto mb-6" />
          <p className="max-w-3xl mx-auto">
            桜の季節限定、華やかな香りと淡いピンク色の特別な純米大吟醸。1000本限定、特別価格でご提供。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
              桜花 - Sakura Edition
            </h3>
            <p className="mb-6 leading-relaxed">
              桜の花びらをイメージした、春だけの限定酒。華やかな香りとやさしい甘みが特徴です。
            </p>
            <p className="mb-6 leading-relaxed">
              毎年1000本限定、一本ずつシリアルナンバー入り木箱でお届け。
            </p>
            <div className="flex items-center mb-8">
              <div className="text-sake-gold mr-3">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider">Limited Time Offer</p>
                <p className="font-bold text-xl">残り14日</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="text-sake-gold mr-3">
                <i className="fas fa-wine-bottle text-xl"></i>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider">Limited Quantity</p>
                <p className="font-bold text-xl">残り368本</p>
              </div>
            </div>
            <button className="bg-sake-gold text-white px-8 py-3 rounded-full font-bold hover:bg-[#C4A876] transition-all duration-300">
              限定ボトルを予約
            </button>
          </div>
          <div className="relative flex justify-center">
            <img
              src="/assets/images/sakura-bottle.png"
              alt="桜花限定 純米大吟醸ボトル"
              className="w-64 h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute -top-8 -left-8 bg-[#A22041] text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-bold">特別価格</p>
              <p className="text-2xl font-bold">¥12,800</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer; 