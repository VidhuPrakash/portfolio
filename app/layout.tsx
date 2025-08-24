import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Vidhu Prakash T P - Full Stack Developer | Freelancer | Software Development Engineer",
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating innovative digital solutions with clean code and creative design.",
  keywords: [
    "full stack developer",
    "web development",
    "React developer",
    "Next.js expert",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "portfolio",
    "software engineer",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Vidhu Prakash T P", url: "https://vidhuprakash.dev" }],
  creator: "Vidhu Prakash T P",
  publisher: "Vidhu Prakash T P",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidhuprakash.dev",
    title: "Vidhu Prakash T P - Full Stack Developer",
    description:
      "Experienced Full Stack Developer creating innovative digital solutions with modern web technologies.",
    siteName: "Vidhu Prakash Portfolio",
    images: [
      {
        url: "/profile-image.png",
        width: 1200,
        height: 630,
        alt: "Vidhu Prakash T P - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhu Prakash T P - Full Stack Developer",
    description:
      "Experienced Full Stack Developer creating innovative digital solutions with modern web technologies.",
    images: ["/profile-image.png"],
  },
  alternates: {
    canonical: "https://vidhuprakash.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ff6b6b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Analytics />
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
