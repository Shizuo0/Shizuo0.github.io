import React from 'react';
import { motion, Variants } from 'framer-motion';

// Fade In Up Animation
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Fade In Animation
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Scale In Animation
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Slide In from Left
export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Slide In from Right
export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Stagger Container for children animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger Item (use inside staggerContainer)
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Motion Components with pre-configured animations
interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp: React.FC<MotionWrapperProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: '-50px' }}
    variants={fadeInUp}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export const ScaleIn: React.FC<MotionWrapperProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: '-50px' }}
    variants={scaleIn}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export const SlideInLeft: React.FC<MotionWrapperProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: '-50px' }}
    variants={slideInLeft}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export const SlideInRight: React.FC<MotionWrapperProps> = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: '-50px' }}
    variants={slideInRight}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Hover Effects
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
};

export const tapScale = {
  scale: 0.98,
};
