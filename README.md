# Modern Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🚀 Fast development with Vite
- 🎨 Modern UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO-friendly structure
- ⚡ Optimized performance

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Modern_Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

1. **Update Personal Information**: Edit the components in `src/components/` to add your own information, projects, and links.

2. **Modify Colors**: Update the color scheme in `tailwind.config.js` under the `theme.extend.colors` section.

3. **Add Projects**: Edit the `projects` array in `src/components/Projects.jsx` to showcase your work.

4. **Update Social Links**: Modify the `socialLinks` array in `src/components/Contact.jsx` with your social media profiles.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

## License

MIT
