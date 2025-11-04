// src/App.jsx
import React from 'react';
import LandingPage from './components/LandingPage';
import ContatoPage from './components/ContatoPage';
import AboutMePage from './components/AboutMePage'; // Novo Import
import { PROFESSIONALS_DATA } from './components/ProfessionalsSection'; // Importa os dados

function App() {
  const pathname = window.location.pathname;
  
  const renderPage = () => {
    // 1. Lógica de Contato
    if (pathname === '/contato') {
      return <ContatoPage />;
    }
    
    // 2. Lógica de About Me Dinâmica (Ex: /about/dr-higor)
    if (pathname.startsWith('/about/')) {
        const slug = pathname.split('/')[2];
        const doctor = PROFESSIONALS_DATA.find(p => p.slug === slug);

        // Se o doutor for encontrado, renderiza a página AboutMePage
        return <AboutMePage doctor={doctor} />;
    }
    
    // 3. Lógica da Landing Page (Home)
    return <LandingPage />;
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;