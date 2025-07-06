import React from 'react';
// import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Pierre Dubois',
      title: 'Sommelier, Restaurant Le Grand',
      comment: 'Un sake exceptionnel qui rivalise avec les meilleurs vins français. La complexité aromatique est remarquable.',
      image: '/images/top_kinujo.jpeg',
      rating: 5
    },
    {
      id: 2,
      name: 'Marie Laurent',
      title: 'Critique Gastronomique',
      comment: 'La qualité et l\'attention aux détails sont impressionnantes. Un produit qui mérite sa place dans les meilleures caves.',
      image: '/images/top_okadai75.jpeg',
      rating: 5
    },
    {
      id: 3,
      name: 'Jean Moreau',
      title: 'Amateur de Spiritueux',
      comment: 'Une expérience gustative unique qui m\'a fait redécouvrir le sake japonais sous un jour nouveau.',
      image: '/images/top_okadaishochu.jpeg',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-noto">
            Témoignages
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gold-200 card-hover">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gold-300 text-4xl opacity-20">
                "
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="text-gold-400 text-xl">★</span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;