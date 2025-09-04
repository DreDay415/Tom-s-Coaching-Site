/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tom's Brand Colors
        forest: {
          50: '#f0f4f2',
          100: '#d9e4dd',
          200: '#b3c9bb',
          300: '#8dae99',
          400: '#679377',
          500: '#417855',
          600: '#356044',
          700: '#294833',
          800: '#1d3022',
          900: '#172a22', // Main brand color
        },
        gold: {
          50: '#faf9f6',
          100: '#f5f2ec',
          200: '#ebe5d9',
          300: '#e1d8c6',
          400: '#d7cbb3',
          500: '#d0c39b', // Main brand color
          600: '#b8a885',
          700: '#a08d6f',
          800: '#887259',
          900: '#705743',
        },
        // Keep some utility colors
        primary: {
          50: '#f0f4f2',
          100: '#d9e4dd',
          200: '#b3c9bb',
          300: '#8dae99',
          400: '#679377',
          500: '#417855',
          600: '#356044',
          700: '#294833',
          800: '#1d3022',
          900: '#172a22',
        },
        secondary: {
          50: '#faf9f6',
          100: '#f5f2ec',
          200: '#ebe5d9',
          300: '#e1d8c6',
          400: '#d7cbb3',
          500: '#d0c39b',
          600: '#b8a885',
          700: '#a08d6f',
          800: '#887259',
          900: '#705743',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'], // For elegant headings
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
