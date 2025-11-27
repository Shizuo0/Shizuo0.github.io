import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default HomePage;
