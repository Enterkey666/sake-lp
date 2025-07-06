import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Gokusei Tenka Shisei",
      category: "premium",
      image: "/images/top_kinsho04.jpeg",
      description: "Un Junmai Daiginjo exceptionnel élaboré avec du riz Omachi poli à 20%, une première mondiale. Lauréat de la Médaille d'Or au SAKE COMPETITION 2025, catégorie Super Premium.",
      specs: ["Polissage: 20%", "Alcool: 15-16%", "Volume: 720ml"],
      price: "180€",
      badge: "Premium"
    },
    {
      id: 2,
      name: "Gokusei Daiginjo",
      category: "premium",
      image: "/images/top_kinujo.jpeg",
      description: "Daiginjo lauréat du Prix d'Excellence au Concours National (2 ans consécutifs, 24ème fois). Élaboré avec du riz premium poli à 40%, arômes floraux et saveur raffinée.",
      specs: ["Polissage: 40%", "Alcool: 15-16%", "Volume: 720ml"],
      price: "110€",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Coffret Cadeau Été",
      category: "seasonal",
      image: "/images/top_ochugen2025.jpeg",
      description: "Coffret cadeau idéal pour l'été. Une sélection exclusive des produits de la Brasserie Miyashita.",
      specs: ["Contenu: Junmai Daiginjo×1, Junmai Ginjo×1", "Volume: 720ml chacun", "Boîte: Coffret paulownia luxueux"],
      price: "150€",
      badge: "Saisonnier"
    },
    {
      id: 4,
      name: "Gasso Saisonnier",
      category: "seasonal",
      image: "/images/top_gasso.jpeg",
      description: "Junmai spécial exprimant les changements de saison. Saveur riche et arôme raffiné caractéristiques.",
      specs: ["Polissage: 60%", "Alcool: 15-16%", "Volume: 720ml"],
      price: "45€",
      badge: "Saisonnier"
    },
    {
      id: 5,
      name: "Takashima IPA",
      category: "original",
      image: "/images/top_takashimaipa.jpeg",
      description: "IPA caractérisée par l'arôme et l'amertume du houblon. Chef-d'œuvre de la série bière artisanale Miyashita.",
      specs: ["Alcool: 6.5%", "Volume: 330ml", "Style: IPA"],
      price: "4€",
      badge: "Bière Artisanale"
    },
    {
      id: 6,
      name: "Golden Ale",
      category: "original",
      image: "/images/top_goldenale.jpeg",
      description: "Golden Ale où la douceur du malt et l'arôme du houblon s'harmonisent parfaitement. Saveur facile à apprécier.",
      specs: ["Alcool: 5.0%", "Volume: 330ml", "Style: Golden Ale"],
      price: "3.50€",
      badge: "Bière Artisanale"
    },
    {
      id: 7,
      name: "Shochu Okayama",
      category: "original",
      image: "/images/top_okadaishochu.jpeg",
      description: "Shochu développé en collaboration avec l'Université d'Okayama. Élaboré avec des ingrédients locaux selon une méthode unique.",
      specs: ["Alcool: 25%", "Volume: 720ml", "Ingrédient: Riz"],
      price: "25€",
      badge: "Shochu"
    },
    {
      id: 8,
      name: "Liqueur aux Fruits",
      category: "original",
      image: "/images/top_fruitliqueur.jpeg",
      description: "Liqueur aux fruits utilisant les fruits locaux. Saveur douce et facile à apprécier.",
      specs: ["Alcool: 15%", "Volume: 500ml", "Saveur: Fruits de saison"],
      price: "18€",
      badge: "Liqueur"
    },
    {
      id: 9,
      name: "Coffret Brasserie Miyashita",
      category: "gift",
      image: "/images/top_doppokan-2.jpeg",
      description: "Set de 2 bouteilles : Junmai Daiginjo et Junmai Ginjo. Livré dans un coffret en bois de paulownia luxueux.",
      specs: ["Contenu: Junmai Daiginjo×1, Junmai Ginjo×1", "Volume: 720ml chacun", "Boîte: Paulownia"],
      price: "150€",
      badge: "Cadeau"
    },
    {
      id: 10,
      name: "Coffret Saisonnier",
      category: "gift",
      image: "/images/top_doppokan_open.jpeg",
      description: "Set comprenant un sake saisonnier et des verres originaux. Parfait pour les occasions spéciales.",
      specs: ["Contenu: Sake saisonnier×1, Set de verres", "Volume: 720ml", "Verres: Céramique"],
      price: "110€",
      badge: "Cadeau"
    },
    {
      id: 11,
      name: "Domomo Junmai",
      category: "original",
      image: "/images/top_domomo.jpeg",
      description: "Produit phare de la Brasserie Miyashita. Junmai élaboré selon des méthodes traditionnelles, facile à apprécier.",
      specs: ["Polissage: 70%", "Alcool: 15-16%", "Volume: 720ml"],
      price: "25€",
      badge: "Original"
    },
    {
      id: 12,
      name: "Takumi Namazake",
      category: "original",
      image: "/images/top_takumi2.jpeg",
      description: "Sake non pasteurisé. Saveur fraîche et vivifiante caractéristique. À conserver au réfrigérateur.",
      specs: ["Polissage: 70%", "Alcool: 15-16%", "Volume: 720ml"],
      price: "30€",
      badge: "Original"
    }
  ];

  const categories = [
    { id: 'all', name: '🍶 Tous', icon: '🍶' },
    { id: 'premium', name: '👑 Premium', icon: '👑' },
    { id: 'seasonal', name: '🌸 Saisonnier', icon: '🌸' },
    { id: 'gift', name: '🎁 Cadeaux', icon: '🎁' },
    { id: 'original', name: '⭐ Original', icon: '⭐' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Premium': return 'bg-amber-600';
      case 'Saisonnier': return 'bg-pink-500';
      case 'Cadeau': return 'bg-purple-600';
      case 'Bière Artisanale': return 'bg-orange-600';
      case 'Shochu': return 'bg-blue-600';
      case 'Liqueur': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Products Hero */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/top_kinsho04.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">Nos Produits</h1>
              <p className="text-xl md:text-2xl mb-2">Our Products</p>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Découvrez notre gamme de spiritueux japonais où tradition et innovation se rencontrent.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getBadgeColor(product.badge)}`}>
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-3">{product.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                    <div className="space-y-1 mb-4">
                      {product.specs.map((spec, index) => (
                        <span key={index} className="inline-block bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded mr-2 mb-2">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                      <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300">
                        Découvrir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Caractéristiques de Nos Produits</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3 className="text-xl font-serif mb-4">Ingrédients Rigoureusement Sélectionnés</h3>
                <p className="text-gray-700">Riz Yamada Nishiki de la plus haute qualité et eau souterraine pure. Tous les ingrédients respectent des critères de qualité stricts.</p>
              </div>
              
              <div className="text-center">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-hands"></i>
                </div>
                <h3 className="text-xl font-serif mb-4">Savoir-Faire Artisanal</h3>
                <p className="text-gray-700">Élaboré goutte par goutte par des artisans transmettant plus de 100 ans de tradition.</p>
              </div>
              
              <div className="text-center">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-temperature-low"></i>
                </div>
                <h3 className="text-xl font-serif mb-4">Brassage à Basse Température</h3>
                <p className="text-gray-700">Brassage lent à basse température pour réaliser une saveur raffinée et délicate.</p>
              </div>
              
              <div className="text-center">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="text-xl font-serif mb-4">Bienfaits de la Nature</h3>
                <p className="text-gray-700">Spiritueux authentiques élaborés uniquement avec riz, eau et koji, sans aucun additif.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Informations de Commande</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4">Livraison</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Livraison disponible dans toute la France</li>
                  <li>• Frais de livraison variables selon la région (détails sur demande)</li>
                  <li>• Livraison réfrigérée</li>
                  <li>• Livraison à date et heure souhaitées possible</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4">Moyens de Paiement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Carte bancaire (VISA, MasterCard, JCB, AMEX)</li>
                  <li>• Virement bancaire</li>
                  <li>• Paiement à la livraison</li>
                  <li>• Paiement en magasin</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4">Retours et Échanges</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Retours et échanges acceptés sous 7 jours après réception, produits non ouverts et non utilisés uniquement</li>
                  <li>• En cas de problème de qualité, n'hésitez pas à nous contacter</li>
                  <li>• Frais de retour à la charge du client</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">Pour plus d'informations sur nos produits, n'hésitez pas à nous contacter.</p>
              <Link to="/contact" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300">
                Nous Contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage; 