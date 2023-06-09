import { useState } from "react";
import { Hero, Background, Skills, Experience, Footer } from "./components";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={` min-h-screen w-full ${darkToggle && "dark"}`}>
      <div className="flex flex-col items-center bg-white min-h-screen w-full dark:bg-slate-800 dark:text-white">
        <div className="flex items-center justify-end gap-4 w-full absolute py-10 px-10">
          <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
            Light
          </span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkToggle}
              readOnly
            />
            <div
              onClick={() => {
                setDarkToggle(!darkToggle);
              }}
              className="w-11 h-6 border bg-white-200 rounded-full peer peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800"
            ></div>
          </label>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Dark
          </span>
        </div>
        <Hero />
        <Background />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
