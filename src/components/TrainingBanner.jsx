function TrainingBanner() {
  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden border border-zinc-800">
        <img
          src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=1600"
          alt="Treino e nutrição"
          className="w-full h-[320px] md:h-[460px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-8 left-8 md:left-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Treino + Nutrição
          </h2>

          <p className="mt-3 text-lg text-gray-200">
            A combinação perfeita para alcançar seus objetivos
          </p>
        </div>
      </div>
    </section>
  );
}

export default TrainingBanner;