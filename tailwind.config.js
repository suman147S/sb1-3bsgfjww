/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1f9',
          100: '#e7e3f3',
          200: '#d0c7e6',
          300: '#b8abd9',
          400: '#9f8fc9',
          500: '#8773b9',
          600: '#6d58a9',
          700: '#5d4a90',
          800: '#4C3575', // Primary color
          900: '#3e2d5e',
        },
        secondary: {
          50: '#fcf9ed',
          100: '#f8f3da',
          200: '#f2e7b6',
          300: '#ecd991',
          400: '#E5B94E', // Accent color
          500: '#e2ad37',
          600: '#cf972b',
          700: '#ac7825',
          800: '#8a5f23',
          900: '#714f22',
        },
        neutral: {
          50: '#f9f7f5',
          100: '#f3efe9',
          200: '#e7dfd4',
          300: '#d7c8b8',
          400: '#c0ab96',
          500: '#ab917a',
          600: '#9a7d65',
          700: '#7e6755',
          800: '#685548',
          900: '#57483e',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};