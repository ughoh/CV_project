export default function Experience({ theme }) {
  const isLight = theme === "light";
  const textColor = isLight ? "text-gray-900" : "text-gray-300";
  const subTitleColor = isLight ? "text-red-700" : "text-red-500";

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-red-700 border-l-4 border-red-900 pl-3 mb-3">
        Work Experience
      </h2>

      <p className={`${textColor} transition-colors duration-500`}>
        <span className={`${subTitleColor} font-semibold transition-colors duration-500`}>
          Academic & Personal Projects:
        </span>
        <br />
        - Developed backend services using FastAPI
        <br />
        - Designed and managed databases
        <br />
        - Built REST APIs
        <br />
        - Performed basic security analysis in lab projects
      </p>
    </div>
  );
}