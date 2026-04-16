import { useEffect, useState } from "react";

export default function Footer({ theme }) {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: "",
    platform: ""
  });

  const isLight = theme === "light";
  
  const textColor = isLight ? "text-gray-400" : "text-red-900/40";
  const copyrightColor = isLight ? "text-gray-600" : "text-red-200/60";
  const borderColor = isLight ? "border-gray-200" : "border-red-900/30";

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));

    const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));
    if (savedInfo) {
      setSystemInfo(savedInfo);
    }
  }, []);

  return (
    <footer className={`mt-16 pt-8 border-t ${borderColor} transition-colors duration-500`}>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
        <div className={`${copyrightColor} text-[11px] uppercase tracking-widest font-medium`}>
          © 2026 Solomiia Vorobel
        </div>

        <div className={`${textColor} text-[10px] leading-relaxed max-w-[400px] text-center md:text-right font-mono italic`}>
          <p>System context: {systemInfo.platform}</p>
          <p className="opacity-70 truncate" title={systemInfo.userAgent}>
            {systemInfo.userAgent}
          </p>
        </div>
      </div>
    </footer>
  );
}