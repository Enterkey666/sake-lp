import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'SAKE COMPETITION 2025',
      category: 'Médaille d\'Or - Catégorie Super Premium',
      description: 'Notre Junmai Daiginjo "Gokusei Tenka Shisei" a remporté la plus haute distinction dans la catégorie Super Premium.',
      image: '/images/sakecompetition2025_tks.jpeg',
      type: 'image'
    },
    {
      id: 2,
      title: 'Concours National des Sake',
      category: 'Prix d\'Excellence - 2 ans consécutifs',
      description: 'Reconnaissance continue de la qualité exceptionnelle de nos produits par les experts du secteur.',
      icon: '🏆',
      type: 'icon'
    },
    {
      id: 3,
      title: 'Concours International',
      category: 'Médaille d\'Or - Catégorie Premium',
      description: 'Excellence reconnue au niveau international, confirmant notre position de leader dans l\'industrie.',
      icon: '🏅',
      type: 'icon'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-noto">
            Récompenses et Reconnaissance
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div key={award.id} className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gold-200 card-hover">
              {/* Award Image or Icon */}
              <div className="mb-6">
                {award.type === 'image' ? (
                  <div className="relative">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-4xl">{award.icon}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Award Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 font-noto">
                  {award.title}
                </h3>
                <p className="text-gold-600 font-semibold">
                  {award.category}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 