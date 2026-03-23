import { Routes, Route } from "react-router-dom";
import { Navbar, Hero, About, Portfolio, Footer } from "./components";
import ProjectDetail from "./pages/ProjectDetail";
import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
