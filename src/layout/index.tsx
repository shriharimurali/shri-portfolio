import { ReactNode, useState } from "react";

import { MobileNav, Nav } from "../components";

import { Footer } from "../components";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`min-h-screen w-full ${darkToggle && "dark"} m-auto`}>
      <Nav darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
      <MobileNav darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
      <div className="flex flex-col items-center w-full h-[calc(100vh-96px)] md:h-[calc(100vh-120px)] bg-white dark:bg-slate-800 dark:text-white">
        {children}
      </div>
      <Footer />
    </div>
  );
};
