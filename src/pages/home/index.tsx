import { Hero, Background, Skills, Experience } from "../../components";
import { Layout } from "../../layout";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Background />
      <Skills />
      <Experience />
    </Layout>
  );
};
