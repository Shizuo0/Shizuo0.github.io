import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollEffects } from './hooks/useScrollEffects';
import { TranslationProvider } from './contexts/TranslationContext';

function App() {
  useScrollEffects();

  return (
    <TranslationProvider>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </TranslationProvider>
  );
}

export default App;
