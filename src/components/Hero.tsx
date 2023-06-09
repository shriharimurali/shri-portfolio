export const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row gap-10 md:gap-10 md:justify-between h-screen py-[70px] px-[50px] md:py-[120px] md:px-[100px] w-full max-w-screen-2xl">
      <div className="flex flex-col justify-between gap-5 md:gap-0">
        <h2 className="text-2xl md:text-4xl font-light">Hello 👋</h2>

        <p className="text-2xl md:text-4xl font-light leading-relaxed max-w-2xl">
          I'm{" "}
          <strong className="font-semibold text-slate-700 dark:text-white">
            Shrihari Murali,
          </strong>{" "}
          a design-minded front-end software engineer focused on building
          beautiful interfaces & experiences 🧑🏻‍💻
        </p>

        <p>
          Get in touch {""}
          <span className="relative group">
            <a
              href="mailto:shriharim006@gmail.com"
              className="text-base text-slate-700 dark:text-gray-400"
            >
              shriharim006@gmail.com
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all  group-hover:w-[209px]"></span>
          </span>
        </p>
      </div>

      <div className="flex items-center h-full justify-center md:justify-end">
        <div className="w-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-8 border-slate-100 shadow-2xl">
          <img
            src="/Profile.png"
            alt="profile-pic"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};
