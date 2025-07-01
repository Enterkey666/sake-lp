import React from 'react';
// import { motion } from 'framer-motion'; // Framer Motion導入時に有効化

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 背景画像（パララックス用） */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 will-change-transform"
        style={{
          backgroundImage: `url('/assets/images/hero-bg.jpg')`, // 酒蔵や和風背景画像を配置
        }}
        aria-hidden="true"
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
      {/* メインコンテンツ */}
      <div className="relative z-20 text-white text-center px-4 max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Noto Serif JP, serif' }}>
          <span className="inline-block text-sake-gold drop-shadow-lg" style={{ fontFamily: '"Kiwi Maru", serif' }}>
            純米大吟醸
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-wider" style={{ fontFamily: 'Didot, serif' }}>
          L'ART DU JUNMAI DAIGINJO
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          日本の伝統と現代の美が融合した、宮下酒造の新たな挑戦。<br />
          Experience the harmony of Japanese craftsmanship and modern elegance.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-sake-gold text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#C4A876] transition-all duration-300">
            予約する
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
            詳しく見る
          </button>
        </div>
        {/* ボトル画像 */}
        <div className="flex justify-center mt-8">
          <img
            src="/assets/images/sake-bottle.png"
            alt="宮下酒造 純米大吟醸ボトル"
            className="w-40 md:w-56 drop-shadow-xl animate-float"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 