import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-cormorant">Brasserie Miyashita</h3>
              <p className="text-gold-400 text-sm">Artisan Sake Premium</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Plus de 100 ans de tradition et d'innovation dans l'art du brassage du sake japonais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">Produits</h4>
            <ul className="space-y-3">
              <li><a href="/products" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">Junmai Daiginjo</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">Produits Saisonniers</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">Coffrets Cadeaux</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">Produits Originaux</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">Entreprise</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">À Propos</a></li>
              <li><a href="/process" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">Processus</a></li>
              <li><a href="/visit" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">Visite</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-gold-400"></i>
                <span className="text-gray-300">+81 86-272-5594</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-gold-400"></i>
                <span className="text-gray-300">info@miyashita-brewery.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-gold-400"></i>
                <span className="text-gray-300">184 Nishikawara, Naka-ku, Okayama 703-8258, Japon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; 2024 Brasserie Miyashita. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Conditions d'Utilisation
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Plan du Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 