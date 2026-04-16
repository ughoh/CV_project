import { useEffect, useState } from "react";

export default function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const formEndpoint = "https://formspree.io/f/xzdkaojr";

  const isLight = theme === "light";
  
  // Оновлені кольори під бордову гаму
  const modalBg = isLight ? "bg-white" : "bg-[#1a0a0a]";
  const inputBg = isLight ? "bg-red-50/50" : "bg-[#2d1212]";
  const textColor = isLight ? "text-gray-900" : "text-red-50";
  const labelColor = isLight ? "text-red-900" : "text-red-400";
  const borderColor = isLight ? "border-red-200" : "border-red-900/50";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // Поява через 60 секунд

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal flex justify-center items-center fixed inset-0 bg-black/80 z-50 p-4 backdrop-blur-sm">
      <div className={`${modalBg} ${textColor} p-8 rounded-lg border-2 ${isLight ? 'border-red-100' : 'border-red-900'} relative w-full max-w-md transition-all duration-500 shadow-[0_20px_50px_rgba(128,0,0,0.3)]`}>
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-red-600 hover:text-red-400 text-3xl font-light transition-colors"
        >
          &times;
        </button>

        <h2 className={`text-2xl font-bold mb-6 tracking-tight ${isLight ? 'text-red-900' : 'text-red-100'}`}>
          Feedback Form
        </h2>
        
        <form action={formEndpoint} method="POST" className="space-y-4">
          <div>
            <label className={`block mb-1 text-xs uppercase tracking-widest font-bold ${labelColor}`} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={`w-full p-3 rounded-md border ${borderColor} ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-red-900/50 transition-all`}
            />
          </div>

          <div>
            <label className={`block mb-1 text-xs uppercase tracking-widest font-bold ${labelColor}`} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={`w-full p-3 rounded-md border ${borderColor} ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-red-900/50 transition-all`}
            />
          </div>

          <div>
            <label className={`block mb-1 text-xs uppercase tracking-widest font-bold ${labelColor}`} htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className={`w-full p-3 rounded-md border ${borderColor} ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-red-900/50 transition-all`}
            />
          </div>

          <div>
            <label className={`block mb-1 text-xs uppercase tracking-widest font-bold ${labelColor}`} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className={`w-full p-3 rounded-md border ${borderColor} ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-red-900/50 transition-all resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-red-900 hover:bg-red-800 text-white font-bold py-3 px-4 rounded-md transition-all shadow-lg active:scale-95 uppercase tracking-widest text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
