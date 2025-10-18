# 🍎 Apple iPhone 15 Pro Website Clone

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-0.166.1-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<div align="center">
  <h3>A stunning, pixel-perfect recreation of Apple's iPhone 15 Pro website with immersive 3D animations and smooth interactions</h3>
</div>

---

## ✨ Features

### 🎥 **Cinematic Experience**
- **Hero Video Section** - Responsive video backgrounds that adapt to screen size
- **Interactive Video Carousel** - Smooth transitions between iPhone 15 Pro highlight videos
- **Immersive Animations** - GSAP-powered smooth scroll animations and transitions

### 🎮 **3D Interactive Models**
- **3D iPhone Models** - Fully interactive 3D iPhone 15 Pro models using Three.js
- **Real-time Color Switching** - Dynamic color variants (Natural, Blue, White, Black Titanium)
- **Size Comparison** - Interactive size selector between 6.1" and 6.7" models
- **360° Rotation** - Smooth model rotation with mouse/touch controls

### 🎨 **Premium Design**
- **Apple-Inspired UI** - Pixel-perfect recreation of Apple's design language
- **Responsive Layout** - Seamless experience across desktop, tablet, and mobile
- **Smooth Animations** - Professional-grade animations using GSAP
- **Performance Optimized** - Built with Vite for lightning-fast development and builds

### 📱 **Content Sections**
- **Navigation** - Sleek navigation bar with Apple's signature styling
- **Highlights** - Key iPhone 15 Pro features with animated reveals
- **How It Works** - Interactive explanations of iPhone capabilities
- **Features Showcase** - Detailed feature presentations
- **Footer** - Complete footer with links and information

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and functional components
- **Vite 5.3.1** - Next-generation frontend tooling for instant HMR

### **3D & Animations**
- **Three.js 0.166.1** - 3D graphics library for WebGL
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **GSAP 3.12.5** - Professional-grade animation library
- **@gsap/react** - GSAP React integration

### **Styling & UI**
- **Tailwind CSS 3.4.4** - Utility-first CSS framework
- **PostCSS** - Tool for transforming CSS with JavaScript
- **React Icons** - Popular icon library for React

### **Development & Performance**
- **ESLint** - Code linting and formatting
- **Sentry** - Error tracking and performance monitoring
- **Vercel Speed Insights** - Performance analytics

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NourSafwan/apple_website.git
   cd apple_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the website in action

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with video
│   ├── Navbar.jsx      # Navigation component
│   ├── Model.jsx       # 3D model showcase
│   ├── ModelView.jsx   # 3D model viewer
│   ├── HighLights.jsx  # Features highlights
│   ├── Features.jsx    # Detailed features
│   ├── HowItWorks.jsx  # How it works section
│   ├── VideoCarousel.jsx # Video carousel
│   └── Footer.jsx      # Footer component
├── constants/          # App constants and data
├── utils/              # Utility functions and animations
├── App.jsx            # Main app component
└── main.jsx           # App entry point
```

## 🎯 Key Components

### **Model.jsx** - 3D Interactive Showcase
- Interactive 3D iPhone models with smooth rotations
- Dynamic color and size switching
- GSAP timeline animations for transitions

### **VideoCarousel.jsx** - Immersive Video Experience
- Smooth video transitions with custom controls
- Responsive video loading
- Progress indicators and interactive elements

### **Hero.jsx** - Cinematic Landing
- Responsive video backgrounds
- Smooth scroll animations
- Call-to-action elements

## 🎨 Design Highlights

- **Faithful Recreation** - Pixel-perfect match to Apple's original design
- **Smooth Animations** - 60fps animations using GSAP and Three.js
- **Interactive Elements** - Engaging user interactions throughout
- **Mobile First** - Fully responsive design optimized for all devices
- **Performance** - Optimized loading and rendering for smooth experience

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is for educational purposes and is not affiliated with Apple Inc.

---

<div align="center">
  <p>Built with ❤️ using React, Three.js, and GSAP</p>
  <p>Inspired by Apple's incredible design and attention to detail</p>
</div>
