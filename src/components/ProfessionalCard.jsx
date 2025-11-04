import React from 'react';

const ProfessionalCard = ({ name, description, imagePath, slug, colorClass }) => {
    return (
        <div 
            className="w-full sm:w-1/2 lg:w-1/3 p-4 block" 
        >
            <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                {/* NOVO: Borda Colorida no Topo */}
                <div className={`h-24 w-full flex items-center justify-center p-4 ${colorClass}`}>
                    {/* Esta div vazia é apenas para a cor de fundo */}
                </div>

                {/* Container da Imagem ABAIXO da borda colorida */}
                {/* Removido o bg-white daqui, pois a borda já está acima */}
                <div className="h-96 w-full flex items-center justify-center -mt-24" style={{ zIndex: 1 }}> 
                    <img 
                        src={imagePath} 
                        alt={`Foto do ${name}`} 
                        // GARANTIA: Imagem normal, sem filtros ou opacidades
                        className="w-full h-full object-cover saturate-100" 
                    />
                </div>
                
                {/* Conteúdo do Card */}
                <div className="p-6 bg-white flex-grow">
                    <h3 className="text-xl font-bold mb-1 text-dark-text">{name}</h3>
                    <p className="text-medium-text text-sm">{description}</p>
                    
                    <a 
                        href={`/about/${slug}`} 
                        className="text-sm font-bold mt-4 block text-main-black hover:text-dark-text transition-colors"
                        style={{ paddingTop: '8px' }} 
                    >
                        Saiba mais &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalCard;