import { GraduationCap, Award, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";
import trainerImg from "../assets/hero.png";

const items = [
  {
    icon: GraduationCap,
    title: "Graduação em Educação Física",
    text: "Atualmente em formação em Educação Física, desenvolvendo conhecimentos em anatomia, fisiologia, biomecânica e treinamento esportivo, sempre buscando aprimoramento para oferecer o melhor acompanhamento aos alunos.",
    tag: "Bacharel",
  },
  {
    icon: Award,
    title: "Cursos Profissionalizantes",
    text: "Certificações específicas em Personal Training, metodologias de treinamento e técnicas avançadas de condicionamento físico.",
    tag: "Certificado",
  },
  {
    icon: BookOpen,
    title: "Atualização Constante",
    text: "Sempre estudando as últimas pesquisas e tendências do mundo fitness para oferecer os melhores métodos aos meus alunos.",
    tag: "Em andamento",
  },
];

function Experience() {
  return (
    <section className="relative py-24 px-6 bg-black">
      <SectionHeader
        tag="Formação e Qualificação"
        title="Conhecimento e Experiência"
        subtitle="Formação acadêmica sólida aliada à prática constante para garantir os melhores resultados"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <img
          src={trainerImg}
          alt="Treinador"
          className="rounded-2xl w-full h-[500px] object-cover border border-zinc-800"
        />

        <div className="space-y-7">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/80 p-7 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-green-500/70 hover:bg-green-950/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-500/15 via-transparent to-green-500/5" />

                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-green-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <div className="w-16 h-16 shrink-0 rounded-xl bg-green-500/15 flex items-center justify-center transition-all duration-500 group-hover:bg-green-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon
                      className="text-green-500 transition-all duration-500 group-hover:text-black"
                      size={32}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <h3 className="text-2xl font-extrabold transition-all duration-500 group-hover:text-green-400">
                        {item.title}
                      </h3>

                      <span className="w-fit rounded-full border border-green-500/50 bg-green-500/10 px-4 py-1 text-sm font-bold text-green-400 transition-all duration-500 group-hover:bg-green-500 group-hover:text-black">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed transition-colors duration-500 group-hover:text-gray-200">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-16 rounded-2xl border border-green-500/40 bg-green-500/10 px-8 py-8 text-center">
        <p className="text-xl text-gray-200">
          <span className="text-green-400 font-extrabold">
            Profissional qualificado
          </span>{" "}
          e comprometido com seus resultados
        </p>

        <p className="mt-4 text-gray-400">
          Treinamento baseado em ciência e experiência prática
        </p>
      </div>
    </section>
  );
}

export default Experience;