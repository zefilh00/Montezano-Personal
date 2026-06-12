function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center max-w-4xl mx-auto px-4 mb-14">
      {tag && (
        <span className="inline-block mb-6 rounded-full border border-green-500/40 bg-green-500/10 px-5 py-2 text-sm font-bold text-green-400">
          {tag}
        </span>
      )}

      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg md:text-xl text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;