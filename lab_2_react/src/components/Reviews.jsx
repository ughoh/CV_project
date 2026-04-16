import { useEffect, useState } from "react";

export default function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const variantNumber = 6;

  const isLight = theme === "light";
  
  // Адаптуємо кольори під основну білу/чорну колонку
  const titleColor = isLight ? "text-black" : "text-white";
  const cardBg = isLight ? "bg-red-50/30" : "bg-[#1f0d0d]"; // Дуже легкий винний відтінок
  const textColor = isLight ? "text-gray-800" : "text-red-50/90";
  const accentColor = isLight ? "text-red-900" : "text-red-400";
  const borderColor = isLight ? "border-black" : "border-red-900";

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`);
        const data = await response.json();
        setComments(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [variantNumber]);

  return (
    <section className="mt-12">
      {/* Заголовок у загальному стилі правої колонки */}
      <h2 className={`text-sm font-bold tracking-[0.2em] uppercase border-b-2 ${borderColor} pb-2 mb-8 ${titleColor}`}>
        Employer Comments
      </h2>

      <div className="grid gap-6">
        {comments.map(comment => (
          <div 
            key={comment.id} 
            className={`p-6 border-l-4 border-red-900 ${cardBg} transition-all duration-500 hover:shadow-md group`}
          >
            <h3 className={`font-bold uppercase text-[14px] tracking-tight ${accentColor}`}>
              {comment.name}
            </h3>
            <p className={`text-[11px] font-mono italic opacity-60 mb-3 ${isLight ? 'text-gray-600' : 'text-red-200'}`}>
              {comment.email}
            </p>
            <p className={`text-[14px] leading-relaxed italic ${textColor}`}>
              "{comment.body}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}