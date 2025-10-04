import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollEffects } from './hooks/useScrollEffects';

function App() {
  useScrollEffects();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
