export default function Skills({ theme }) {
  const isLight = theme === "light";
  
  // Робимо кольори ще насиченішими для кращої читабельності
  const primaryText = isLight ? "text-black" : "text-white";
  const borderColor = isLight ? "border-red-900/40" : "border-red-600/40";
  const dotColor = isLight ? "bg-red-800" : "bg-red-500";

  const skills = [
    "Python",
    "FastAPI",
    "SQL (PostgreSQL, SQLite)",
    "Git",
    "Basic HTML",
    "Information Security"
  ];

  return (
    <section className="mb-12">
      {/* Збільшили заголовок: text-sm замість xs, font-black для масивності */}
      <h2 className={`text-sm font-black tracking-[0.25em] uppercase border-b-2 ${borderColor} pb-3 mb-6 ${isLight ? 'text-red-900' : 'text-red-400'}`}>
        Skills
      </h2>

      <div className="flex flex-col gap-4 transition-colors duration-500">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 group">
            {/* Збільшений маркер-ромб */}
            <span className={`w-2 h-2 rotate-45 ${dotColor} shrink-0 shadow-[0_0_10px_rgba(255,0,0,0.2)]`} />
            
            {/* Текст став 15px (text-[15px]) та напівжирним */}
            <span className={`text-[15px] font-bold leading-tight tracking-normal ${primaryText} group-hover:text-red-600 transition-colors`}>
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}