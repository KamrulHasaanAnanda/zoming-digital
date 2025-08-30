import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoomin Digital — Performance-driven marketing & creative engineering",
  description: "From strategy to scale—Zoomin Digital plans, produces, and optimizes campaigns that turn attention into revenue. Performance-driven marketing & creative engineering for brands that want compounding growth.",
  keywords: "digital marketing, performance marketing, creative engineering, growth marketing, social media, content marketing, web development, branding, Bangladesh",
  authors: [{ name: "Zoomin Digital" }],
  creator: "Zoomin Digital",
  publisher: "Zoomin Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zoomindigital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zoomin Digital — Performance-driven marketing & creative engineering",
    description: "From strategy to scale—Zoomin Digital plans, produces, and optimizes campaigns that turn attention into revenue.",
    url: "https://zoomindigital.com",
    siteName: "Zoomin Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoomin Digital — Performance-driven marketing & creative engineering",
    description: "From strategy to scale—Zoomin Digital plans, produces, and optimizes campaigns that turn attention into revenue.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/ZD.png" />
        <link rel="apple-touch-icon" href="/ZD.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
