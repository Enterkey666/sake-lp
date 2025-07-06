import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Gold Particles Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gold-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gold-500 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-gold-400 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/top_kinsho04.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-noto">
            Brasserie Miyashita
          </h1>
          <p className="text-xl md:text-2xl text-gold-300 mb-8 font-cormorant">
            Artisan Sake Premium
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre nouveau Junmai Daiginjo d'exception, où tradition japonaise rencontre sophistication française.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary text-lg px-8 py-4">
              Découvrir
            </a>
            <a href="#about" className="btn-secondary text-lg px-8 py-4">
              En Savoir Plus
            </a>
          </div>
        </div>
      </div>

      {/* Floating Bottle */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <img
          src="/images/P00061-100x150.jpeg"
          alt="Sake Bottle"
          className="w-32 h-auto animate-float drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection; 