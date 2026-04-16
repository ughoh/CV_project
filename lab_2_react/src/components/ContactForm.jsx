import { useEffect, useState } from "react";

export default function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const formEndpoint = "https://formspree.io/f/xzdkaojr";

  const isLight = theme === "light";
  const modalBg = isLight ? "bg-white" : "bg-gray-900";
  const inputBg = isLight ? "bg-gray-50" : "bg-gray-800";
  const textColor = isLight ? "text-gray-900" : "text-gray-200";
  const labelColor = isLight ? "text-red-700" : "text-red-500";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal flex justify-center items-center fixed inset-0 bg-black bg-opacity-70 z-50 p-4">
      <div className={`${modalBg} ${textColor} p-6 rounded-md border border-red-900 relative w-11/12 max-w-md transition-colors duration-500 shadow-2xl`}>
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-red-600 hover:text-red-400 text-2xl font-bold transition-colors"
        >
          &times;
        </button>

        <h2 className="text-red-800 text-xl font-bold mb-4">Feedback Form</h2>
        
        <form action={formEndpoint} method="POST">
          <label className={`block mt-3 mb-1 ${labelColor} font-medium`} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={`w-full p-2 rounded border border-red-900 ${inputBg} ${textColor} focus:outline-none focus:ring-1 focus:ring-red-700`}
          />

          <label className={`block mt-3 mb-1 ${labelColor} font-medium`} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`w-full p-2 rounded border border-red-900 ${inputBg} ${textColor} focus:outline-none focus:ring-1 focus:ring-red-700`}
          />

          <label className={`block mt-3 mb-1 ${labelColor} font-medium`} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={`w-full p-2 rounded border border-red-900 ${inputBg} ${textColor} focus:outline-none focus:ring-1 focus:ring-red-700`}
          />

          <label className={`block mt-3 mb-1 ${labelColor} font-medium`} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className={`w-full p-2 rounded border border-red-900 ${inputBg} ${textColor} focus:outline-none focus:ring-1 focus:ring-red-700`}
          />

          <button
            type="submit"
            className="mt-5 w-full bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors shadow-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
