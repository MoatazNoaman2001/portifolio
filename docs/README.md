# Moataz Hussein - Portfolio

A professional, performant Next.js portfolio with stunning animations inspired by premium agency websites. Built with modern technologies and best practices.

## ✨ Features

- **Next.js 14 with App Router** - Modern React framework with SSR/SSG support
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth, production-ready animations
- **Lenis Smooth Scroll** - Butter-smooth scrolling experience
- **Custom Cursor** - Interactive cursor for desktop
- **Magnetic Buttons** - Engaging hover interactions
- **Scroll-triggered Animations** - Elements reveal as you scroll
- **Split Text Animations** - Character-by-character reveals
- **SEO Optimized** - Comprehensive meta tags and semantic HTML
- **Fully Responsive** - Mobile-first design
- **Dark Theme** - Professional dark color scheme with gradients

## 🎨 Design Philosophy

This portfolio follows the principles of intentional design:

- **Premium Aesthetics**: Inspired by MuseMind Agency's design quality
- **Smooth Animations**: Every interaction feels polished and deliberate
- **Performance First**: Optimized animations using GPU-accelerated properties
- **Accessibility**: Respects reduced motion preferences
- **Professional Feel**: Dark theme with cyan/purple gradient accents

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd moataz-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
moataz-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── About.tsx            # About section
│   │   ├── Contact.tsx          # Contact form
│   │   ├── CustomCursor.tsx     # Custom cursor
│   │   ├── Hero.tsx             # Hero section
│   │   ├── MagneticButton.tsx   # Interactive button
│   │   ├── Navigation.tsx       # Header navigation
│   │   ├── Reveal.tsx           # Scroll animation wrapper
│   │   ├── Skills.tsx           # Skills section
│   │   ├── SplitText.tsx        # Text animation
│   │   └── Work.tsx             # Projects section
│   └── hooks/
│       ├── useScrollAnimation.ts
│       └── useSmoothScroll.ts
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript config
└── next.config.js              # Next.js config
```

## 🎯 Key Components

### Smooth Scroll (Lenis)
```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

// In your page component
useSmoothScroll();
```

### Reveal Animations
```tsx
import { Reveal } from '@/components/Reveal';

<Reveal direction="up" delay={0.2}>
  <YourContent />
</Reveal>
```

### Split Text Animation
```tsx
import { SplitText } from '@/components/SplitText';

<SplitText delay={0.4}>
  Your animated text
</SplitText>
```

### Magnetic Button
```tsx
import { MagneticButton } from '@/components/MagneticButton';

<MagneticButton strength={0.3} onClick={handleClick}>
  Button Text
</MagneticButton>
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  dark: {
    bg: '#0a0a0a',
    surface: '#141414',
    // ...
  },
  accent: {
    primary: '#00d9ff',
    secondary: '#7c3aed',
    // ...
  }
}
```

### Fonts
Update fonts in `src/app/layout.tsx` and `tailwind.config.js`

### Content
Update your personal information in:
- `src/components/Hero.tsx` - Main heading and introduction
- `src/components/About.tsx` - Bio and stats
- `src/components/Work.tsx` - Projects
- `src/components/Skills.tsx` - Technical skills
- `src/components/Contact.tsx` - Contact information

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- etc.

## 📝 SEO Optimization

The portfolio includes:
- Dynamic meta tags
- OpenGraph tags for social sharing
- Twitter Cards
- Semantic HTML structure
- Optimized images
- Sitemap support

## 🎭 Animation Performance

All animations are optimized for 60fps by:
- Using `transform` and `opacity` (GPU-accelerated)
- Implementing `will-change` where appropriate
- Respecting `prefers-reduced-motion`
- Lazy loading components
- Efficient scroll listeners

## 🐛 Troubleshooting

### Animations not working
- Check browser console for errors
- Ensure Framer Motion is properly installed
- Verify intersection observer support

### Smooth scroll issues
- Lenis requires JavaScript
- Check for conflicting CSS scroll properties
- Ensure proper initialization in layout

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Moataz Hussein**
- Full-Stack Engineer
- Cairo, Egypt
- [Email](mailto:moataz.hussein@example.com)
- [LinkedIn](#)
- [GitHub](#)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion
