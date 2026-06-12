function Hero() {
  const irParaContato = () => {
    document
      .getElementById("contato")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
      <img
        src="https://www.smartfit.com.br/news/wp-content/uploads/2025/02/Destaquedupla-800x533.jpg"
        alt="Personal trainer"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <span className="inline-block mb-8 rounded-full border border-green-500/50 bg-green-500/15 px-6 py-2 text-green-400 font-bold">
          Personal Trainer Certificado
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          Transforme seu{" "}
          <span className="text-green-500 underline decoration-green-500 underline-offset-8">
            Corpo!
          </span>
          <br />
          Alcance seus Objetivos com Montezano
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Treinamento personalizado e acompanhamento profissional para você
          conquistar o corpo que sempre sonhou
        </p>

        <button
          onClick={irParaContato}
          className="mt-10 bg-green-500 text-black font-extrabold px-10 py-5 rounded-full text-lg hover:bg-green-400 transition"
        >
          Comece Agora
        </button>

        <div className="mt-20 grid grid-cols-3 max-w-3xl mx-auto divide-x divide-gray-600/60">
          <div>
            <h3 className="text-4xl font-extrabold text-green-500">5+</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Anos de Experiência
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-green-500">100</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Perda de Tempo!
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-green-500">2</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Cidades Atendidas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;