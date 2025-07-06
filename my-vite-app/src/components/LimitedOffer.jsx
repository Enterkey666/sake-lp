import React, { useState, useEffect } from 'react';

const LimitedOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gold-900 via-gold-800 to-gold-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.3)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="glass-effect rounded-3xl p-8">
              <h2 className="text-4xl font-bold mb-4 gold-text">
                Offre Limitée
              </h2>
              <h3 className="text-2xl font-bold mb-4 text-gold-200">
                Édition Spéciale "Gokusei"
              </h3>
              <p className="text-gold-100 leading-relaxed">
                Profitez de notre édition limitée avec un coffret cadeau exclusif et une dégustation virtuelle avec notre maître brasseur.
              </p>
            </div>

            {/* Countdown */}
            <div className="glass-effect rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-6 text-gold-200">⏰ Limited Time Offer</h4>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: 'Jours' },
                  { value: timeLeft.hours, label: 'Heures' },
                  { value: timeLeft.minutes, label: 'Minutes' },
                  { value: timeLeft.seconds, label: 'Secondes' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-gold-500 to-gold-600 text-white p-4 rounded-2xl shadow-lg border border-gold-400/30 text-3xl font-extrabold">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs font-medium mt-1 text-gold-200">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full btn-primary text-lg py-4">
              Réserver Maintenant
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-gold-400/30 to-gold-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative glass-effect rounded-3xl p-8">
                <img
                  src="/images/top_kinsho04.jpeg"
                  alt="Édition Limitée"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Special Price Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-gold-600 to-gold-800 text-white p-6 rounded-2xl shadow-xl border border-gold-400/30">
                  <div className="text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-sm font-bold mb-1">Prix Spécial</p>
                    <p className="text-2xl font-bold">€150</p>
                    <p className="text-xs opacity-90 line-through">€180</p>
                  </div>
                </div>

                {/* Limited Badge */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-600 to-red-800 text-white p-4 rounded-full shadow-xl border border-red-400/30">
                  <div className="text-center">
                    <div className="text-xl mb-1">⭐</div>
                    <p className="text-xs font-bold">Limitée</p>
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

export default LimitedOffer; 