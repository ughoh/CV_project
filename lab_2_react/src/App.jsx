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

  return (
    <div
      className={`${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-black text-gray-300"} min-h-screen p-10 transition-colors duration-500`}
    >
      <header className="flex justify-between items-center mb-6">
        <Header theme={theme} />
        <button
          onClick={toggleTheme}
          className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-700 transition-all"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </header>

      <Profile theme={theme} />
      <Education theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Languages theme={theme} />
      <Reviews theme={theme} />
      <ContactForm theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
