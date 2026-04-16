export default function Header({ theme }) {
  const isLight = theme === "light";
  const textColor = isLight ? "text-gray-800" : "text-gray-300";
  const subTitleColor = isLight ? "text-red-700" : "text-red-500";

  return (
    <div className="mb-10 border-b-2 border-red-900 pb-6 transition-colors duration-500">
      <h1 className="text-4xl font-bold text-red-800 mb-2">
        Solomiia Vorobel
      </h1>

      <p className={`${textColor} transition-colors duration-500`}>
        <span className={`${subTitleColor} font-semibold transition-colors duration-500`}>Email:</span> solomiia.vorobel.kb.2023@lpnu.ua
      </p>

      <p className={`${textColor} transition-colors duration-500`}>
        <span className={`${subTitleColor} font-semibold transition-colors duration-500`}>Location:</span> Lviv, Ukraine
      </p>
    </div>
  );
}