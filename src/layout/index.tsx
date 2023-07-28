import { ReactNode, useState } from "react";

import { MobileNav, Nav } from "../components";

import { Footer } from "../components";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div
      className={`min-h-screen w-full justify-center ${darkToggle && "dark"}`}
    >
      <Nav darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
      <MobileNav darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
      <div className="flex flex-col items-center w-full h-[calc(100vh-56px)] md:h-[calc(100vh-80px)] bg-white dark:bg-slate-800 dark:text-white">
        {children}
        <Footer />
      </div>
    </div>
  );
};
