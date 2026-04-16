import { useEffect, useState } from "react";

export default function Footer({ theme }) {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: "",
    platform: ""
  });

  const isLight = theme === "light";
  
  // Прибираємо сірий (gray-200), замінюємо на бордовий з низькою непрозорістю
  const textColor = isLight ? "text-red-900/40" : "text-red-900/40";
  const copyrightColor = isLight ? "text-red-900/60" : "text-red-200/60";
  const borderColor = isLight ? "border-red-900/10" : "border-red-900/30";

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform
    };
    setSystemInfo(info);
  }, []);

  return (
    // Додав overflow-hidden щоб нічого не вилазило за межі контейнера
    <footer className={`mt-16 pt-8 border-t ${borderColor} transition-colors duration-500 overflow-hidden w-full`}>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        {/* Копірайт */}
        <div className={`${copyrightColor} text-[11px] uppercase tracking-widest font-bold whitespace-nowrap`}>
          © 2026 Solomiia Vorobel
        </div>

        {/* Системна інфа - додано break-all та обмеження ширини */}
        <div className={`${textColor} text-[10px] leading-relaxed max-w-full md:max-w-[300px] text-center md:text-right font-mono italic`}>
          <p className="mb-1 uppercase tracking-tighter opacity-80">System: {systemInfo.platform}</p>
          <p 
            className="opacity-60 break-all line-clamp-2 md:line-clamp-none" 
            title={systemInfo.userAgent}
          >
            {systemInfo.userAgent}
          </p>
        </div>

      </div>
    </footer>
  );
}