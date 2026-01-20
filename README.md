# 🌐 3D Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and React Three Fiber. Features immersive 3D models, smooth animations, and a responsive design to showcase projects and professional experience.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.157.0-000000?style=flat-square&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

## ✨ Features

- **Interactive 3D Models**: Engaging 3D environments with animated characters (Fox, Bird, Plane)
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by React Spring for fluid transitions
- **Modern UI/UX**: Clean interface built with Tailwind CSS
- **Contact Form**: Integrated EmailJS for direct communication
- **Timeline Component**: Visual representation of work experience
- **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 🚀 Tech Stack

### Frontend

- **React 18.2** - UI library
- **React Router DOM 6.17** - Client-side routing
- **Three.js 0.157** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

### Styling

- **Tailwind CSS 3.3** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing

### Animation

- **@react-spring/three** - Spring physics-based animations for 3D

### Additional

- **EmailJS** - Email service integration
- **React Vertical Timeline** - Timeline component

### Development Tools

- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v7.0 or higher) or **yarn** (v1.22 or higher)
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note**: Get your EmailJS credentials by signing up at [EmailJS](https://www.emailjs.com/)

### 4. Start Development Server

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The application will open at `http://localhost:5173`

## 📦 Build for Production

### Create Production Build

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

### Preview Production Build

Using npm:

```bash
npm run preview
```

Or using yarn:

```bash
yarn preview
```

## 🗂️ Project Structure

```
3d-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and 3D models
│   │   ├── 3d/           # 3D model files (.glb)
│   │   ├── icons/        # Icon assets
│   │   └── images/       # Image assets
│   ├── components/        # Reusable React components
│   │   ├── Alert.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeInfo.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── index.js
│   ├── constants/         # App constants and data
│   │   └── index.js
│   ├── hooks/            # Custom React hooks
│   │   └── useAlert.js
│   ├── models/           # 3D model components
│   │   ├── Bird.jsx
│   │   ├── Fox.jsx
│   │   ├── Island.jsx
│   │   ├── Plane.jsx
│   │   ├── Sky.jsx
│   │   └── index.js
│   ├── pages/            # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── index.js
│   ├── App.jsx           # Main App component
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── .eslintrc.cjs         # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vercel.json           # Vercel deployment config
└── vite.config.js        # Vite configuration
```

## 🎨 Customization

### Update Personal Information

Edit [src/constants/index.js](src/constants/index.js) to update:

- Skills
- Work experience
- Projects
- Social media links

### Modify 3D Models

Place your `.glb` 3D model files in `src/assets/3d/` and import them in the respective model components.

### Change Color Scheme

Update colors in [tailwind.config.js](tailwind.config.js) to match your brand.

## 🚢 Deployment

### Deploy to Vercel

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

### Deploy to Netlify

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to package.json:

```json
"homepage": "https://yourusername.github.io/3d-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: 3D models not loading

- **Solution**: Ensure `.glb` files are in the correct path and `assetsInclude: ['**/*.glb']` is in vite.config.js

**Issue**: Build fails

- **Solution**: Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

**Issue**: EmailJS not working

- **Solution**: Verify environment variables are correctly set in `.env` file

## 📝 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Erick Hernandez**

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/whooserick/?hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/erick-hernandez-93361618b/)
[![Email](https://img.shields.io/badge/-yerickk8@gmail.com-red?style=flat-square&logo=gmail&logoColor=white)](mailto:yerickk8@gmail.com)

---

⭐ Star this repository if you found it helpful!
