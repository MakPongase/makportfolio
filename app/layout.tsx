import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./portfolio.css";
import "./portfolio-v2.css";
import "./portfolio-glass.css";
import "./portfolio-reveal.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mak-theta.vercel.app"),
  title: "John Mark Pongase | Design & Development",
  description: "Web and mobile interfaces by John Mark Pongase. Selected work in full-stack development and interface design.",
  keywords: [
    "John Mark Pongase",
    "Mak Pongase",
    "Pongase",
    "Full-Stack Developer",
    "Web Developer",
    "Philippines",
    "Bulacan",
    "Software Engineer",
    "Game Developer",
    "AWS Cloud Leader",
    "React",
    "Next.js",
    "Roblox Developer",
  ],
  authors: [{ name: "John Mark Pongase" }],
  creator: "John Mark Pongase",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mak-theta.vercel.app",
    title: "John Mark Pongase | Design & Development",
    description: "Web and mobile interfaces, from idea to working product. Selected work by John Mark Pongase.",
    siteName: "John Mark Pongase Portfolio",
    images: [
      {
        url: "/images/about-me/mak-pongase-main-picture.png",
        width: 1200,
        height: 630,
        alt: "John Mark Pongase — Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mark Pongase | Design & Development",
    description: "Web and mobile interfaces, from idea to working product. Selected work by John Mark Pongase.",
    images: ["/images/about-me/mak-pongase-main-picture.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
