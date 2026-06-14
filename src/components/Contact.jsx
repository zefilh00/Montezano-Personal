import { MessageCircle, Camera, MapPin, Mail, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";

function Contact() {
  return (
    <section id="contato" className="relative py-24 px-6 bg-black">
      <SectionHeader
        tag="Entre em Contato"
        title="Vamos Começar Sua Transformação"
        subtitle="Entre em contato comigo e dê o primeiro passo para conquistar seus objetivos"
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <ContactCard
          icon={MessageCircle}
          title="WhatsApp"
          text="Tire suas dúvidas e agende uma avaliação gratuita pelo WhatsApp. Respondo rapidamente!"
          linkText="Iniciar Conversa"
          link="https://wa.me/553299843431"
        />

        <ContactCard
          icon={Camera}
          title="Instagram"
          text="Acompanhe dicas, transformações dos alunos e bastidores dos treinos no Instagram."
          linkText="Seguir Perfil"
          link="https://www.instagram.com/gabo45975/"
        />
      </div>

      <div className="relative max-w-7xl mx-auto mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-7 md:p-10 overflow-hidden">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-8">
          Informações de Atendimento
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <Info
            icon={MapPin}
            title="Localização"
            text={["Miradouro MG", "Muriaé MG"]}
          />

          <Info
            icon={Mail}
            title="E-mail"
            text={["gabrielmontezanovalentim@gmail.com"]}
          />

          <Info icon={Phone} title="Telefone" text={["(32) 9984-3431"]} />
        </div>
      </div>

      <p className="text-center text-gray-500 mt-16 text-lg">
        Pronto para transformar seu corpo e sua vida?
      </p>
    </section>
  );
}

function ContactCard({ icon: Icon, title, text, linkText, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-green-500/70 bg-green-950/30 p-8 md:p-12 min-h-[360px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-green-400 hover:bg-green-950/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.35)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-green-500/20 via-transparent to-green-500/5" />

      <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-green-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125" />

      <div className="relative z-10">
        <div className="w-24 h-24 rounded-2xl bg-green-500/20 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-green-500 group-hover:rotate-6 group-hover:scale-110">
          <Icon
            className="text-green-500 transition-all duration-500 group-hover:text-black"
            size={44}
          />
        </div>

        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 transition-all duration-500 group-hover:text-green-400">
          {title}
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed mb-10 transition-colors duration-500 group-hover:text-gray-200">
          {text}
        </p>

        <span className="inline-flex items-center gap-2 text-green-500 font-extrabold text-lg transition-all duration-500 group-hover:text-green-400 group-hover:translate-x-2">
          {linkText}{" "}
          <span className="transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>
        </span>
      </div>
    </a>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-5 items-start min-w-0">
      <div className="w-14 h-14 shrink-0 rounded-xl bg-green-500/15 flex items-center justify-center">
        <Icon className="text-green-500" size={28} />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="font-extrabold text-lg">{title}</h4>

        {text.map((line) => (
          <p
            key={line}
            className="text-gray-400 text-lg break-all leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Contact;