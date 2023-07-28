import { Suspense, lazy, useEffect } from "react";
import ReactGA from "react-ga";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout";
import { Spinner } from "./components/Spinner";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-EHSCYHEWXL");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const Home = lazy(() => import("./pages/home"));
  const About = lazy(() => import("./pages/about"));
  const Blog = lazy(() => import("./pages/blog"));
  const TechStack = lazy(() => import("./pages/tech-stack"));

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tech-stack" element={<TechStack />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
