import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/components/header";
import { ActiveSectionContextProvider } from "@/contexts/active-section-context";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { ThemeSwitch } from "@/components/theme-switch";
import ThemeContextProvider from "@/contexts/theme-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});
export const metadata: Metadata = {
  title: "João Póvoa | Dev Fullstack",
  description: "Transforme suas ideias em leads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#004777] dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-preRed absolute -z-10 -top-24 right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#00AFB5]"></div>
        <div className="bg-preBlue absolute -z-10 -top-4 -left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:-left-[33rem] lg:-left-[28rem] xl:-left-60 2xl:-left-20 dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Analytics />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
