export default function Education({ theme }) {
  const isLight = theme === "light";
  
  const primaryText = isLight ? "text-black" : "text-red-50";
  const secondaryText = isLight ? "text-red-900" : "text-red-300";
  const borderColor = isLight ? "border-red-900/20" : "border-red-400/20";

  return (
    <section className="mb-10">
      {/* Заголовок у стилі Sidebar: малий шрифт, розріджені літери, апперкейс */}
      <h2 className={`text-xs font-bold tracking-[0.2em] uppercase border-b ${borderColor} pb-2 mb-4 ${isLight ? 'text-black' : 'text-white'}`}>
        Education
      </h2>
      
      <div className={`space-y-1 transition-colors duration-500 ${primaryText}`}>
        <p className="text-[13px] font-bold leading-tight uppercase">
          Lviv Polytechnic <br /> National University
        </p>
        <p className={`text-[12px] leading-relaxed ${secondaryText} font-medium`}>
          Bachelor's Degree in <br /> Cybersecurity
        </p>
        <p className="text-[11px] opacity-60 italic mt-1">
          2023 - 2027
        </p>
      </div>
    </section>
  );
}