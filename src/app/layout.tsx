import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

const DMSans = DM_Sans({
  variable: "--font-DM-Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NCC",
  description: "Cleaning Business in UK",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${DMSans.variable} antialiased dark:bg-darkmode`}>
        <head>
          <script
            src="https://cdn.jsdelivr.net/npm/heic2any"
            type="text/javascript"
            async
          ></script>
          </head>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
