import { useEffect } from "react";
import ReactGA from "react-ga";
import { Route, Routes } from "react-router-dom";

import { Home, Blog } from "./pages";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-EHSCYHEWXL");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
