import React from 'react';
// import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            Product Concept
          </h2>
          <div className="w-24 h-1 bg-sake-gold mx-auto mb-4" />
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            宮下酒造の純米大吟醸は、伝統と革新が融合した逸品。厳選された山田錦と名水、五代にわたる杜氏の技が生み出す、究極のバランスと香り高さをお楽しみください。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* テキストとグラフ */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
              The Essence of Tradition
            </h3>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>・山田錦を40%まで精米</li>
              <li>・名水仕込み</li>
              <li>・150年の歴史と革新</li>
              <li>・五代続く杜氏の技</li>
            </ul>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-sake-gold h-full rounded-full" style={{ width: '30%' }}></div>
                </div>
                <p className="mt-2 text-sm">甘み</p>
              </div>
              <div className="text-center">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-sake-gold h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="mt-2 text-sm">香り</p>
              </div>
              <div className="text-center">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-sake-gold h-full rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="mt-2 text-sm">酸味</p>
              </div>
              <div className="text-center">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-sake-gold h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="mt-2 text-sm">ボディ</p>
              </div>
            </div>
          </div>
          {/* 商品画像 */}
          <div className="relative flex justify-center">
            <img
              src="/assets/images/sake-bottle.png"
              alt="宮下酒造 純米大吟醸ボトル"
              className="w-64 h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -right-8 bg-sake-gold text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-bold">推奨温度</p>
              <p className="text-xs">10-15°C（冷やして）</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 