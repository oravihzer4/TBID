import { Navbar, Hero, About, Portfolio, Projects, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
