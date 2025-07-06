import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Junmai Daiginjo "Gokusei"',
      description: 'Notre sake le plus prestigieux, élaboré avec un riz poli à 20%. Une expérience gustative exceptionnelle.',
      image: '/images/top_kinsho04.jpeg',
      specs: ['Alcool: 16%', 'Riz: Omachi', 'Polissage: 20%'],
      price: '€180',
      badge: 'Premium'
    },
    {
      id: 2,
      name: 'Junmai Daiginjo "Kinujo"',
      description: 'Un sake raffiné avec une douceur exceptionnelle et des arômes complexes de fruits mûrs.',
      image: '/images/top_kinujo.jpeg',
      specs: ['Alcool: 15%', 'Riz: Yamada Nishiki', 'Polissage: 35%'],
      price: '€120',
      badge: 'Premium'
    },
    {
      id: 3,
      name: 'Coffret Dégustation',
      description: 'Un coffret élégant contenant une sélection de nos meilleurs sakes, parfait pour découvrir notre gamme.',
      image: '/images/top_doppokan_open.jpeg',
      specs: ['3 bouteilles', 'Guide de dégustation', 'Emballage luxueux'],
      price: '€250',
      badge: 'Cadeau'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-noto">
            Nos Produits Premium
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-600"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une sélection de nos meilleurs produits, élaborés avec passion et expertise
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gold-200 card-hover">
              {/* Product Image */}
              <div className="relative mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                  product.badge === 'Premium' 
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white' 
                    : 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                }`}>
                  {product.badge}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 font-noto">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, index) => (
                    <span key={index} className="px-3 py-1 bg-gold-100 text-gold-800 text-sm rounded-full font-medium">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-3xl font-bold text-gold-600">
                    {product.price}
                  </span>
                  <button className="btn-primary">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 