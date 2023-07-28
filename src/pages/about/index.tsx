import { useTitle } from "react-use";
import { EXPERIENCE } from "../../constants";

export const About = () => {
  useTitle("About | Shrihari");

  return (
    <section className="flex flex-col items-start justify-start w-full max-w-screen-xl gap-10 p-4 overflow-scroll md:px-0 no-scrollbar">
      <div className="flex flex-col justify-center w-full md:w-[50%] max-w-2xl space-y-4 text-base font-light">
        <h2 className="text-3xl font-bold text-slate-700 dark:text-white">
          About Me
        </h2>
        <p>
          I am a highly skilled Front End developer with a strong industry
          background in building websites, web applications, and hybrid mobile
          applications. My expertise lies in JavaScript, and I possess
          professional experience working extensively with React.js and Redux.
        </p>

        <p>
          Throughout my career, I have successfully leveraged React.js and Redux
          to create dynamic and interactive user interfaces, ensuring seamless
          user experiences and optimal performance. I have a deep understanding
          of React.js principles and best practices, enabling me to efficiently
          develop scalable and maintainable code bases.
        </p>

        <p>
          In addition to React.js, I have hands-on experience with Vue.js,
          Node.js, and React Native. This diverse skill set allows me to adapt
          to different project requirements and deliver high-quality solutions
          across multiple platforms.
        </p>

        <p>
          With a strong focus on code quality and best practices, I am
          passionate about creating clean and efficient code that is easily
          maintainable and scalable. I continuously stay updated with the latest
          industry trends and emerging technologies to ensure that my
          development approach remains cutting-edge and aligned with industry
          standards.
        </p>

        <p>
          I thrive in collaborative environments and have a proven track record
          of effectively collaborating with cross-functional teams, including
          designers, backend developers, and project stakeholders. This
          collaborative approach enables me to understand project goals and
          deliver innovative solutions that meet both technical requirements and
          user needs.
        </p>

        <p>
          Overall, my extensive experience in Front End development, specialized
          in JavaScript with a focus on React.js and Redux, combined with my
          proficiency in Vue.js, Node.js, and React Native, positions me as a
          versatile and valuable asset for any web or mobile development
          project.
        </p>
      </div>
      <div className="w-full flex-col md:w-[50%] items-start flex  gap-5">
        <h2 className="text-3xl font-bold text-slate-700 dark:text-white">
          Experience
        </h2>
        <ul className="w-full space-y-8 font-light">
          {EXPERIENCE.map(({ title, company, timeline }, idx) => (
            <li
              className="items-center justify-between block md:flex"
              key={`${title}-${idx}`}
            >
              <div>
                <h3 className="font-semibold">{company}</h3>
                <p>{title}</p>
              </div>
              <span>{timeline}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
