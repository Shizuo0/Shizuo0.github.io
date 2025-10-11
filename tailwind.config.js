/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nova paleta de cores - Preto com detalhes de azul violeta claro
        'bg': {
          DEFAULT: '#0a0a0a',        // Preto principal
          'secondary': '#1a1a1a',    // Preto secundário
          'tertiary': '#2a2a2a',     // Preto terciário
        },
        'text': {
          DEFAULT: '#e0e0e0',        // Texto principal
          'secondary': '#f5f5f5',    // Texto secundário
          'muted': '#a0a0a0',        // Texto suave
        },
        'accent': {
          DEFAULT: '#8b5cf6',        // Azul violeta principal
          'light': '#a78bfa',        // Azul violeta claro
          'dark': '#7c3aed',         // Azul violeta escuro
          'hover': '#9333ea',        // Azul violeta hover
        },
        'glass': {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          'hover': 'rgba(255, 255, 255, 0.1)',
          'strong': 'rgba(255, 255, 255, 0.15)',
        },
        'violet': {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
          '800': '#5b21b6',
          '900': '#4c1d95',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'zoom-out': 'zoomOut 0.6s ease-out',
        'bounce': 'bounce 1s ease-in-out',
        'pulse': 'pulse 1s ease-in-out infinite',
        'shake': 'shake 0.5s',
        'heart-beat': 'heartBeat 1.3s ease-in-out',
        'wobble': 'wobble 1s',
        'swing': 'swing 1s',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'background-float': 'backgroundFloat 20s ease-in-out infinite alternate',
        'grid-shift': 'gridShift 30s linear infinite',
        'particle-float': 'particleFloat 12s linear infinite',
        'text-glow': 'textGlow 3s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'glitch': 'glitch 0.3s infinite',
        'text-reveal': 'textReveal 1s ease-out',
        'rotate-in': 'rotateIn 0.8s ease-out',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', visibility: 'visible' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', visibility: 'visible' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', visibility: 'visible' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', visibility: 'visible' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1' },
        },
        zoomOut: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0', transform: 'scale(0.3)' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.15)' },
          '70%': { transform: 'scale(1)' },
        },
        wobble: {
          '0%': { transform: 'translateX(0%)' },
          '15%': { transform: 'translateX(-25%) rotate(-5deg)' },
          '30%': { transform: 'translateX(20%) rotate(3deg)' },
          '45%': { transform: 'translateX(-15%) rotate(-3deg)' },
          '60%': { transform: 'translateX(10%) rotate(2deg)' },
          '75%': { transform: 'translateX(-5%) rotate(-1deg)' },
          '100%': { transform: 'translateX(0%)' },
        },
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        backgroundFloat: {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(5%, -5%) rotate(1deg) scale(1.05)' },
          '50%': { transform: 'translate(-3%, 3%) rotate(-1deg) scale(0.95)' },
          '75%': { transform: 'translate(3%, -3%) rotate(0.5deg) scale(1.02)' },
        },
        gridShift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-8px) translateX(4px)' },
          '50%': { transform: 'translateY(-4px) translateX(-6px)' },
          '75%': { transform: 'translateY(-12px) translateX(2px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        textGlow: {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.2)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.8)' },
          '50%': { opacity: '0.6', transform: 'translate(-50%, -50%) scale(1.2)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        glitch: {
          '0%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
          '20%': { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(90deg)' },
          '40%': { transform: 'translate(-2px, -2px)', filter: 'hue-rotate(180deg)' },
          '60%': { transform: 'translate(2px, 2px)', filter: 'hue-rotate(270deg)' },
          '80%': { transform: 'translate(2px, -2px)', filter: 'hue-rotate(360deg)' },
          '100%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
        },
        textReveal: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-200deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
        'glow-xl': '0 0 60px rgba(139, 92, 246, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'violet-gradient': 'linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a2a2a)',
      },
    },
  },
  plugins: [],
}