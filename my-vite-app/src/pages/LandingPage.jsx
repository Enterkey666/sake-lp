import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductConcept from '../components/ProductConcept';
import ProductShowcase from '../components/ProductShowcase';
import TastingNotes from '../components/TastingNotes';
import BreweryStory from '../components/BreweryStory';
import LimitedOffer from '../components/LimitedOffer';
import Testimonials from '../components/Testimonials';
import Awards from '../components/Awards';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductConcept />
        <ProductShowcase />
        <TastingNotes />
        <BreweryStory />
        <LimitedOffer />
        <Testimonials />
        <Awards />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage; 