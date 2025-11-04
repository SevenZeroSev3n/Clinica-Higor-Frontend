// src/components/LandingPage.jsx (Nenhuma mudança necessária, mantido para referência)
import React from 'react';
import Header from './Header';
import ServicesSection from './ServicesSection.jsx';
import ProfessionalsSection from './ProfessionalsSection';
import ProceduresSection from './ProceduresSection';
import LocationSection from './LocationSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      
      <main>
        <ServicesSection /> 

        <ProfessionalsSection />
        <ProceduresSection />
        <LocationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;