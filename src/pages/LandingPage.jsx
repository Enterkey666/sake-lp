import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import TastingNotes from '../components/TastingNotes';
import BreweryStory from '../components/BreweryStory';
import LimitedOffer from '../components/LimitedOffer';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <ProductShowcase />
      <TastingNotes />
      <BreweryStory />
      <LimitedOffer />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default LandingPage; 