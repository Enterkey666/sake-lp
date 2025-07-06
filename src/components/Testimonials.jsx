import React from 'react';
// import { motion } from 'framer-motion';

const testimonials = [
  {
    name: '山本 隆',
    title: '日本酒ソムリエ',
    subtitle: 'Sake Sommelier',
    image: '/assets/images/testimonial1.jpg',
    rating: 5,
    comment: '数多くのプレミアム酒を味わってきましたが、宮下酒造の純米大吟醸はバランスと奥深さが際立っています。まさに傑作。',
    country: '🇯🇵 Japan',
    verified: true
  },
  {
    name: 'Emma Richardson',
    title: 'Food & Beverage Critic',
    subtitle: 'International Food Critic',
    image: '/assets/images/testimonial2.jpg',
    rating: 4.5,
    comment: '国際的な食のコラムでも紹介しました。多様な料理と合わせやすく、複雑な香味が魅力です。',
    country: '🇫🇷 France',
    verified: true
  },
  {
    name: '中村 宏',
    title: '三つ星レストラン料理長',
    subtitle: '3-Star Restaurant Chef',
    image: '/assets/images/testimonial3.jpg',
    rating: 5,
    comment: 'おまかせコースのペアリングに欠かせない逸品。純粋さとエレガンスが料理を引き立てます。',
    country: '🇯🇵 Japan',
    verified: true
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="container mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">⭐</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            Ce que disent les Connaisseurs
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full shadow-lg" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            世界中のソムリエ、料理人、美食家から寄せられる高い評価。宮下酒造の純米大吟醸が認められる理由をお聞きください。
          </p>
        </div>

        {/* テスティモニアルグリッド */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* 背景の光効果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-amber-200/30 hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* プロフィール画像 */}
                <div className="flex justify-center -mt-16 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                        loading="lazy" 
                      />
                    </div>
                    {/* 認証バッジ */}
                    {testimonial.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-2 rounded-full shadow-lg border-2 border-white">
                        <span className="text-sm">✓</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 評価 */}
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: Math.floor(testimonial.rating) }).map((_, idx) => (
                      <span key={idx} className="text-2xl text-amber-400">⭐</span>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <span className="text-2xl text-amber-400">⭐</span>
                    )}
                  </div>
                </div>

                {/* コメント */}
                <div className="text-center mb-6">
                  <div className="relative">
                    <span className="text-4xl text-amber-300 absolute -top-2 -left-2">"</span>
                    <p className="text-gray-700 italic leading-relaxed px-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {testimonial.comment}
                    </p>
                    <span className="text-4xl text-amber-300 absolute -bottom-2 -right-2">"</span>
                  </div>
                </div>

                {/* プロフィール情報 */}
                <div className="text-center">
                  <h4 className="font-bold text-lg text-gray-800 mb-1" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-medium text-amber-600 mb-1">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    {testimonial.subtitle}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg">{testimonial.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/30">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '98%', label: '顧客満足度', icon: '😊' },
              { number: '4.9', label: '平均評価', icon: '⭐' },
              { number: '50+', label: '受賞歴', icon: '🏆' },
              { number: '150', label: '年の歴史', icon: '📜' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </span>
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;