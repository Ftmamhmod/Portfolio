import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fatma Mahmoud Portfolio",
    template: "",
  },
  description:
    "Frontend Developer specializing in React.js, Next.js. Expert in building high-performance web applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "AI Integration",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Performance Optimization",
  ],
  authors: [{ name: "Fatma Mahmoud" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fatma Mahmoud Portfolio",
    title: "Fatma Mahmoud | React & Next.js Developer",
    description:
      "Frontend Developer specializing in React.js & Next.js. Building high-performance web applications.",
    images: [
      {
        url: "/imgs/website.png",
        width: 1200,
        height: 630,
        alt: "Fatma Mahmoud - React.js & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatma Mahmoud - React.js & Next.js Developer",
    description: "React.js & Next.js Developer",
    images: ["/imgs/website.png"],
  },
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
  alternates: {
    canonical: "",
  },
  icons: {
    icon: "/imgs/logo.jpg",
    apple: "/imgs/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
