import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* About Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/top_kinsho04.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">Notre Histoire</h1>
              <p className="text-xl md:text-2xl mb-2">Our Story</p>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Plus de 100 ans de tradition et d'innovation dans l'art du brassage du sake japonais.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Brasserie Miyashita</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Où tradition et innovation se rencontrent</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif mb-4">Notre Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La Brasserie Miyashita s'engage à préserver et transmettre l'art traditionnel du brassage du sake japonais tout en intégrant les innovations modernes. Notre mission est de créer des spiritueux d'exception qui incarnent l'harmonie entre tradition et modernité.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4">Notre Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous aspirons à être reconnus comme l'un des brasseurs de sake les plus respectés au monde, en préservant notre héritage culturel tout en contribuant à l'évolution de l'industrie du sake japonais.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4">Nos Valeurs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Tradition :</strong> Respect et préservation des méthodes ancestrales</li>
                    <li><strong>Innovation :</strong> Intégration des technologies modernes pour améliorer la qualité</li>
                    <li><strong>Qualité :</strong> Engagement envers l'excellence dans chaque étape du processus</li>
                    <li><strong>Durabilité :</strong> Responsabilité environnementale et sociale</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <img 
                  src="/images/top_kinujo.jpeg" 
                  alt="Brasserie Miyashita" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Informations de l'Entreprise</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Nom de l'Entreprise</h3>
                <p className="text-gray-700">Brasserie Miyashita</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                <p className="text-gray-700">184 Nishikawara, Naka-ku, Okayama 703-8258, Japon</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                <p className="text-gray-700">+81 86-272-5594</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Fax</h3>
                <p className="text-gray-700">+81 86-272-5595</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Date de Fondation</h3>
                <p className="text-gray-700">1915 (Taisho 4)</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Capital</h3>
                <p className="text-gray-700">10 millions de yens</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Représentant</h3>
                <p className="text-gray-700">M. Miyashita</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Nombre d'Employés</h3>
                <p className="text-gray-700">15 personnes</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg md:col-span-2 lg:col-span-3">
                <h3 className="text-lg font-semibold mb-2">Activité Principale</h3>
                <p className="text-gray-700">Fabrication et vente de sake japonais, shochu, bières artisanales, liqueurs et autres spiritueux</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg md:col-span-2 lg:col-span-3">
                <h3 className="text-lg font-semibold mb-2">Équipements Principaux</h3>
                <p className="text-gray-700">Équipements de brassage de sake, équipements de brassage de bière, équipements de distillation de shochu, équipements de fabrication de liqueurs</p>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Notre Histoire</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold">1915</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2">Fondation</h3>
                  <p className="text-gray-700">Fondation de la Brasserie Miyashita dans la ville d'Okayama. Début de l'élaboration traditionnelle de sake japonais.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold">1950</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2">Expansion</h3>
                  <p className="text-gray-700">Expansion des installations et début de la production à plus grande échelle. Introduction de nouvelles variétés de sake.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold">1980</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2">Innovation</h3>
                  <p className="text-gray-700">Introduction de technologies modernes dans le processus de brassage tout en préservant les méthodes traditionnelles.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold">2000</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2">Diversification</h3>
                  <p className="text-gray-700">Début de la production de bières artisanales et d'autres spiritueux. Expansion de la gamme de produits.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold">2010</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2">Reconnaissance</h3>
                  <p className="text-gray-700">Obtention de multiples récompenses nationales et internationales pour la qualité exceptionnelle de nos produits.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold">2020</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2">Innovation Technologique</h3>
                  <p className="text-gray-700">Introduction de nouvelles méthodes de brassage et développement de produits innovants tout en préservant la tradition.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="bg-amber-600 text-white text-center py-2 px-4 rounded-lg font-semibold">2025</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif mb-2">Excellence</h3>
                  <p className="text-gray-700">Lauréat de la Médaille d'Or au SAKE COMPETITION 2025, catégorie Super Premium, confirmant notre position de leader dans l'industrie.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Nos Installations</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/images/top_doppokan_open.jpeg" 
                  alt="Atelier Sake Doppokan" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">Atelier Sake Doppokan</h3>
                  <p className="text-gray-700 mb-4">Restaurant où déguster les produits de la Brasserie Miyashita. Cuisine japonaise traditionnelle et créations modernes dans un cadre élégant.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Cuisine japonaise traditionnelle</li>
                    <li>• Menu omakase exclusif</li>
                    <li>• Dégustation de sake premium</li>
                    <li>• Réservations recommandées</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/images/top_doppokan-2.jpeg" 
                  alt="Boutique Bière Artisanale Doppu" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">Boutique Bière Artisanale Doppu</h3>
                  <p className="text-gray-700 mb-4">Boutique spécialisée dans les bières artisanales de Miyashita et autres spiritueux. Service à emporter et conseils personnalisés.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Bières artisanales Miyashita</li>
                    <li>• Spiritueux et liqueurs</li>
                    <li>• Service à emporter</li>
                    <li>• Conseils de dégustation</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/images/top_gasso.jpeg" 
                  alt="Brasserie Miyashita - Dégustation" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">Brasserie Miyashita - Dégustation</h3>
                  <p className="text-gray-700 mb-4">Établissement convivial pour déguster les différents produits de la Brasserie Miyashita à des prix abordables.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Dégustation de tous nos produits</li>
                    <li>• Prix abordables</li>
                    <li>• Ambiance conviviale</li>
                    <li>• Snacks traditionnels</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/images/top_jungin_nomikurabe.jpeg" 
                  alt="Espace Découverte" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-4">Espace Découverte</h3>
                  <p className="text-gray-700 mb-4">Installation interactive pour découvrir le processus de brassage. Apprenez l'histoire et les techniques de Miyashita.</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Visites guidées</li>
                    <li>• Démonstrations interactives</li>
                    <li>• Histoire de la brasserie</li>
                    <li>• Ateliers de dégustation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Récompenses et Reconnaissance</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/images/sakecompetition2025_tks.jpeg" 
                  alt="SAKE COMPETITION 2025" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">SAKE COMPETITION 2025</h3>
                  <p className="text-amber-600 font-semibold mb-3">Médaille d'Or - Catégorie Super Premium</p>
                  <p className="text-gray-700">Notre Junmai Daiginjo "Gokusei Tenka Shisei" a remporté la plus haute distinction dans la catégorie Super Premium, reconnaissant son excellence exceptionnelle.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className="text-xl font-serif mb-2">Concours National des Sake</h3>
                <p className="text-amber-600 font-semibold mb-3">Prix d'Excellence - 2 ans consécutifs (24ème fois)</p>
                <p className="text-gray-700">Reconnaissance continue de la qualité exceptionnelle de nos produits par les experts du secteur.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-serif mb-2">Concours National des Spiritueux</h3>
                <p className="text-amber-600 font-semibold mb-3">1ère Place - Bière Artisanale (13 ans consécutifs)</p>
                <p className="text-gray-700">Excellence reconnue dans la catégorie bière artisanale, démontrant notre expertise dans divers types de spiritueux.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-medal"></i>
                </div>
                <h3 className="text-xl font-serif mb-2">Prix de l'Innovation</h3>
                <p className="text-amber-600 font-semibold mb-3">Innovation dans le Brassage Traditionnel</p>
                <p className="text-gray-700">Reconnaissance de notre capacité à innover tout en préservant les méthodes traditionnelles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Notre Équipe de Direction</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/top_kinsho04.jpeg" 
                      alt="M. Miyashita - Président" 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-serif mb-2">M. Miyashita</h3>
                    <p className="text-amber-600 font-semibold mb-4">Président et Maître Brasseur</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Dirigeant la Brasserie Miyashita avec passion et expertise, M. Miyashita incarne la fusion parfaite entre tradition et innovation. Son engagement envers l'excellence et sa vision pour l'avenir du sake japonais ont fait de Miyashita une référence dans l'industrie.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Plus de 30 ans d'expérience</span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Maître Brasseur Certifié</span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Expert en Sake Japonais</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage; 