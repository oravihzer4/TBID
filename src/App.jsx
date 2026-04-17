import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Hero, Ad, About, Services, Portfolio, Footer } from "./components";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Ad />
      <About />
      {/* <Services /> */}
      <Footer />
    </>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    let attempts = 0;

    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < 12) {
        window.requestAnimationFrame(tryScroll);
      }
    };

    window.requestAnimationFrame(tryScroll);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
