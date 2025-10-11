import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import { Skill } from '../types';
import { useFadeIn, useStaggerAnimation, useHoverAnimation } from '../hooks/useGSAP';

const Skills: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();
  
  // Animações GSAP
  const titleRef = useFadeIn(0.5, 0.8);
  const skillsGridRef = useStaggerAnimation(0.1);

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
      <h2 
        ref={titleRef}
        className="hover-glow bg-gradient-to-r from-text-secondary via-accent to-accent-light bg-clip-text text-transparent"
      >
        {t('skills.title')}
      </h2>
      <div 
        ref={skillsGridRef}
        className="skills-grid"
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

// Componente individual para cada skill
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const hoverRef = useHoverAnimation();
  
  return (
    <div
      ref={hoverRef}
      className={`skill skill-${skill.category} hover-lift hover-glow group`}
      data-category={skill.category}
    >
      <div className="relative overflow-hidden">
        <span className="relative z-10">{skill.name}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default Skills;
