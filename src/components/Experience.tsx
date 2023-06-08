import { Section } from "./Section";
import { EXPERIENCE } from "../constants";
import PDF from "../assets/cv.pdf";

export const Experience = () => {
  const onResumeClick = () => {
    window.open(PDF);
  };
  return (
    <Section heading="Experience">
      <ul className="w-full space-y-10 font-light max-w-2xl">
        {EXPERIENCE.map(({ title, company, timeline }, idx) => (
          <li
            className="justify-between items-center block md:flex"
            key={`${title}-${idx}`}
          >
            <div>
              <h4 className="font-semibold">{company}</h4>
              <p>{title}</p>
            </div>
            <span>{timeline}</span>
          </li>
        ))}

        <li className="!mt-14 md:!mt-20">
          <p className="relative group text-center md:text-left">
            <a
              onClick={onResumeClick}
              className="text-2xl font-semibold text-slate-700 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My CV
            </a>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all  group-hover:w-[142px]"></span>
          </p>
        </li>
      </ul>
    </Section>
  );
};
