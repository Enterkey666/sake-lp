import React from 'react';
// import { motion } from 'framer-motion';

const TastingNotes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            Tasting Notes
          </h2>
          <div className="w-24 h-1 bg-sake-gold mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-sake-gold text-4xl mb-4">
              <i className="fas fa-eye"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">外観</h3>
            <p className="text-gray-700">
              透明感のある淡いゴールド。澄み切った美しさが特徴。
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-sake-gold text-4xl mb-4">
              <i className="fas fa-nose"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">香り</h3>
            <p className="text-gray-700">
              洋梨や白桃、ジャスミンの華やかな香りと、ほのかな米の甘み。
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="text-sake-gold text-4xl mb-4">
              <i className="fas fa-utensils"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">味わい</h3>
            <p className="text-gray-700">
              シルキーな口当たりと、果実味・酸味のバランス。余韻はクリーンで長い。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastingNotes; 