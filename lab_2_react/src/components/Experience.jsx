export default function Experience({ theme }) {
  const isLight = theme === "light";
  
  const titleColor = isLight ? "text-black" : "text-white";
  const contentColor = isLight ? "text-gray-800" : "text-red-50/80";
  const dateColor = isLight ? "text-gray-500" : "text-red-300/60";
  const borderColor = isLight ? "border-black" : "border-red-900";

  return (
    <section className="mb-12">
      <h2 className={`text-sm font-bold tracking-[0.2em] uppercase border-b-2 ${borderColor} pb-2 mb-8 ${titleColor}`}>
        Experience
      </h2>

      <div className="space-y-10">
        <div className="experience-item">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className={`text-[15px] font-bold uppercase tracking-tight ${titleColor}`}>
              Backend Developer <span className="mx-2 font-light opacity-50">|</span> 
              <span className="text-red-800 dark:text-red-400"> Academic & Personal Projects</span>
            </h3>
            <span className={`text-[12px] font-medium uppercase tracking-wider ${dateColor}`}>
              2023 - Present
            </span>
          </div>
          
          <div className={`text-[14px] leading-relaxed space-y-2 ${contentColor}`}>
            <p>
              Development of server-side solutions using FastAPI. Designing database architecture 
              (PostgreSQL, SQLite) and integrating REST APIs for academic and personal projects.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 opacity-90">
              <li>Optimizing database queries with SQLAlchemy</li>
              <li>Setting up development environments and Alembic migrations</li>
              <li>Implementing secure authentication mechanisms</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
            <h3 className={`text-[15px] font-bold uppercase tracking-tight ${titleColor}`}>
              Security Analyst <span className="mx-2 font-light opacity-50">|</span> 
              <span className="text-red-800 dark:text-red-400"> Lab Research</span>
            </h3>
            <span className={`text-[12px] font-medium uppercase tracking-wider ${dateColor}`}>
              2024
            </span>
          </div>
          <p className={`text-[14px] leading-relaxed ${contentColor}`}>
            Conducting vulnerability analysis (CORS, JWT exploitation) and automated network 
            scanning using Nessus. Testing systems for resistance to brute-force attacks.
          </p>
        </div>
      </div>
    </section>
  );
}