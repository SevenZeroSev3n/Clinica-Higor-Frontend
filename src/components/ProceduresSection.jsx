import React from 'react';
import ProcedureCard from './ProcedureCard';

const procedures = [
  {
    title: "Tratamento de Canal",
    description: "Alívio imediato da dor e preservação do dente natural. Utilizamos tecnologia avançada para um tratamento endodôntico rápido e confortável.",
    colorClass: "bg-proc-green",
    image: "/images/canal.png" // NOVO: Caminho da imagem
  },
  {
    title: "Lentes em Resina",
    description: "Transformação estética do sorriso em uma única sessão. Correção de forma, cor e pequenos alinhamentos com material de alta durabilidade.",
    colorClass: "bg-proc-brown",
    image: "/images/lentes.png" // NOVO: Caminho da imagem
  },
  {
    title: "Implantes Dentários",
    description: "Recupere a função mastigatória e a estética com raízes artificiais seguras. Solução permanente para dentes perdidos, com garantia de estabilidade.",
    colorClass: "bg-proc-blue",
    image: "/images/implante.png" // NOVO: Caminho da imagem
  },
];

const ProceduresSection = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-main-black">
        Procedimentos
      </h2>
      <div className="flex flex-wrap justify-center -m-4">
        {procedures.map((proc, index) => (
          <ProcedureCard key={index} {...proc} />
        ))}
      </div>
    </section>
  );
};

export default ProceduresSection;