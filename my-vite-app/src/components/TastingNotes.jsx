import React from 'react';
// import { motion } from 'framer-motion';

const TastingNotes = () => {
  const tastingDetails = [
    {
      title: 'Apparence',
      description: 'Cristalline avec des reflets dorés subtils'
    },
    {
      title: 'Arômes',
      description: 'Fruits blancs, fleurs blanches, notes minérales'
    },
    {
      title: 'Palais',
      description: 'Élégant, complexe, longue finale persistante'
    },
    {
      title: 'Température',
      description: '10-15°C pour une dégustation optimale'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gold-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-noto">
            Notes de Dégustation
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-gold-400/30 to-gold-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gold-200">
                <img
                  src="/images/top_jungin_nomikurabe.jpeg"
                  alt="Dégustation de Sake"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Tasting Details */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 font-noto">
              Gokusei Tenka Shisei
            </h3>
            
            <div className="grid gap-6">
              {tastingDetails.map((detail, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gold-200/50">
                  <h4 className="text-xl font-bold text-gold-800 mb-3">
                    {detail.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-gold-100 to-gold-200 rounded-2xl p-6 border border-gold-300">
              <h4 className="text-lg font-bold text-gold-800 mb-3">
                Conseils de Dégustation
              </h4>
              <p className="text-gray-700">
                Pour une expérience optimale, servez dans un verre à vin blanc et laissez le sake s'épanouir quelques minutes avant de déguster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastingNotes; 