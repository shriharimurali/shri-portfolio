export const Hero = () => {
  return (
    <header className="flex flex-col justify-around h-screen py-[70px] px-[50px] md:py-[120px] md:px-[100px]  w-full max-w-screen-2xl">
      <h2 className="text-2xl md:text-4xl font-light">Hello 👋</h2>

      <p className="text-2xl md:text-4xl font-light leading-relaxed max-w-2xl">
        I'm{" "}
        <strong className="font-semibold text-slate-700">
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
            className="text-base text-slate-700"
          >
            shriharim006@gmail.com
          </a>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all  group-hover:w-[209px]"></span>
        </span>
      </p>
    </header>
  );
};
