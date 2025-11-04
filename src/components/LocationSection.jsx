import React from 'react';

const LocationSection = () => {
  // URL extraída diretamente do <iframe> que você forneceu:
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.5753267762007!2d-62.31418332381524!3d-11.72446158848789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c893272e820ced%3A0x3cf42d503fff7937!2sAv.%20Treze%20de%20Maio%2C%20926%2C%20Nova%20Brasil%C3%A2ndia%20D'Oeste%20-%20RO%2C%2076958-000!5e0!3m2!1spt-BR!2sbr!4v1761769500600!5m2!1spt-BR!2sbr"; 

  return (
    <section className="py-10">
      {/* Container com bordas arredondadas e sombra, conforme a suavização */}
      <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
        <iframe
          // O Google Maps real será renderizado
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Clínica Odontológica"
        />
      </div>
    </section>
  );
};

export default LocationSection;