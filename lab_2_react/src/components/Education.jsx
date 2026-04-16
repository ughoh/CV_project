export default function Education({ theme }) {
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-300";

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-red-700 border-l-4 border-red-900 pl-3 mb-3">
        Education
      </h2>
      
      <p className={`${textColor} transition-colors duration-500`}>
        Lviv Polytechnic National University
        <br />
        Bachelor's Degree in Cybersecurity
      </p>
    </div>
  );
}
