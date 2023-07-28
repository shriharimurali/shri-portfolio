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
  const Blog = lazy(() => import("./pages/blog"));

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
