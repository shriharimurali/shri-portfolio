import { Section } from "./Section";
import { List } from "./List";
import { LANGUAGES, DESIGN, TOOLS, FRAMEWORKS } from "../constants";

export const Skills = () => {
  return (
    <Section heading="Languages">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 text-base">
        <List list={LANGUAGES} heading />
        <List list={FRAMEWORKS} heading />
        <List list={TOOLS} heading />
        <List list={DESIGN} heading />
      </div>
    </Section>
  );
};
