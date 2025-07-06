import React from 'react';

const ProductConcept = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-noto">
              Junmai Daiginjo "Gokusei Tenka Shisei"
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre nouveau sake premium, élaboré avec des techniques traditionnelles japonaises et une attention particulière à la qualité. Un spiritueux d'exception qui incarne l'harmonie entre tradition et innovation.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-star text-gold-600 text-xl"></i>
                </div>
                <span className="font-semibold text-gray-800">Qualité Premium</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-leaf text-gold-600 text-xl"></i>
                </div>
                <span className="font-semibold text-gray-800">Ingrédients Naturels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-award text-gold-600 text-xl"></i>
                </div>
                <span className="font-semibold text-gray-800">Récompensé</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-gold-400/30 to-gold-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gold-200">
                <img
                  src="/images/top_kinujo.jpeg"
                  alt="Junmai Daiginjo Premium"
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

export default ProductConcept; 