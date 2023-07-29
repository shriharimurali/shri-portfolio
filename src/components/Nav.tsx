import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "../constants";
import { MenuIcon } from "./MenuIcon";
import { BackIcon } from "./BackIcon";

interface NavProps {
  darkToggle: boolean;
  setDarkToggle: Dispatch<SetStateAction<boolean>>;
}

export const Nav = ({ darkToggle, setDarkToggle }: NavProps) => (
  <div className="hidden w-full h-20 dark:bg-slate-800 md:flex">
    <nav className="flex items-center justify-end w-full max-w-screen-xl px-4 m-auto">
      <div className="flex gap-12 font-light">
        {Menu.map(({ title, url }) => (
          <Link to={url} key={title} className="dark:text-slate-300">
            {title}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end w-auto gap-4 ml-10">
        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-slate-300">
          Light
        </span>
        <label
          className="relative inline-flex items-center cursor-pointer"
          htmlFor="switch"
        >
          <input
            id="switch"
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
        <span className="text-sm font-medium text-gray-900 dark:text-slate-300">
          Dark
        </span>
      </div>
    </nav>
  </div>
);

export const MobileNav = ({ darkToggle, setDarkToggle }: NavProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`flex md:hidden transition-all duration-300 w-full bg-white dark:bg-slate-900 fixed inset-0 z-20 ${
          showMenu ? "translate-x-0" : "-translate-x-96"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full gap-10 text-xl font-medium">
          {Menu.map(({ title, url }) => (
            <Link
              to={url}
              key={title}
              className="dark:text-slate-300"
              onClick={() => setShowMenu(false)}
            >
              {title}
            </Link>
          ))}
          <p className="text-base dark:text-slate-300">Made with ❤️</p>

          <div className="flex items-center justify-end w-auto gap-4">
            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-slate-300">
              Light
            </span>
            <label
              className="relative inline-flex items-center cursor-pointer"
              htmlFor="mobile-switch"
            >
              <input
                id="mobile-switch"
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
            <span className="text-sm font-medium text-gray-900 dark:text-slate-300">
              Dark
            </span>
          </div>
        </div>

        <button
          className="absolute w-6 h-6 top-10 left-10"
          onClick={() => setShowMenu(!showMenu)}
        >
          <BackIcon className="w-full h-full text-slate-700 dark:text-slate-300" />
        </button>
      </div>
      <div className="flex items-center w-full px-4 h-14 md:hidden dark:bg-slate-800">
        <button className="w-6 h-6" onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon className="w-full h-full text-slate-700 dark:text-slate-300" />
        </button>
      </div>
    </>
  );
};
