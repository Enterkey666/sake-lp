import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

function getTimeLeft(deadline) {
  const now = new Date();
  const diff = deadline - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, finished: false };
}

const deadline = new Date('2024-12-31T23:59:59');

const LimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadline));
  const [bottlesLeft, setBottlesLeft] = useState(368);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-pink-900 via-red-900 to-amber-900 text-white relative overflow-hidden">
      {/* 動的な背景パターン */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.3)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(236,72,153,0.1)_25%,rgba(236,72,153,0.1)_50%,transparent_50%,transparent_75%,rgba(212,175,55,0.1)_75%)] bg-[length:30px_30px]" />
      </div>

      {/* 背景画像 */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/assets/images/sakura-bg.jpg')` }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400/20 to-amber-400/20 rounded-full mb-6 shadow-lg border border-pink-400/30">
            <span className="text-3xl">🌸</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-amber-300 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            Édition Limitée de Printemps
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-amber-400 mx-auto mb-6 rounded-full shadow-lg" />
          <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            桜の季節限定、華やかな香りと淡いピンク色の特別な純米大吟醸。1000本限定、特別価格でご提供。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-pink-400/20 shadow-xl">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-amber-300 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                桜花 - Sakura Edition
              </h3>
              <p className="mb-6 leading-relaxed text-pink-50" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                桜の花びらをイメージした、春だけの限定酒。華やかな香りとやさしい甘みが特徴です。
              </p>
              <p className="mb-6 leading-relaxed text-pink-50" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                毎年1000本限定、一本ずつシリアルナンバー入り木箱でお届け。
              </p>
            </div>

            {/* カウントダウン */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-pink-400/20 shadow-xl">
              <h4 className="text-xl font-bold mb-6 text-pink-100">⏰ Limited Time Offer</h4>
              {timeLeft.finished ? (
                <div className="text-2xl font-bold text-pink-300 mb-4">キャンペーンは終了しました</div>
              ) : (
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { value: timeLeft.days, label: 'Jours' },
                    { value: timeLeft.hours, label: 'Heures' },
                    { value: timeLeft.minutes, label: 'Minutes' },
                    { value: timeLeft.seconds, label: 'Secondes' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-4 rounded-2xl shadow-lg border border-pink-400/30 text-3xl font-extrabold">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs font-medium mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 残り本数 */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-pink-400/20 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-pink-100">🍾 Limited Quantity</h4>
                <span className="text-3xl font-bold text-pink-300">{bottlesLeft}</span>
              </div>
              <div className="w-full bg-pink-900/50 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-amber-500 h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
                  style={{ width: `${(bottlesLeft / 1000) * 100}%` }}
                />
              </div>
              <p className="text-sm text-pink-200 mt-2">残り {bottlesLeft} / 1000本</p>
            </div>

            {/* CTAボタン */}
            <button className="group relative w-full px-10 py-4 bg-gradient-to-r from-pink-500 to-amber-500 text-white rounded-2xl font-bold shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10 text-lg">🌸 限定ボトルを予約</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* 商品画像 */}
          <div className="relative">
            <div className="relative group">
              {/* 光の効果 */}
              <div className="absolute -inset-8 bg-gradient-to-r from-pink-400/30 to-amber-400/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/20 shadow-2xl">
                <img
                  src="/assets/images/sakura-bottle.png"
                  alt="桜花限定 純米大吟醸ボトル"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* 特別価格バッジ */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-600 to-red-600 text-white p-6 rounded-2xl shadow-xl border border-pink-400/30">
                  <div className="text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-sm font-bold mb-1">特別価格</p>
                    <p className="text-2xl font-bold">¥12,800</p>
                    <p className="text-xs opacity-90 line-through">¥18,000</p>
                  </div>
                </div>

                {/* 限定バッジ */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-600 to-amber-800 text-white p-4 rounded-full shadow-xl border border-amber-400/30">
                  <div className="text-center">
                    <div className="text-xl mb-1">⭐</div>
                    <p className="text-xs font-bold">限定</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 装飾的な要素 */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-amber-400/30 rounded-full animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffer; 