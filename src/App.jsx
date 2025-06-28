import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MostPopular from './components/MostPopular';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import PortraitsSection from './components/PortraitsSection';

export default function App() {
  return (
    <div className="font-serif text-gray-900">
      <Header />
      <Hero />
      <MostPopular />
      <Banner />
      <AboutSection />
      <PortraitsSection />
    </div>
  );
}
