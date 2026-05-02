import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'indie-yellow': '#FBDE23',
        'indie-black': '#110522',
      },
      fontFamily: {
        sans: ['Gilroy', 'Poppins', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
    },
  },
  plugins: [],
} satisfies Config;
