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
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
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
