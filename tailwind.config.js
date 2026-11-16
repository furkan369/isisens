/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        isisens: {
          bg: '#050B18',
          bgSecondary: '#0B1424',
          card: '#142033',
          orange: '#FF713C',
          orangeLight: '#FF9A38',
          cyan: '#15CBE0',
          cyanLight: '#39D8F3',
          text: '#FFFFFF',
          textMuted: '#B9C3CF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

