import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const ref = useIntersectionObserver();

  const skills: Skill[] = [
    { name: 'Java', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'Ruby on Rails', category: 'backend' },
    { name: 'Kotlin (Android)', category: 'mobile' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'JavaScript / HTML / CSS', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Postgres / MySQL', category: 'database' },
    { name: 'Docker', category: 'tools' },
    { name: 'Git & GitHub', category: 'tools' },
  ];

  return (
    <section id="skills" className="container reveal" ref={ref}>
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill skill-${skill.category}`}
            data-category={skill.category}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
