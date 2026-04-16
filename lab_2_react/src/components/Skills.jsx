export default function Skills({ theme }) {
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-300";

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-red-700 border-l-4 border-red-900 pl-3 mb-3 transition-colors duration-500">
        Skills
      </h2>

      <ul className={`list-disc list-inside ${textColor} space-y-1 transition-colors duration-500`}>
        <li>Python</li>
        <li>FastAPI</li>
        <li>SQL (PostgreSQL, SQLite)</li>
        <li>Git</li>
        <li>Basic HTML</li>
        <li>Information Security Fundamentals</li>
      </ul>
    </div>
  );
}