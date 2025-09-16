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
  keywords: "digital marketing, performance marketing, creative engineering, growth marketing, social media, content marketing, web development, branding, Bangladesh, Dhaka, marketing agency",
  authors: [{ name: "Zoomin Digital" }],
  creator: "Zoomin Digital",
  publisher: "Zoomin Digital",
  applicationName: "Zoomin Digital",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
      { url: "/ZD.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/ZD.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/ZD.png",
        color: "#111827",
      },
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
