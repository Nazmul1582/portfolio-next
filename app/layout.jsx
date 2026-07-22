import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Md. Nazmul Hasan | Frontend-Focused Full Stack Developer",
  description:
    "Modern, high-performance portfolio showcase built with Next.js 16+, React 19, Tailwind CSS v4, Framer Motion, and Lenis smooth scrolling. Features glassmorphic UI design, animated career trajectory, and performance-optimized interactive components.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
