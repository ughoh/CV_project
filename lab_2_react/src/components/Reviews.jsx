import { useEffect, useState } from "react";

export default function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const variantNumber = 6;

  const isLight = theme === "light";
  const cardBg = isLight ? "bg-white" : "bg-gray-900";
  const textColor = isLight ? "text-gray-900" : "text-gray-200";
  const emailColor = isLight ? "text-gray-600" : "text-gray-400";

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
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-red-700 border-l-4 border-red-900 pl-3 mb-3">Reviews</h2>
      {comments.map(comment => (
        <div 
          key={comment.id} 
          className={`p-4 mb-4 border border-red-900 rounded-md transition-colors duration-500 ${cardBg} ${textColor}`}
        >
          <h3 className="font-semibold">{comment.name}</h3>
          <p className={`text-sm ${emailColor} transition-colors duration-500`}>Email: {comment.email}</p>
          <p className="mt-2">{comment.body}</p>
        </div>
      ))}
    </section>
  );
}