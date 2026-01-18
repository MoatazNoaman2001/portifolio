import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moataz Noaman - Full-Stack Engineer',
  description: 'Full-Stack Engineer specializing in Node.js/NestJS, Java/Quarkus, and modern web applications. Open-source advocate with 4+ years building scalable backend systems.',
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
    'Native Android',
    'Quarkus',
  ],
  authors: [{ name: 'Moataz Noaman' }],
  openGraph: {
    title: 'Moataz Noaman - Full-Stack Engineer',
    description: 'Building scalable backend systems and exceptional digital experiences',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moataz Noaman - Full-Stack Engineer',
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
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
