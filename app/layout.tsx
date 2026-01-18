import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moataz Hussein - Full-Stack Engineer',
  description: 'Full-Stack Engineer specializing in Java Spring Boot, NestJS, Flutter, and modern web applications. 2+ years building scalable systems and exceptional digital experiences.',
  keywords: [
    'Full-Stack Developer',
    'Backend Engineer',
    'Mobile Developer',
    'Java Spring Boot',
    'NestJS',
    'Flutter',
    'React',
    'Next.js',
    'Cairo Egypt',
    'Freelance Developer',
  ],
  authors: [{ name: 'Moataz Hussein' }],
  openGraph: {
    title: 'Moataz Hussein - Full-Stack Engineer',
    description: 'Building scalable backend systems and exceptional digital experiences',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moataz Hussein - Full-Stack Engineer',
    description: 'Building scalable backend systems and exceptional digital experiences',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
