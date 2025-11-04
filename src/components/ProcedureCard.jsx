import React from 'react';

const ProcedureCard = ({ title, description, colorClass, image }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      {/* O container principal agora tem a borda colorida e sombra suave */}
      <div className={`rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-solid`} 
           style={{ borderColor: colorClass, borderWidth: '2px' }}>
        
        {/* Área de Exibição da Imagem (Preenche 100% da Largura) */}
        {/* Removido o padding e background, a imagem preenche todo o topo do container */}
        <div className="h-40 w-full flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            // object-cover para preencher o container sem deixar espaços vazios
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Área de Conteúdo (Texto) */}
        <div className="p-6 bg-white flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-main-black">
            {title}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
          <a href="#" className="text-sm font-semibold mt-4 block text-main-black hover:text-dark-text transition-colors">
             Saber mais →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcedureCard;