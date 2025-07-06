import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion'; // Framer Motion導入時に有効化

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-black to-amber-900">
      {/* 動的な背景パターン */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_25%,rgba(212,175,55,0.05)_50%,transparent_50%,transparent_75%,rgba(212,175,55,0.05)_75%)] bg-[length:20px_20px]" />
      </div>

      {/* 背景画像（パララックス用） */}
      <div
        className={`absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 ${
          isLoaded ? 'scale-100 opacity-30' : 'scale-110 opacity-0'
        }`}
        style={{
          backgroundImage: `url('/assets/images/hero-bg.jpg')`,
        }}
        aria-hidden="true"
      />

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />

      {/* 装飾的な要素 */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-amber-600/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

      {/* メインコンテンツ */}
      <div className={`relative z-20 text-white text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* 装飾的なアイコン */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full border border-amber-400/30 backdrop-blur-sm">
            <span className="text-4xl">🍶</span>
          </div>
        </div>

        {/* メインタイトル */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
          <span className="inline-block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse" style={{ fontFamily: '"Kiwi Maru", serif' }}>
            純米大吟醸
          </span>
        </h1>

        {/* サブタイトル */}
        <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wider text-amber-100" style={{ fontFamily: 'Didot, serif' }}>
          L'ART DU JUNMAI DAIGINJO
        </h2>

        {/* 説明文 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-amber-400/20 shadow-2xl">
          <p className="text-xl md:text-2xl leading-relaxed text-amber-50" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            日本の伝統と現代の美が融合した、宮下酒造の新たな挑戦。<br />
            <span className="text-amber-200 font-medium">Experience the harmony of Japanese craftsmanship and modern elegance.</span>
          </p>
        </div>

        {/* ボタン群 */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-bold shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10">予約する</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group relative px-10 py-4 border-2 border-amber-400 text-amber-100 rounded-full font-bold hover:bg-amber-400/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
            <span className="relative z-10">詳しく見る</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* ボトル画像 */}
        <div className="relative flex justify-center">
          <div className="relative group">
            {/* 光の効果 */}
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img
              src="/assets/images/sake-bottle.png"
              alt="宮下酒造 純米大吟醸ボトル"
              className="relative w-48 md:w-64 drop-shadow-2xl transform group-hover:scale-110 transition-all duration-700 animate-float"
              loading="lazy"
            />

            {/* 品質バッジ */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white p-3 rounded-full shadow-xl border border-amber-400/30">
              <div className="text-center">
                <div className="text-lg">👑</div>
                <p className="text-xs font-bold">Premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 