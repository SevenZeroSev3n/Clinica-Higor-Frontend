import React from 'react';
import ProfessionalCard from './ProfessionalCard';

export const PROFESSIONALS_DATA = [ 
  {
    slug: "dr-higor",
    name: "Dr. Higor Almeida",
    description: "Dentista clínico geral com foco em tratamento de canal. Atuação centrada em alívio da dor, diagnóstico preciso e restaurações funcionais/estéticas.",
    imagePath: "/images/doctors/dr-higor.png", 
    introduction: "Dr. Higor é um profissional dedicado que visa a excelência em todos os tratamentos...",
    interests: "Esta seção trata do propósito profissional desta webpage...",
    colorClass: "bg-prof-highlight-1"
  },
  {
    slug: "dr-joao",
    name: "Dr. João Queiroz",
    description: "Cirurgião-dentista focado em lentes de resina composta. Sorrisos naturais com mínima intervenção, planejamento digital e acabamento de alto brilho.",
    imagePath: "/images/doctors/dr-joao.png", 
    introduction: "Dr. João é especialista em lentes em resina e tratamentos minimamente invasivos...",
    interests: "Além da odontologia, Dr. João é entusiasta de tecnologia e utiliza equipamentos de ponta...",
    colorClass: "bg-prof-highlight-2"
  },
  {
    slug: "dra-paula", 
    name: "Dra. Paula", 
    description: "Cirurgiã-dentista especialista em implantes. Planejamento 3D, cirurgia guiada e próteses sobre implante com foco em função e estética.",
    imagePath: "/images/doctors/dra-paula.png", 
    introduction: "Dra. Paula é uma cirurgiã-dentista com foco em implantodontia e reabilitação oral...",
    interests: "Dra. Paula tem paixão por inovação em reabilitação oral...",
    colorClass: "bg-prof-highlight-3"
  },
];

const ProfessionalsSection = () => {
  return (
    // Removido qualquer padding lateral ou mx-auto aqui, pois o main já cuida disso.
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-main-black">
        Profissionais disponíveis
      </h2>
      <div className="flex flex-wrap justify-center -m-4">
        {PROFESSIONALS_DATA.map((prof, index) => (
          <ProfessionalCard key={index} {...prof} />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalsSection;