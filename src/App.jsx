import React from 'react';
import HomeSection from './components/HomeSection';
import ProductSection from './components/ProductSection';
import PricingSection from './components/PricingSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';
import TestimonialSection from './components/testimonialSection';
import FeatureSection from './components/featureSection';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="container mx-auto px-4 py-6">
        <Navbar/>
      </header>

      <main>
        <HomeSection />
        <ProductSection />
        <FeatureSection/>
        <TestimonialSection/>
        <PricingSection />
        <CallToActionSection />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
