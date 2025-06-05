import React from "react";

const WorksSection = () => (
  <section id="works" className="py-20 bg-white">
    <h2 className="text-3xl font-bold mb-8 text-center">
      Projetos em Destaque
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cards de projetos podem ser renderizados aqui */}
      <div className="bg-gray-100 rounded-lg p-6 shadow">
        <h3 className="font-semibold text-xl mb-2">Projeto Exemplo</h3>
        <p className="text-gray-600 mb-4">
          Breve descrição do projeto e tecnologias usadas.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Ver detalhes
        </a>
      </div>
    </div>
  </section>
);

export default WorksSection;
