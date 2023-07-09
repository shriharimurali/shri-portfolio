import { Hero, Background, Skills, Experience, Footer } from "../../components";
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
