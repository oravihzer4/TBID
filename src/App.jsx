import { Navbar, Hero, Portfolio, Projects, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
