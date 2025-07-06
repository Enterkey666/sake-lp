import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VisitPage = () => {
  const [formData, setFormData] = useState({
    visitName: '',
    visitEmail: '',
    visitPhone: '',
    visitDate: '',
    visitTime: '',
    visitGuests: '',
    visitMessage: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Votre demande de réservation a été envoyée. Nous vous contacterons bientôt.');
  };

  const accessInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Adresse",
      content: "184 Nishikawara, Naka-ku, Okayama 703-8258, Japon"
    },
    {
      icon: "fas fa-clock",
      title: "Horaires d'Ouverture",
      content: [
        "Mercredi - Dimanche : 9h00 - 17h00",
        "Fermé : Lundi et Mardi",
        "Fermé les jours fériés"
      ]
    },
    {
      icon: "fas fa-phone",
      title: "Réservations",
      content: [
        "Téléphone : +81 86-272-5594",
        "Email : info@miyashita-brewery.com",
        "Réservations recommandées pour les groupes"
      ]
    },
    {
      icon: "fas fa-car",
      title: "En Voiture",
      content: [
        "Depuis la gare d'Okayama : environ 15 minutes",
        "Parking gratuit disponible sur place",
        "Capacité : 20 véhicules"
      ]
    },
    {
      icon: "fas fa-train",
      title: "En Transport Public",
      content: [
        "Gare d'Okayama → Bus local → Arrêt Nishikawara",
        "Durée : environ 20 minutes",
        "Fréquence : toutes les 30 minutes"
      ]
    },
    {
      icon: "fas fa-wheelchair",
      title: "Accessibilité",
      content: [
        "Accès handicapé disponible",
        "Toilettes adaptées",
        "Parking réservé aux personnes à mobilité réduite"
      ]
    }
  ];

  const guidelines = [
    {
      icon: "fas fa-calendar-check",
      title: "Réservations",
      description: "Les réservations sont recommandées, surtout pour les groupes de plus de 5 personnes. Contactez-nous au moins 48 heures à l'avance."
    },
    {
      icon: "fas fa-users",
      title: "Groupes",
      description: "Nous accueillons les groupes jusqu'à 20 personnes. Des visites guidées spéciales peuvent être organisées sur demande."
    },
    {
      icon: "fas fa-camera",
      title: "Photographie",
      description: "La photographie est autorisée dans la plupart des zones. Certaines zones de production peuvent être restreintes pour des raisons de sécurité."
    },
    {
      icon: "fas fa-child",
      title: "Enfants",
      description: "Les enfants sont les bienvenus mais doivent être accompagnés d'un adulte. Des activités spéciales peuvent être organisées pour les jeunes visiteurs."
    },
    {
      icon: "fas fa-paw",
      title: "Animaux",
      description: "Les animaux de compagnie ne sont pas autorisés dans les zones de production pour des raisons d'hygiène et de sécurité."
    },
    {
      icon: "fas fa-smoking-ban",
      title: "Interdictions",
      description: "Fumer est interdit dans tous les bâtiments. Veuillez respecter les zones fumeurs désignées à l'extérieur."
    }
  ];

  const expectFeatures = [
    {
      icon: "fas fa-eye",
      title: "Visite Guidée",
      description: "Explorez nos installations de production avec un guide expert qui vous expliquera chaque étape du processus de brassage."
    },
    {
      icon: "fas fa-wine-glass",
      title: "Dégustation",
      description: "Dégustez une sélection de nos meilleurs produits, du sake premium aux bières artisanales, accompagnés d'explications détaillées."
    },
    {
      icon: "fas fa-shopping-bag",
      title: "Boutique",
      description: "Visitez notre boutique pour acheter vos produits préférés et des souvenirs uniques de votre visite."
    },
    {
      icon: "fas fa-utensils",
      title: "Restaurant",
      description: "Savourez une cuisine japonaise traditionnelle dans notre restaurant, où nos produits sont parfaitement mis en valeur."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Visit Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/top_doppokan_open.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">Visitez la Brasserie</h1>
              <p className="text-xl md:text-2xl mb-2">Visit Our Brewery</p>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Découvrez l'art du brassage du sake japonais dans un cadre traditionnel et moderne.
              </p>
            </div>
          </div>
        </section>

        {/* Access Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Informations d'Accès</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {accessInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-amber-600 text-2xl mt-1">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2">{info.title}</h3>
                      {Array.isArray(info.content) ? (
                        <div className="space-y-1">
                          {info.content.map((item, i) => (
                            <p key={i} className="text-gray-700">{item}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-2xl font-serif mb-6">Localisation</h3>
                <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1234567890123!2d133.91234567890123!3d34.65432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzE1LjYiTiAxMzPCsDU0JzQ0LjQiRQ!5e0!3m2!1sfr!2sfr!4v1234567890123"
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brasserie Miyashita"
                  ></iframe>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://maps.google.com/?q=184+Nishikawara,+Naka-ku,+Okayama+703-8258,+Japan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Ouvrir dans Google Maps
                  </a>
                  <a 
                    href="https://www.google.com/maps/dir//184+Nishikawara,+Naka-ku,+Okayama+703-8258,+Japan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors duration-300"
                  >
                    <i className="fas fa-route"></i>
                    Itinéraire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Guidelines */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Directives de Visite</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guidelines.map((guideline, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-amber-600 text-3xl mb-4">
                    <i className={guideline.icon}></i>
                  </div>
                  <h3 className="text-xl font-serif mb-4">{guideline.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">À Quoi S'attendre</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-serif mb-6">Votre Visite</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Une visite à la Brasserie Miyashita vous offre une expérience unique où tradition et modernité se rencontrent. Découvrez les secrets de l'art du brassage du sake japonais dans un cadre authentique.
                </p>
                
                <div className="space-y-6">
                  {expectFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-amber-600 text-xl mt-1">
                        <i className={feature.icon}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-serif mb-2">{feature.title}</h4>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img 
                  src="/images/top_doppokan-2.jpeg" 
                  alt="Visite de la Brasserie" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Visit */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Planifiez Votre Visite</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Contactez-nous pour organiser votre visite</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif mb-6">Informations de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <i className="fas fa-phone text-amber-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-gray-700">+81 86-272-5594</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <i className="fas fa-envelope text-amber-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-700">info@miyashita-brewery.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <i className="fas fa-clock text-amber-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Horaires de Contact</h4>
                      <p className="text-gray-700">Mercredi - Dimanche : 9h00 - 17h00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif mb-6">Formulaire de Réservation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="visitName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="visitName"
                      name="visitName"
                      value={formData.visitName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="visitEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="visitEmail"
                      name="visitEmail"
                      value={formData.visitEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="visitPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="visitPhone"
                      name="visitPhone"
                      value={formData.visitPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Date souhaitée *
                      </label>
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="visitTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Heure souhaitée *
                      </label>
                      <select
                        id="visitTime"
                        name="visitTime"
                        value={formData.visitTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez une heure</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="visitGuests" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de personnes *
                    </label>
                    <input
                      type="number"
                      id="visitGuests"
                      name="visitGuests"
                      min="1"
                      max="20"
                      value={formData.visitGuests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="visitMessage" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="visitMessage"
                      name="visitMessage"
                      rows="4"
                      value={formData.visitMessage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold"
                  >
                    Réserver ma Visite
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default VisitPage; 