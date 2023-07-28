export const Footer = () => {
  return (
    <footer className="w-full h-10 px-4 m-auto text-sm text-center md:text-base dark:bg-slate-800 dark:text-white">
      <div className="flex items-center justify-center w-full max-w-screen-xl m-auto md:justify-end">
        Designed and developed by{" "}
        <strong className="mx-2 text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
          Shrihari M{" "}
        </strong>
        with{" "}
        <strong className="ml-2 text-black transition-all duration-300 hover:text-red-600">
          ❤️
        </strong>
      </div>
    </footer>
  );
};
