import React from 'react';
// import { motion } from 'framer-motion';

const TastingNotes = () => {
  const tastingNotes = [
    {
      icon: '👁️',
      title: '外観',
      subtitle: 'Appearance',
      description: '透明感のある淡いゴールド。澄み切った美しさが特徴。',
      details: ['透明度: 99%', '色調: 淡いゴールド', '粘性: 軽やか']
    },
    {
      icon: '🌸',
      title: '香り',
      subtitle: 'Aroma',
      description: '洋梨や白桃、ジャスミンの華やかな香りと、ほのかな米の甘み。',
      details: ['果実香: 洋梨・白桃', '花の香り: ジャスミン', '穀物香: 米の甘み']
    },
    {
      icon: '🍷',
      title: '味わい',
      subtitle: 'Taste',
      description: 'シルキーな口当たりと、果実味・酸味のバランス。余韻はクリーンで長い。',
      details: ['口当たり: シルキー', 'バランス: 果実味・酸味', '余韻: クリーン・長い']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🍷</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            Notes de Dégustation
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full shadow-lg" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            五感で楽しむ純米大吟醸の世界。外観、香り、味わいの調和が織りなす至高の体験をお届けします。
          </p>
        </div>

        {/* テイスティングノートグリッド */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tastingNotes.map((note, index) => (
            <div key={index} className="group relative">
              {/* 背景の光効果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-amber-200/30 hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* アイコン */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {note.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                    {note.title}
                  </h3>
                  <p className="text-sm text-amber-600 font-medium uppercase tracking-wider">
                    {note.subtitle}
                  </p>
                </div>

                {/* 説明 */}
                <p className="text-gray-700 text-center mb-6 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {note.description}
                </p>

                {/* 詳細リスト */}
                <div className="space-y-3">
                  {note.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-200/30">
                      <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加情報セクション */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                温度による味わいの変化
              </h3>
              <div className="space-y-4">
                {[
                  { temp: '5-10°C', desc: '冷やして - フルーティな香りと爽やかな味わい' },
                  { temp: '10-15°C', desc: '常温 - バランスの取れた香りと味わい' },
                  { temp: '15-20°C', desc: 'ぬる燗 - 深みのある香りと豊かな味わい' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl border border-amber-200/30">
                    <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-bold">
                      {item.temp}
                    </div>
                    <span className="text-gray-700 font-medium">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-full border border-amber-300/50">
                  <span className="text-6xl">🌡️</span>
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-700">
                推奨温度: <span className="text-amber-600 font-bold">10-15°C</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastingNotes; 