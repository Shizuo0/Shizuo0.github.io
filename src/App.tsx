import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TranslationProvider } from './contexts/TranslationContext';

function App() {
  return (
    <TranslationProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-bg">
        {/* Background moderno com efeitos violeta */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-secondary to-bg opacity-90" />
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-32 w-96 h-96 bg-accent-light/8 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Header */}
        <Header />

        {/* Conteúdo principal */}
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </TranslationProvider>
  );
}

export default App;
