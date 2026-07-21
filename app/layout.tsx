import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Mark Pongase (Mak) | Versatile Technologist",
  description: "Portfolio of John Mark Pongase (Mak) - Full-Stack Developer, Game Developer, and Tech Community Leader building ideas across disciplines.",
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
    url: "https://makpongase.com", // You can update this to your actual domain later
    title: "John Mark Pongase (Mak) | Versatile Technologist",
    description: "Full-Stack Developer, Game Developer, and Tech Community Leader building ideas across disciplines.",
    siteName: "John Mark Pongase Portfolio",
    images: [
      {
        url: "/images/about-me/mak-pongase-main-picture.png",
        width: 1200,
        height: 630,
        alt: "John Mark Pongase - Versatile Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mark Pongase (Mak) | Versatile Technologist",
    description: "Full-Stack Developer, Game Developer, and Tech Community Leader building ideas across disciplines.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
