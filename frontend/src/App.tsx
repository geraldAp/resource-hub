import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TechSpace from "./pages/TechSpace";
import Layout from "./components/Layout";
import ResourceIntroduction from "./pages/ResourceIntroduction";
import Resources from "./pages/Resources";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physics/resources" element={<Explore />}>
          <Route index element={<ResourceIntroduction />} />
          <Route path=":courseSlug/:resourceSlug" element={<Resources/>} />
        </Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn-a-skill" element={<TechSpace />} />
      </Routes>
    </Layout>
  );
}

export default App;
