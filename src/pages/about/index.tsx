import { useTitle } from "react-use";

export const About = () => {
  useTitle("About | Shrihari");

  return (
    <section className="flex items-center justify-center w-full h-full max-w-screen-xl gap-10 p-5 md:px-4 md:flex-row md:justify-between">
      About
    </section>
  );
};

export default About;
