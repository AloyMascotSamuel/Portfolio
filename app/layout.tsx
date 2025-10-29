import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nicolas Cava - Fractional CTO & Technical Leader",
  description: "Fractional CTO helping early-stage startups scale their software and teams. Expert in technical leadership, product scaling, and building resilient engineering teams.",
  keywords: ["Fractional CTO", "Technical Leadership", "Startup CTO", "Software Scaling", "Engineering Leader"],
  authors: [{ name: "Nicolas Cava" }],
  openGraph: {
    title: "Nicolas Cava - Fractional CTO & Technical Leader",
    description: "Fractional CTO helping early-stage startups scale their software and teams.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Cava - Fractional CTO & Technical Leader",
    description: "Fractional CTO helping early-stage startups scale their software and teams.",
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
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
