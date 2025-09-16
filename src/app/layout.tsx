import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export const metadata: Metadata = {
  title: "Zoomin Digital — Performance-driven marketing & creative engineering",
  description: "From strategy to scale—Zoomin Digital plans, produces, and optimizes campaigns that turn attention into revenue. Performance-driven marketing & creative engineering for brands that want compounding growth.",
  keywords: "digital marketing, performance marketing, creative engineering, growth marketing, social media, content marketing, web development, branding, Bangladesh, Dhaka, marketing agency",
  authors: [{ name: "Zoomin Digital" }],
  creator: "Zoomin Digital",
  publisher: "Zoomin Digital",
  applicationName: "Zoomin Digital",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
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
    images: [
      {
        url: "/ZoomInDigital Logo.png",
        width: 1200,
        height: 630,
        alt: "Zoomin Digital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoomin Digital — Performance-driven marketing & creative engineering",
    description: "From strategy to scale—Zoomin Digital plans, produces, and optimizes campaigns that turn attention into revenue.",
    images: ["/ZoomInDigital Logo.png"],
    creator: "@zoomindigital",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/ZD.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/ZD.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
