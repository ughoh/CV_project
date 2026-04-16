import { useEffect, useState } from "react";

export default function Footer({ theme }) {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: "",
    platform: ""
  });

  const textColor = theme === "light" ? "text-gray-600" : "text-gray-400";

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
    <footer className={`mt-12 pt-6 border-t border-red-900 ${textColor} text-sm text-center transition-colors duration-500`}>
      <p>© 2026 Solomiia Vorobel</p>
      <p>User Agent: {systemInfo.userAgent}</p>
      <p>Platform: {systemInfo.platform}</p>
    </footer>
  );
}