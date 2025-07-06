import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.');
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Adresse",
      content: "184 Nishikawara, Naka-ku, Okayama 703-8258, Japon"
    },
    {
      icon: "fas fa-phone",
      title: "Téléphone",
      content: [
        "+81 86-272-5594",
        "Lun-Ven : 9h00 - 17h00 (JST)"
      ]
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: [
        "info@miyashita-brewery.com",
        "Réponse sous 24-48h"
      ]
    },
    {
      icon: "fas fa-clock",
      title: "Horaires d'Ouverture",
      content: [
        "Mercredi - Dimanche",
        "9h00 - 17h00 (JST)"
      ]
    }
  ];

  const faqs = [
    {
      question: "Comment puis-je commander vos produits ?",
      answer: "Vous pouvez commander nos produits directement via notre site web, par téléphone au +81 86-272-5594, ou par email à info@miyashita-brewery.com. Nous proposons également la vente en gros pour les professionnels."
    },
    {
      question: "Livrez-vous à l'international ?",
      answer: "Oui, nous livrons dans de nombreux pays. Les frais de livraison et les délais varient selon la destination. Contactez-nous pour connaître les conditions spécifiques à votre pays."
    },
    {
      question: "Puis-je visiter la brasserie ?",
      answer: "Absolument ! Nous proposons des visites guidées de notre brasserie. Les réservations sont recommandées, surtout pour les groupes. Contactez-nous pour organiser votre visite."
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes ouverts du mercredi au dimanche de 9h00 à 17h00 (heure du Japon). Nous sommes fermés le lundi et mardi, ainsi que les jours fériés."
    },
    {
      question: "Proposez-vous des dégustations ?",
      answer: "Oui, nous proposons des séances de dégustation de nos produits. Ces dégustations peuvent être organisées sur réservation et incluent une présentation de nos différentes variétés de sake et autres spiritueux."
    },
    {
      question: "Comment conserver le sake ?",
      answer: "Le sake doit être conservé dans un endroit frais et sombre, idéalement au réfrigérateur après ouverture. Une fois ouvert, il est recommandé de le consommer dans les 2-3 semaines pour préserver sa qualité optimale."
    },
    {
      question: "Proposez-vous des coffrets cadeaux ?",
      answer: "Oui, nous proposons une gamme de coffrets cadeaux élégants, parfaits pour les occasions spéciales. Ces coffrets incluent une sélection de nos meilleurs produits dans un emballage de luxe."
    },
    {
      question: "Puis-je organiser un événement privé ?",
      answer: "Oui, nous pouvons organiser des événements privés dans nos installations. Contactez-nous pour discuter de vos besoins spécifiques et nous vous proposerons des options personnalisées."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Contact Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/top_gasso.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">Contactez-Nous</h1>
              <p className="text-xl md:text-2xl mb-2">Get in Touch</p>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Nous sommes à votre disposition pour toute question sur nos produits, réservations ou partenariats.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Informations de Contact</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-amber-600 text-4xl mb-4">
                    <i className={info.icon}></i>
                  </div>
                  <h3 className="text-xl font-serif mb-4">{info.title}</h3>
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
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Formulaire de Contact</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Envoyez-nous votre message et nous vous répondrons dans les plus brefs délais</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="general">Question générale</option>
                    <option value="products">Informations sur les produits</option>
                    <option value="reservation">Réservation</option>
                    <option value="partnership">Partenariat commercial</option>
                    <option value="wholesale">Vente en gros</option>
                    <option value="visit">Visite de la brasserie</option>
                    <option value="support">Support technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Décrivez votre demande en détail..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700">
                      Je souhaite recevoir la newsletter avec les actualités et offres spéciales
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-700">
                      J'accepte la <a href="/privacy" target="_blank" className="text-amber-600 hover:underline">politique de confidentialité</a> *
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Questions Fréquemment Posées</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-serif">{faq.question}</h3>
                    <i className={`fas fa-chevron-down transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''}`}></i>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Inquiries */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Demandes Commerciales</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600">Partenariats, vente en gros et collaborations</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif mb-4">Partenariats Commerciaux</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous recherchons activement des partenaires commerciaux pour développer notre présence internationale. Que vous soyez un importateur, un distributeur ou un restaurateur, nous serions ravis de discuter d'opportunités de collaboration.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4">Vente en Gros</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous proposons des conditions spéciales pour les commandes en gros. Nos produits sont disponibles pour les professionnels de la restauration, les cavistes et les distributeurs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-serif mb-4">Événements et Dégustations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous organisons régulièrement des événements de dégustation et des présentations de produits. Contactez-nous pour organiser un événement personnalisé.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif mb-6">Contact Commercial</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <i className="fas fa-envelope text-amber-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Email Commercial</h4>
                      <p className="text-gray-700">business@miyashita-brewery.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <i className="fas fa-phone text-amber-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-gray-700">+81 86-272-5594</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <i className="fas fa-clock text-amber-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Horaires</h4>
                      <p className="text-gray-700">Lun-Ven : 9h00 - 17h00 (JST)</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="mailto:business@miyashita-brewery.com"
                  className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold"
                >
                  Contact Commercial
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage; 