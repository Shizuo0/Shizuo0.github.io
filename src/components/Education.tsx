import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Education: React.FC = () => {
  const ref = useIntersectionObserver();

  return (
    <section id="formacao" className="container reveal" ref={ref}>
      <h2>Formação</h2>
      <div className="card">
        <h3>Bacharelado em Ciências da Computação</h3>
        <p>Universidade de Fortaleza (UNIFOR) — 01/2024 ~ 12/2027</p>
      </div>
    </section>
  );
};

export default Education;
