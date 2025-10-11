/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'bg-secondary': 'var(--bg-secondary)',
        'muted': 'var(--muted)',
        'text': 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'glass': 'var(--glass)',
        'glass-hover': 'var(--glass-hover)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'default': 'var(--radius)',
        'lg': 'var(--radius-lg)',
      },
      fontFamily: {
        'sans': 'var(--font-family)',
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'default': 'var(--shadow)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'default': 'var(--transition)',
      },
      maxWidth: {
        'container': 'var(--container)',
      },
      height: {
        'header': 'var(--header-height)',
      },
    },
  },
  plugins: [],
}