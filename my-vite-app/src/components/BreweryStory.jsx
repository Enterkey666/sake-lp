import React from 'react';
// import { motion } from 'framer-motion';

const BreweryStory = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-noto">
            Notre Histoire
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-600"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 100 ans de tradition et d'innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 font-noto">
              Brasserie Miyashita
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Fondée en 1915, la Brasserie Miyashita perpétue l'art traditionnel du brassage du sake japonais tout en intégrant les innovations modernes. Notre engagement envers l'excellence nous a valu de nombreuses récompenses internationales.
              </p>
              <p>
                Chaque bouteille de notre sake premium est le fruit d'un savoir-faire transmis de génération en génération, combiné à une attention méticuleuse portée à chaque étape du processus de brassage.
              </p>
            </div>
            <a href="/about" className="btn-secondary inline-block">
              Découvrir Notre Histoire
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-gold-400/30 to-gold-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gold-200">
                <img
                  src="/images/top_doppokan-2.jpeg"
                  alt="Brasserie Miyashita"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreweryStory; 