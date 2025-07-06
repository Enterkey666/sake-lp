import React, { useState } from 'react';
// import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: '🍶', count: 12 },
    { id: 'premium', name: 'Premium', icon: '👑', count: 4 },
    { id: 'seasonal', name: 'Saisonnier', icon: '🌸', count: 3 },
    { id: 'gift', name: 'Cadeaux', icon: '🎁', count: 2 },
    { id: 'original', name: 'Original', icon: '⭐', count: 3 }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="container mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🍶</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            Notre Collection
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full shadow-lg" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            宮下酒造の純米大吟醸は、伝統と革新が融合した逸品。厳選された山田錦と名水、五代にわたる杜氏の技が生み出す、究極のバランスと香り高さをお楽しみください。
          </p>
        </div>

        {/* 高級感のあるカテゴリーバー */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-amber-200/50">
            <div className="flex flex-wrap justify-center gap-2 p-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-6 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-white/60 text-gray-700 hover:bg-amber-50 border border-amber-200/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <span className="font-medium">{category.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      activeCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                  {activeCategory === category.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-lg" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 商品グリッド */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* テキストとグラフ */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/30">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                L'Essence de la Tradition
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  '山田錦を40%まで精米',
                  '名水仕込み',
                  '150年の歴史と革新',
                  '五代続く杜氏の技'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 改善されたグラフ */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/30">
              <h4 className="text-xl font-bold mb-6 text-gray-800">Profil de Dégustation</h4>
              <div className="space-y-6">
                {[
                  { label: '甘み', value: 30, color: 'from-amber-400 to-amber-500' },
                  { label: '香り', value: 80, color: 'from-amber-500 to-amber-600' },
                  { label: '酸味', value: 60, color: 'from-amber-600 to-amber-700' },
                  { label: 'ボディ', value: 70, color: 'from-amber-700 to-amber-800' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-sm font-bold text-amber-600">{item.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-lg transition-all duration-1000 ease-out`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 商品画像 */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-200/50">
                <img
                  src="/assets/images/sake-bottle.png"
                  alt="宮下酒造 純米大吟醸ボトル"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* 推奨温度バッジ */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-2xl shadow-xl border border-amber-400/30">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌡️</div>
                    <p className="text-sm font-bold mb-1">推奨温度</p>
                    <p className="text-xs opacity-90">10-15°C（冷やして）</p>
                  </div>
                </div>

                {/* 品質バッジ */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white p-4 rounded-full shadow-xl border border-amber-500/30">
                  <div className="text-center">
                    <div className="text-xl mb-1">👑</div>
                    <p className="text-xs font-bold">Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 