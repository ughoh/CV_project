export default function Languages({ theme }) {
  const isLight = theme === "light";
  
  // Адаптуємо кольори під фон сайдбару
  const primaryText = isLight ? "text-black" : "text-red-50";
  const secondaryText = isLight ? "text-red-900" : "text-red-300";
  const borderColor = isLight ? "border-red-900/20" : "border-red-400/20";

  const languages = [
    { name: "Ukrainian", level: "Native" },
    { name: "English", level: "Upper-Intermediate" }
  ];

  return (
    <section className="mb-10">
      {/* Заголовок у стилі Sidebar */}
      <h2 className={`text-xs font-bold tracking-[0.2em] uppercase border-b ${borderColor} pb-2 mb-4 ${isLight ? 'text-black' : 'text-white'}`}>
        Languages
      </h2>

      <div className="space-y-3 transition-colors duration-500">
        {languages.map((lang, index) => (
          <div key={index} className="flex flex-col">
            <span className={`text-[13px] font-bold uppercase tracking-tight ${primaryText}`}>
              {lang.name}
            </span>
            <span className={`text-[11px] italic opacity-80 ${secondaryText}`}>
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}