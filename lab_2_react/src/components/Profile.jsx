export default function Profile({ theme }) {
  const textColor = theme === "light" ? "text-gray-900" : "text-gray-300";

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-red-700 border-l-4 border-red-900 pl-3 mb-3">
        Profile
      </h2>

      <p className={`${textColor} transition-colors duration-500`}>
        University student specializing in Cybersecurity with a strong interest in backend development.
        Actively improving my Python skills and working on personal and academic projects.
        Motivated to grow as a professional developer and work with international clients.
      </p>
    </div>
  );
}