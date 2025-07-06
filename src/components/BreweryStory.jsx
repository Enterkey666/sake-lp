import React from 'react';
// import { motion } from 'framer-motion';

const BreweryStory = () => {
  const processSteps = [
    {
      step: '01',
      title: '精米',
      subtitle: 'Rice Polishing',
      description: '山田錦を40%まで丁寧に精米。雑味のないクリアな味わいの基礎を作ります。',
      details: ['精米歩合: 40%', '時間: 72時間', '温度管理: 15°C'],
      icon: '🌾',
      image: '/assets/images/process-polish.jpg'
    },
    {
      step: '02',
      title: '麹造り',
      subtitle: 'Koji Making',
      description: '杜氏が温度・湿度を徹底管理し、杉の麹室で麹菌を育てます。',
      details: ['温度: 30-35°C', '湿度: 80-85%', '期間: 48時間'],
      icon: '🍄',
      image: '/assets/images/process-koji.jpg'
    },
    {
      step: '03',
      title: '発酵',
      subtitle: 'Fermentation',
      description: '低温でじっくり30日以上発酵。複雑な香味と奥深い旨みが生まれます。',
      details: ['温度: 10-15°C', '期間: 30-35日', '酵母: 協会7号'],
      icon: '🫧',
      image: '/assets/images/process-ferment.jpg'
    },
    {
      step: '04',
      title: '上槽・瓶詰',
      subtitle: 'Pressing & Bottling',
      description: 'やさしく搾り、澄んだ酒を瓶詰。美しい透明感と香りをそのまま閉じ込めます。',
      details: ['圧力: 低圧搾り', '濾過: 無濾過', '殺菌: 低温殺菌'],
      icon: '🍾',
      image: '/assets/images/process-bottle.jpg'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-black to-amber-900 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full mb-6 shadow-lg border border-amber-400/30">
            <span className="text-3xl">🏺</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            L'Art de la Brasserie
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full shadow-lg" />
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            宮下酒造の醸造は、伝統と最新技術の融合。五代にわたる杜氏の技と、厳選素材が生み出す唯一無二の味わい。
          </p>
        </div>

        {/* タイムライン風の工程紹介 */}
        <div className="relative">
          {/* 中央のライン */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hidden md:block shadow-lg" />
          
          <div className="space-y-32 relative">
            {processSteps.map((step, index) => (
              <div key={index} className={`md:flex items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* テキストコンテンツ */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-amber-400/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    {/* ステップ番号とアイコン */}
                    <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg border border-amber-400/30">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <div className="text-6xl font-bold text-amber-400/30" style={{ fontFamily: 'Didot, serif' }}>
                        {step.step}
                      </div>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-3xl font-bold mb-2 text-amber-100" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-amber-300 font-medium mb-4 uppercase tracking-wider">
                      {step.subtitle}
                    </p>

                    {/* 説明 */}
                    <p className="text-amber-50 mb-6 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {step.description}
                    </p>

                    {/* 詳細リスト */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3 p-3 bg-amber-400/10 rounded-xl border border-amber-400/20">
                          <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                          <span className="text-sm font-medium text-amber-100">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 画像 */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} relative flex justify-center`}>
                  <div className="relative group">
                    {/* 光の効果 */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 to-amber-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-amber-400/20 shadow-xl">
                      <img
                        src={step.image}
                        alt={`${step.title}工程`}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* オーバーレイ */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                      
                      {/* ステップバッジ */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-amber-400/30">
                        {step.step}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 追加情報セクション */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-amber-400/20 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-amber-100" style={{ fontFamily: 'Noto Serif JP, serif' }}>
              150年の伝統と革新
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '150', label: '年の歴史', icon: '📜' },
                { number: '5', label: '代の杜氏', icon: '👨‍🍳' },
                { number: '99.9%', label: 'の精米歩合', icon: '✨' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full mb-4 shadow-lg border border-amber-400/30">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-4xl font-bold text-amber-300 mb-2">{stat.number}</div>
                  <div className="text-amber-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreweryStory; 