import { useState, useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const hour = new Date().getHours();
      setTheme(hour >= 7 && hour < 21 ? "light" : "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  const themeClasses = theme === "light" 
    ? "bg-gray-100 text-black" 
    : "bg-[#050000] text-white";

  const sidebarBg = theme === "light" 
    ? "bg-[#FADBD8]"
    : "bg-[#3e1e1e]";

  const mainBg = theme === "light" 
    ? "bg-white" 
    : "bg-[#1a0a0a]";

  return (
    <div className={`${themeClasses} min-h-screen flex justify-center items-start p-4 md:p-10 transition-colors duration-500`}>
      
      <div className={`flex flex-col md:flex-row w-full max-w-[900px] shadow-2xl min-h-[1100px] overflow-hidden`}>
        
        <aside className={`${sidebarBg} w-full md:w-[35%] p-8 transition-colors duration-500`}>
          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-red-900/20 pb-2 mb-4">Objective</h2>
              <p className="text-sm leading-relaxed">
                To obtain a challenging position where my technical skills can drive innovation and excellence.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold tracking-widest uppercase border-b border-red-900/20 pb-2 mb-4">Contact</h2>
              <Header theme={theme} />
              <button
                onClick={toggleTheme}
                className={`mt-6 w-full py-2 text-[13px] font-bold uppercase tracking-widest border transition-all duration-300
                  ${theme === "light" 
                    ? "border-red-900 text-red-900 hover:bg-red-900 hover:text-white" 
                    : "border-red-200 text-red-200 hover:bg-red-200 hover:text-red-900"
                  }`}
              >
                {theme === "light" ? "Switch Theme" : "Switch Theme"}
              </button>
            </section>

            <Education theme={theme} />
            <Skills theme={theme} />
            <Languages theme={theme} />
          </div>
        </aside>

        <main className={`${mainBg} w-full md:w-[65%] p-10 md:p-14 transition-colors duration-500`}>
          <header className="mb-10">
            <Profile theme={theme} />
          </header>

          <div className="space-y-10">
            <Experience theme={theme} />
            <Reviews theme={theme} />
            <ContactForm theme={theme} />
          </div>

          <footer>
            <Footer theme={theme} />
          </footer>
        </main>

      </div>
    </div>
  );
}