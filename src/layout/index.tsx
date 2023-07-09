import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

import { Footer } from "../components";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`min-h-screen w-full ${darkToggle && "dark"}`}>
      <div className="flex flex-col items-center w-full min-h-screen bg-white dark:bg-slate-800 dark:text-white">
        <nav className="flex items-center justify-end w-full min-h-10">
          <Link to="/blog">Blog</Link>
          <div className="right-0 flex items-center justify-end w-auto gap-4 px-10 py-10">
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
              Light
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                id="switch"
                type="checkbox"
                className="sr-only peer"
                checked={darkToggle}
                readOnly
              />
              <label htmlFor="switch" className="hidden"></label>
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
        </nav>
        {children}
        <Footer />
      </div>
    </div>
  );
};
