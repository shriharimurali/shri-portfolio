import { useEffect } from "react";
import ReactGA from "react-ga";
import { Route, Routes } from "react-router-dom";

import { Home, Blog } from "./pages";
import { Layout } from "./layout";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-EHSCYHEWXL");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Layout>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  );
}

export default App;
