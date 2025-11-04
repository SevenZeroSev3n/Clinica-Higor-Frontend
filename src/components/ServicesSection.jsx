import React from 'react';

const services = [
    { title: "COI Experience Dayclinic", description: "Experiência de tratamento intensivo e rápido.", icon: "fas fa-chair", color: "#c8cbc9" },
    { title: "Tratamentos Preventivos", description: "Foco na saúde e prevenção de problemas futuros.", icon: "fas fa-stethoscope", color: "#c8cbc9" },
    { title: "Alinhadores Transparentes", description: "Correção ortodôntica discreta e eficaz (Invisalign).", icon: "fas fa-teeth-open", color: "#c8cbc9" },
    { title: "Odontopediatria", description: "Cuidado especializado e carinhoso para o sorriso das crianças.", icon: "fas fa-child", color: "#c8cbc9" },
];

const ServiceCard = ({ title, icon, color }) => {
    return (
        <div className="w-1/2 md:w-1/4 p-4 flex flex-col items-center text-center">
            <i 
                className={`${icon} text-4xl mb-4`} 
                style={{ color: color }} 
                title={title} 
            ></i>
            <span className="font-semibold text-dark-text text-base leading-snug">
                {title}
            </span>
        </div>
    );
}

const ServicesSection = () => {
    const circularText = "A CLÍNICA MAIS TECNOLÓGICA DE BRASILANDIA";
    
    // NOVO AJUSTE: Reduzindo o tamanho do SVG e do raio do path para um círculo menor
    const pathRadius = 30.3; // Raio do caminho do texto (reduzido de 45 para 35)
    const svgViewBoxSize = 90; // Tamanho do viewBox (reduzido de 120 para 90)
    const svgViewBox = `0 0 ${svgViewBoxSize} ${svgViewBoxSize}`; 
    const svgDimensionsTailwind = `w-[${svgViewBoxSize}px] h-[${svgViewBoxSize}px]`; 
    const fontSize = 8; // Tamanho da fonte ajustado para caber no círculo menor

    return (
        // A seção não precisa de padding lateral ou mx-auto se o main já os tem
        <section className="py-12"> 
            {/* O container interno agora ocupa 100% da largura do seu pai (main) */}
            <div className="bg-white shadow-xl rounded-lg w-full p-8"> 
            
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
                    
                    {/* Texto Principal da Seção (Esquerda) */}
                    <div className="md:w-3/4 pr-8 mb-6 md:mb-0">
                        <h2 className="text-4xl font-bold text-dark-text mb-4 leading-tight">
                            Nossos principais serviços odontológicos
                        </h2>
                        <p className="text-medium-text text-base">
                            Descubra serviços especializados como clareamento dental, tratamento de canal, implantes dentários, harmonização orofacial, odontopediatria, alinhadores transparentes Invisalign, próteses dentárias e check-up odontológico com raio-x panorâmico em Barueri.
                        </p>
                    </div>

                    {/* Logo Giratória (Direita - SVG com tamanho e fonte reduzidos) */}
                    <div className="md:w-1/4 flex justify-center items-center h-24">
                        <div className="w-full h-full flex items-center justify-center">
                            <svg 
                                viewBox={svgViewBox} 
                                className={`${svgDimensionsTailwind} animate-spin-slow`} 
                                style={{ transformOrigin: 'center center' }} 
                            >
                                <path 
                                    id="circlePath" 
                                    d={`M ${svgViewBoxSize / 2}, ${svgViewBoxSize / 2} m -${pathRadius}, 0 a ${pathRadius},${pathRadius} 0 1,1 ${pathRadius * 2},0 a ${pathRadius},${pathRadius} 0 1,1 -${pathRadius * 2},0`} 
                                    fill="none" 
                                    stroke="none" 
                                />
                                <text 
                                    fill="#424344" 
                                    fontFamily="'Open Sans', sans-serif"
                                    fontSize={fontSize} 
                                    fontWeight="600" 
                                    letterSpacing="0.1" 
                                >
                                    <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                        {circularText}
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Cards de Serviço (Icones) */}
                <div className="flex flex-wrap justify-center mt-8 border-t border-main-gray pt-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                
                {/* Botão Ver Todos os Serviços */}
                <div className="text-center mt-12">
                    <a 
                        href="/procedimentos" 
                        className="text-dark-text font-bold text-lg hover:text-main-black transition-colors no-underline border-b-2 border-dark-text"
                    >
                        Ver todos os serviços
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;