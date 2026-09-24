import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPopup from "./components/Layout/NewsletterPopup";

import { ThemeProvider } from "next-themes";
import { NewsletterProvider } from "./context/NewsletterContext";

const DMSans = DM_Sans({
  variable: "--font-DM-Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ncccleaning.co.uk"),

  title: {
    default: "NCC | Professional Commercial Cleaning Services in the UK",
    template: "%s | NCC",
  },

  description:
    "Professional commercial cleaning services in the UK. NCC provides reliable and high-quality cleaning solutions for businesses.",

  keywords: [
    "Commercial cleaning services UK",
    "Professional commercial cleaning services",
    "commercial cleaning",

    "NCC Cleaning",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.ncccleaning.co.uk",
    siteName: "NCC",
    title: "NCC | Professional Commercial Cleaning Services in the UK",
    description:
      "Professional commercial cleaning services in the UK. Reliable and high-quality cleaning solutions for businesses.",
    images: [
      {
        url: "/images/slider/slider-1.png",
        width: 1200,
        height: 630,
        alt: "NCC Professional Cleaning Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NCC | Professional Cleaning Services in the UK",
    description:
      "Professional cleaning services for homes and businesses across the UK.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${DMSans.variable} antialiased dark:bg-darkmode`}>
        <script
          src="https://cdn.jsdelivr.net/npm/heic2any"
          type="text/javascript"
          async
        />

        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <NewsletterProvider>
            <Header />

            {children}

            <Footer />

            <ScrollToTop />

            <NewsletterPopup />
          </NewsletterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
