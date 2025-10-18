/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        playwrite: ['"Playwrite AU TAS"', 'cursive'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(79, 70, 229, 0.5), 0 0 20px rgba(79, 70, 229, 0.3)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(79, 70, 229, 0.8), 0 0 30px rgba(79, 70, 229, 0.5)',
          },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}