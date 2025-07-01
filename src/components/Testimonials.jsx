import React from 'react';
// import { motion } from 'framer-motion';

const testimonials = [
  {
    name: '山本 隆',
    title: '日本酒ソムリエ',
    image: '/assets/images/testimonial1.jpg',
    rating: 5,
    comment: '数多くのプレミアム酒を味わってきましたが、宮下酒造の純米大吟醸はバランスと奥深さが際立っています。まさに傑作。',
  },
  {
    name: 'Emma Richardson',
    title: 'Food & Beverage Critic',
    image: '/assets/images/testimonial2.jpg',
    rating: 4.5,
    comment: '国際的な食のコラムでも紹介しました。多様な料理と合わせやすく、複雑な香味が魅力です。',
  },
  {
    name: '中村 宏',
    title: '三つ星レストラン料理長',
    image: '/assets/images/testimonial3.jpg',
    rating: 5,
    comment: 'おまかせコースのペアリングに欠かせない逸品。純粋さとエレガンスが料理を引き立てます。',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            What Connoisseurs Say
          </h2>
          <div className="w-24 h-1 bg-sake-gold mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow relative text-center">
              <div className="flex justify-center -mt-12 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-sake-gold shadow-lg">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="text-sake-gold mb-4">
                {Array.from({ length: Math.floor(t.rating) }).map((_, idx) => (
                  <i key={idx} className="fas fa-star"></i>
                ))}
                {t.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.comment}"</p>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 