import { MapPin, Dumbbell, Apple, Clipboard } from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: MapPin,
    title: "Atendimento Presencial",
    text: "Atendo nas cidades de Miradouro MG e Muriaé MG. Treino personalizado no local que for mais conveniente para você.",
  },
  {
    icon: Dumbbell,
    title: "Acompanhamento de Treinos",
    text: "Supervisão completa durante seus treinos, garantindo execução correta dos exercícios e máximos resultados.",
  },
  {
    icon: Apple,
    title: "Orientação Nutricional",
    text: "Ajudo você a estabelecer uma alimentação adequada aos seus objetivos, com orientações práticas e sustentáveis.",
  },
  {
    icon: Clipboard,
    title: "Planejamento Personalizado",
    text: "Cada treino é elaborado especificamente para você, respeitando suas limitações e potencializando seus resultados.",
  },
];

function Services() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <SectionHeader
        title="Como Posso Te Ajudar"
        subtitle="Oferecimento completo de treinamento personalizado com foco em resultados reais e sustentáveis"
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/80 p-8 md:p-10 min-h-[260px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-green-500/70 hover:bg-green-950/30 hover:shadow-[0_0_45px_rgba(34,197,94,0.28)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-500/15 via-transparent to-green-500/5" />

              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-green-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-green-500/15 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-green-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon
                    className="text-green-500 transition-all duration-500 group-hover:text-black"
                    size={36}
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold mb-5 transition-all duration-500 group-hover:text-green-400">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed transition-colors duration-500 group-hover:text-gray-200">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;