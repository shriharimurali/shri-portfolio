import { useTitle } from "react-use";

export const Home = () => {
  useTitle("Home | Shrihari | Frontend Developer");

  return (
    <header className="flex flex-col items-center justify-center w-full h-full max-w-screen-xl gap-10 p-5 md:px-4 md:flex-row md:justify-between">
      <div className="flex flex-col justify-between gap-1 md:gap-2">
        <h1 className="text-xl font-bold md:text-4xl">Hi, 👋</h1>

        <p className="max-w-2xl text-xl font-bold leading-relaxed md:text-4xl">
          My Name is
        </p>

        <h2 className="text-xl font-bold text-transparent md:text-5xl bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
          Shrihari Murali
        </h2>

        <p className="text-1xl md:text-2xl max-w-[500px]">
          a design-minded front-end software engineer focused on building
          beautiful interfaces & experiences 🧑🏻‍💻
        </p>
      </div>
      <div className="p-1 overflow-hidden transition-all duration-300 rounded-full shadow-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:hover:shadow-violet-500 md:group">
        <img
          src="/Profile.webp"
          alt="profile-pic"
          className="rounded-full lg:w-[300px] md:w-[300px] w-[200px]"
          width="200"
          height="200"
        />
      </div>
    </header>
  );
};

export default Home;
