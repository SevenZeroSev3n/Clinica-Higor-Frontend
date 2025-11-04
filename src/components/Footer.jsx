import React from 'react';

const Footer = () => {
  return (
    // Removida a classe mt-10 e ajustado o padding para o novo layout
    <footer className="flex flex-col sm:flex-row justify-between py-10 border-t border-main-gray bg-white text-base">
      
      {/* 1. Seção Contato (Esquerda) */}
      <div className="flex flex-col mb-6 sm:mb-0 space-y-2">
        <h3 className="font-bold text-lg text-dark-text mb-4">Contato</h3>
        
        {/* Telefone 1 */}
        <div className="flex items-center text-medium-text">
          <i className="fas fa-phone mr-3 text-sm" style={{ color: '#c8cbc9' }}></i> {/* Cor de ícone simulada */}
          <span>(69) 99944-1934</span>
        </div>
        
        {/* Email */}
        <div className="flex items-center text-medium-text">
          <i className="fas fa-envelope mr-3 text-sm" style={{ color: '#c8cbc9' }}></i>
          <span>DRHIGOR.CONSULTORIO@OUTLOOKO.COM</span>
        </div>
        
        {/* Whatsapp */}
        <div className="flex items-center text-medium-text">
          <i className="fab fa-whatsapp mr-3 text-sm" style={{ color: '#c8cbc9' }}></i>
          <span>(69) 99944-1934</span>
        </div>
      </div>
      
      {/* 2. Seção Redes Sociais (Direita) */}
      <div className="text-right">
        <h3 className="font-bold text-lg text-dark-text mb-4">Redes sociais</h3>
        <div className="flex space-x-4 justify-end">
          
          {/* Instagram */}
          <a href="#" className="text-dark-text hover:text-main-black transition-colors text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          
          {/* Facebook */}
          <a href="#" className="text-dark-text hover:text-main-black transition-colors text-2xl">
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Removidos os ícones genéricos (link, email) para dar lugar aos ícones sociais */}
        </div>
      </div>
      
      {/* Ocultando a seção #namecity e links antigos */}
    </footer>
  );
};

export default Footer;