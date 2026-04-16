export default function Header({ theme }) {
  const isLight = theme === "light";
  
  // Кольори для лівої колонки (бордова гама)
  const textColor = isLight ? "text-black" : "text-red-50";
  const linkColor = isLight ? "text-red-900" : "text-red-300";

  return (
    <div className="space-y-4 transition-colors duration-500">
      {/* Ми прибрали h1, бо воно переїхало в Profile.jsx для правої колонки */}
      
      <div className="contact-item">
        <p className={`text-[11px] uppercase tracking-[0.2em] font-bold mb-1 ${isLight ? 'text-red-800' : 'text-red-400'}`}>
          Email
        </p>
        <a 
          href="mailto:solomiia.vorobel.kb.2023@lpnu.ua" 
          className={`text-[13px] break-all hover:underline transition-all ${textColor}`}
        >
          solomiia.vorobel.kb.2023@lpnu.ua
        </a>
      </div>

      <div className="contact-item">
        <p className={`text-[11px] uppercase tracking-[0.2em] font-bold mb-1 ${isLight ? 'text-red-800' : 'text-red-400'}`}>
          Location
        </p>
        <p className={`text-[13px] ${textColor}`}>
          Lviv, Ukraine
        </p>
      </div>

      <div className="contact-item">
        <p className={`text-[11px] uppercase tracking-[0.2em] font-bold mb-1 ${isLight ? 'text-red-800' : 'text-red-400'}`}>
          Social
        </p>
        <div className="flex gap-3 mt-1">
          <a href="#" className={`${linkColor} text-[13px] hover:font-bold transition-all`}>LinkedIn</a>
          <a href="#" className={`${linkColor} text-[13px] hover:font-bold transition-all`}>GitHub</a>
        </div>
      </div>
    </div>
  );
}