import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProcessPage = () => {
  const processSteps = [
    {
      number: 1,
      title: "Polissage",
      description: "L'écorce du riz brun est éliminée pour ne laisser que le cœur, appelé shinpaku. Le taux de polissage détermine la quantité éliminée, atteignant plus de 60% pour les Daiginjo.",
      image: "/images/top_kinsho04.jpeg"
    },
    {
      number: 2,
      title: "Lavage et Trempage",
      description: "Le riz poli est lavé et trempé dans l'eau pendant un temps approprié. La durée de trempage est ajustée selon le type de riz et le taux de polissage pour obtenir une teneur en eau idéale.",
      image: "/images/top_kinujo.jpeg"
    },
    {
      number: 3,
      title: "Cuisson à la Vapeur",
      description: "Le riz trempé est cuit à la vapeur. Le riz cuit est divisé en trois parties : pour le koji, pour le shubo, et pour le moromi, chacune ajustée à la dureté appropriée.",
      image: "/images/top_gasso.jpeg"
    },
    {
      number: 4,
      title: "Élaboration du Koji",
      description: "Le riz cuit à la vapeur est inoculé avec le champignon koji pour créer le koji. Le koji joue un rôle crucial en décomposant l'amidon du riz en sucre. Élaboré méticuleusement pendant environ 48 heures.",
      image: "/images/top_jungin_nomikurabe.jpeg"
    },
    {
      number: 5,
      title: "Élaboration du Shubo",
      description: "Le riz cuit, le koji, l'eau et la levure sont mélangés pour créer le shubo. Le shubo est la base pour l'élaboration du moromi, créé pendant environ 2 semaines.",
      image: "/images/top_doppokan_open.jpeg"
    },
    {
      number: 6,
      title: "Élaboration du Moromi",
      description: "Le riz cuit, le koji et l'eau sont ajoutés au shubo en trois étapes (san-dan-shikomi). Fermentation lente pendant environ 30 jours.",
      image: "/images/top_doppokan-2.jpeg"
    },
    {
      number: 7,
      title: "Pressurage et Filtration",
      description: "Le moromi est pressé pour séparer le sake et les lies. Ensuite, filtré avec du charbon actif pour obtenir un liquide clair.",
      image: "/images/top_takumi2.jpeg"
    },
    {
      number: 8,
      title: "Pasteurisation et Maturation",
      description: "Pasteurisation à 65°C pour arrêter l'activité de la levure. Ensuite, maturation en cuve pour affiner le goût.",
      image: "/images/top_domomo.jpeg"
    }
  ];

  const ingredients = [
    {
      icon: "fas fa-seedling",
      title: "Riz",
      description: "Utilisation principalement du riz Yamada Nishiki de la préfecture de Hyogo, riz de la plus haute qualité pour l'élaboration du sake. Le taux de polissage est ajusté de 40% à 70% selon le produit pour mettre en valeur les caractéristiques de chacun."
    },
    {
      icon: "fas fa-tint",
      title: "Eau",
      description: "Utilisation d'eau souterraine pure puisée à 100 mètres de profondeur. Eau douce avec un équilibre minéral parfait qui crée une saveur raffinée et délicate."
    },
    {
      icon: "fas fa-microscope",
      title: "Champignon Koji",
      description: "Utilisation du champignon koji traditionnel. Décompose l'amidon du riz en sucre, jouant un rôle crucial dans la saveur du sake japonais."
    },
    {
      icon: "fas fa-flask",
      title: "Levure",
      description: "Utilisation principalement de levure ginjo qui produit l'arôme ginjo, sélectionnée selon les caractéristiques de chaque produit."
    }
  ];

  const qualityControls = [
    {
      icon: "fas fa-clipboard-check",
      title: "Inspection des Ingrédients",
      description: "Critères de qualité stricts établis pour tous les ingrédients utilisés. Contrôle détaillé de la qualité du riz, analyse de la composition de l'eau, etc."
    },
    {
      icon: "fas fa-thermometer-half",
      title: "Contrôle de Température",
      description: "Contrôle de température approprié à chaque étape du processus de fabrication. Le contrôle de température pendant la fermentation est particulièrement crucial pour la qualité du sake."
    },
    {
      icon: "fas fa-eye",
      title: "Évaluation Sensorielle",
      description: "Évaluation sensorielle régulière par des experts. Contrôle détaillé de tous les éléments : arôme, goût, couleur, etc."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Gestion de l'Hygiène",
      description: "Gestion stricte de l'hygiène de l'environnement de fabrication, priorité absolue à l'élaboration de sake japonais sûr et fiable."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Process Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/top_kinujo.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">Notre Savoir-Faire</h1>
              <p className="text-xl md:text-2xl mb-2">Our Artisanal Process</p>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Découvrez les secrets de l'élaboration du sake japonais où tradition et innovation se rencontrent.
              </p>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">L'Art du Brassage du Sake</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Du riz et de l'eau naît la tradition</p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-16">
              {processSteps.map((step, index) => (
                <div key={step.number} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
                  <div className="md:w-1/2">
                    <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Notre Engagement envers les Ingrédients</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-amber-600 text-4xl mb-4">
                    <i className={ingredient.icon}></i>
                  </div>
                  <h3 className="text-xl font-serif mb-4">{ingredient.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{ingredient.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Fusion de Tradition et Technologie</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Brassage du sake préservant 150 ans de tradition tout en intégrant les technologies modernes</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif mb-4">Transmission des Méthodes Traditionnelles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    La Brasserie Miyashita préserve les méthodes traditionnelles transmises depuis plus de 150 ans depuis sa fondation. Élaboration manuelle du koji, brassage en trois étapes du moromi, et autres méthodes où l'artisanat et l'expérience des maîtres brasseurs sont essentiels.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4">Intégration des Technologies Modernes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tout en préservant la tradition, nous intégrons les dernières technologies dans le contrôle qualité et l'hygiène. Systèmes de contrôle de température, équipements d'analyse de qualité, etc., pour maintenir une qualité stable du sake japonais.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4">Considération pour l'Environnement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Réutilisation de l'eau utilisée dans le processus de fabrication, réduction des déchets, etc., brassage du sake respectueux de l'environnement. Amélioration continue pour un brassage durable.
                  </p>
                </div>
              </div>
              
              <div>
                <img 
                  src="/images/top_kinsho04.jpeg" 
                  alt="Équipements de Fabrication" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Contrôle Qualité</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityControls.map((control, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-amber-600 text-4xl mb-4">
                    <i className={control.icon}></i>
                  </div>
                  <h3 className="text-xl font-serif mb-4">{control.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{control.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProcessPage; 