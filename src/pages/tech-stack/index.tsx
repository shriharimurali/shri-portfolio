import { useTitle } from "react-use";

import { languages, libraries, tools, design } from "../../constants";

export const TechStack = () => {
  useTitle("Tech Stack | Shrihari");

  return (
    <section className="flex flex-col items-start justify-start w-full max-w-screen-xl gap-10 p-4 overflow-scroll no-scrollbar">
      <div>
        <h2 className="mb-2 text-3xl font-bold text-slate-700 dark:text-white">
          My Tech Stack
        </h2>

        <p className="text-base">
          Technologies I’ve been working with recently
        </p>
      </div>

      <div className="w-full space-y-2">
        <strong className="text-xl font-bold text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
          Languages:
        </strong>
        <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
          {Object.keys(languages).map((icon, idx) => (
            <img
              className="w-20 h-20 p-1 transition-all duration-300 rounded-lg md:hover:shadow-md"
              src={languages[icon]}
              key={idx}
              alt="icon"
              width="24"
              height="24"
            />
          ))}
        </div>
      </div>

      <div className="w-full space-y-2">
        <strong className="text-xl font-bold text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
          Libraries/Frameworks:
        </strong>
        <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
          {Object.keys(libraries).map((icon, idx) => (
            <img
              className="w-20 h-20 p-1 transition-all duration-300 rounded-lg md:hover:shadow-md"
              src={libraries[icon]}
              key={idx}
              alt="icon"
              width="24"
              height="24"
            />
          ))}
        </div>
      </div>

      <div className="w-full space-y-2">
        <strong className="text-xl font-bold text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
          Tools:
        </strong>
        <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
          {Object.keys(tools).map((icon, idx) => (
            <img
              className="w-20 h-20 p-1 transition-all duration-300 rounded-lg md:hover:shadow-md"
              src={tools[icon]}
              key={idx}
              alt="icon"
              width="24"
              height="24"
            />
          ))}
        </div>
      </div>

      <div className="w-full space-y-2">
        <strong className="text-xl font-bold text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
          Design:
        </strong>
        <div className="flex items-center justify-center gap-10 md:justify-start">
          {Object.keys(design).map((icon, idx) => (
            <img
              className="w-20 h-20 p-1 transition-all duration-300 rounded-lg md:hover:shadow-md"
              src={design[icon]}
              key={idx}
              alt="icon"
              width="24"
              height="24"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
