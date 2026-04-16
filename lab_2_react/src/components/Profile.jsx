export default function Profile({ theme }) {
  const isLight = theme === "light";
  
  // Кольори для правої (основної) колонки
  const nameColor = isLight ? "text-black" : "text-white";
  const jobTitleColor = isLight ? "text-red-950" : "text-red-400";
  const textColor = isLight ? "text-gray-800" : "text-red-50/90";

  return (
    <div className="mb-12 transition-colors duration-500">
      {/* Величезне ім'я, як на референсі */}
      <h1 className={`text-6xl md:text-[80px] font-black leading-[0.85] uppercase tracking-tighter mb-4 ${nameColor}`}>
        Solomiia <br /> 
        <span className="inline-block mt-2">Vorobel</span>
      </h1>

      {/* Підзаголовок / Професія */}
      <p className={`text-sm md:text-lg font-medium tracking-[0.3em] uppercase mb-8 ${jobTitleColor}`}>
        Cybersecurity Student & <br className="md:hidden" /> Backend Developer
      </p>

      {/* Короткий текст "Про себе" */}
      <div className="max-w-[480px]">
        <p className={`text-[15px] leading-relaxed ${textColor}`}>
          University student specializing in <span className="font-bold">Cybersecurity</span> with a strong interest in backend development. 
          Actively improving my Python skills and working on personal projects, focusing on building secure and scalable server-side applications.
        </p>
      </div>
    </div>
  );
}