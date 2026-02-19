/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        alpine: {
          sky: '#e0f2fe',
          snow: '#f8fafc',
          stone: '#64748b',
          forest: '#14532d',
          peak: '#94a3b8',
        },
      },
      backgroundImage: {
        'mountains-hero': "url('https://images.unsplash.com/photo-1506905925346-21bda3d9df9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        'mountains-france': "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        'alps-snow': "url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      },
    },
  },
  plugins: [],
}
