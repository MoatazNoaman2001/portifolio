# 🚀 Quick Start Guide

Get your professional portfolio running in 5 minutes!

## Prerequisites
- Node.js 18+ installed
- A code editor (VS Code recommended)

## Installation Steps

### 1. Navigate to Project
```bash
cd moataz-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis (smooth scroll)
- Lucide React (icons)

### 3. Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 to see your portfolio!

## 🎨 First Customizations (5 minutes)

### 1. Update Hero Section
**File**: `src/components/Hero.tsx`

```tsx
// Line 40-45: Update your title
<SplitText>
  Your Name or Title Here
</SplitText>

// Line 50: Update headline
<h2>Your Unique Value Proposition</h2>

// Line 54: Update description
<p>
  Your custom bio here...
</p>
```

### 2. Update Contact Info
**File**: `src/components/Contact.tsx`

```tsx
// Line 10: Your email
value: 'your.email@example.com',

// Line 14: Your location
value: 'Your City, Country',

// Lines 18-30: Your social links
```

### 3. Update SEO Metadata
**File**: `src/app/layout.tsx`

```tsx
// Lines 12-15
title: 'Your Name - Your Title',
description: 'Your description',
```

## 🎯 What You Get

### Features
✅ Smooth scroll with Lenis
✅ Scroll-triggered animations
✅ Custom cursor (desktop)
✅ Magnetic buttons
✅ Split text animations
✅ Responsive design
✅ SEO optimized
✅ Dark theme
✅ Contact form
✅ Project showcase
✅ Skills visualization

### Sections
1. **Hero** - Eye-catching introduction
2. **About** - Your story and expertise
3. **Work** - Project showcase
4. **Skills** - Technical abilities
5. **Contact** - Get in touch form

## 📝 Next Steps

### Customize Content
1. Update all placeholder text with your info
2. Add your real projects in `Work.tsx`
3. Update skills in `Skills.tsx`
4. Add your actual stats in `About.tsx`

### Add Your Branding
1. Choose your accent colors in `tailwind.config.js`
2. Add your logo/favicon in `public/`
3. Update fonts if desired

### Deploy to Vercel (Free)
```bash
npm install -g vercel
vercel
```

Follow the prompts - your site will be live in minutes!

## 🎓 Learn More

- **README.md** - Full documentation
- **IMPLEMENTATION_GUIDE.md** - Deep dive into architecture
- `/src/components/` - Study individual components
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Animations not smooth?
- Check Chrome DevTools Performance tab
- Reduce animation complexity on mobile
- Ensure GPU acceleration is working

## 💡 Pro Tips

1. **Test on Real Devices**: Animations feel different on actual phones
2. **Optimize Images**: Use WebP format, compress before uploading
3. **Write Great Copy**: Design showcases content - make it compelling
4. **Keep It Simple**: Remove sections you don't need
5. **Mobile First**: Most visitors will be on mobile

## 🎨 Design Philosophy

This portfolio follows the **intentional design** principle seen in premium agency sites:

- Every animation has a purpose
- Colors create hierarchy and emotion
- Whitespace guides attention
- Typography creates personality
- Interactions delight users

## 📊 Performance Goals

Aim for these Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

Run audit: Chrome DevTools > Lighthouse

## 🚀 You're Ready!

Your portfolio foundation is set. Now make it yours:
1. Add your personality
2. Showcase your best work
3. Write compelling copy
4. Deploy and share

Remember: **Professional work = Attention to detail + Intentional choices**

Good luck! 🎉

---

Questions? Check IMPLEMENTATION_GUIDE.md for deep explanations.
