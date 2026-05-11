import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Green Valley International School | Nurturing Excellence",
  description: "Admissions Open for 2026. Join Green Valley International School for a holistic and innovative educational experience in Hyderabad.",
  keywords: ["school", "education", "admissions 2026", "hyderabad schools", "international school"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
