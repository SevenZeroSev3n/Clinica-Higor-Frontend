import React from 'react';
import Footer from './Footer'; // Importando o Footer principal

const AboutMePage = ({ doctor }) => {
    if (!doctor) {
        return <div className="text-center py-20 text-xl text-dark-text">Doutor não encontrado!</div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* O bg-white e shadow-lg foram movidos para o container interno para melhor visualização */}
            <div className="bg-white shadow-lg rounded-lg p-8">
                
                {/* Título Principal */}
                <h2 className="text-5xl font-bold mb-8 text-dark-text border-b border-main-gray pb-4">
                    Sobre o Dr. {doctor.name.split(' ')[1] || doctor.name}
                </h2>
                
                {/* Seção 1: Introdução (COM IMAGEM REAL DO DR.) */}
                <section className="mb-12 border-b border-main-gray pb-8">
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        
                        {/* Imagem do Doutor (Esquerda) */}
                        <div className="md:w-1/3">
                            <div className="w-full h-80 overflow-hidden rounded-lg shadow-md bg-main-gray">
                                <img 
                                    src={doctor.imagePath} // Imagem real do Dr.
                                    alt={`Foto do Dr. ${doctor.name}`} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        
                        {/* Introdução (Direita) */}
                        <div className="md:w-2/3 flex flex-col justify-center">
                            <h3 className="text-3xl font-semibold mb-3 text-dark-text">Introdução</h3>
                            <p className="text-medium-text text-lg leading-relaxed">
                                {doctor.introduction}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Seção 2: Portfólio (NOVA SEÇÃO) */}
                <section className="mb-12">
                    <h3 className="text-3xl font-semibold mb-8 text-dark-text">Portfólio & Casos de Sucesso</h3>
                    
                    {/* Bloco Placeholder para o Portfólio */}
                    <div className="flex flex-wrap gap-4 h-64 bg-main-gray rounded-lg p-4 items-center justify-center text-medium-text text-center">
                        <p>
                            Espaço reservado para galeria de fotos de antes e depois ou links de projetos.
                            {/* Os blocos coloridos foram removidos e substituídos por este grande placeholder. */}
                        </p>
                    </div>
                    
                </section>
                
            </div> {/* Fim do Container bg-white */}
            
            {/* Footer Principal (INCLUÍDO) */}
            <div className="mt-8">
                <Footer />
            </div>
            
        </div>
    );
};

export default AboutMePage;