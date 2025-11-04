import React, { useState } from 'react';
import '../ButtonAnimation.css'; 

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);
    
    // Função para renderizar as 52 divs spots (necessário para a animação CSS)
    const renderSpots = () => {
        const spots = [];
        for (let i = 1; i <= 52; i++) {
            spots.push(<div key={i} className="button_spots" />);
        }
        return spots;
    };

    const handleButtonClick = (e) => {
        e.preventDefault(); 
        setIsChecked(true); 

        setTimeout(() => {
            window.location.href = '/contato';
        }, 300);
    };

    return (
        // O minHeight foi mantido para garantir espaço para a logo e o botão abaixo dela
        <header 
            // Adicionado position: relative aqui é crucial
            className="flex flex-col items-center justify-center relative bg-white" 
            style={{ minHeight: '600px', borderBottom: '1px solid #F8F8F8' }}
        >
            
            {/* 1. Logo Centralizada (Elemento RELATIVO) */}
            <div className="text-center w-full relative z-10" style={{ marginBottom: '50px' }}> 
                <img 
                    src="/images/logo-dr-higor.png"
                    alt="Dr. Higor Almeida Rapkivcz - Odontologia Especializada"
                    className="mx-auto w-full h-full object-contain" 
                    style={{ maxHeight: '600px', maxWidth: '1000px' }} 
                />
            </div>
            
            {/* 2. Botão de Contato POSICIONADO ABSOLUTAMENTE NA ÁREA DO RETÂNGULO VERMELHO */}
            <div 
                className="button relative mx-auto z-20" 
                style={{ 
                    // RESTAURADO o posicionamento ABSOLUTO
                    position: 'absolute', 
                    top: '75%', // Empurra para baixo, sobre a parte inferior da logo
                    left: 0, 
                    right: 0, 
                    margin: 'auto',
                    transform: 'translateY(-50%)' // Centraliza verticalmente o botão em 75%
                }}
            >
                
                <input 
                    id="button" 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={() => {}}
                    readOnly 
                />
                
                <label htmlFor="button" onClick={handleButtonClick}>
                    <div 
                        className="button_inner q"
                        style={{ 
                            background: 'transparent', 
                            color: '#414141ff', 
                            borderColor: '#414141ff', 
                            borderWidth: '2px', 
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span className="t font-bold" style={{ left: '0px', top: '0px' }}>
                            ENTRE EM CONTATO
                        </span>
                        <span><i className="tick ion-checkmark-round"></i></span>
                        
                        <div className="b_l_quad">
                            {renderSpots()} 
                        </div>
                    </div>
                </label>
            </div>
            
        </header>
    );
};

export default Header;