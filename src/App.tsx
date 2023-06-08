import { Hero, Background, Skills, Experience, Footer } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen w-full">
      <Hero />
      <Background />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
