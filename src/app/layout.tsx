import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider, useTheme } from "next-themes";

import { Navbar } from "@/components/bar/Navbar";
import { Footer } from "@/components/footer/Footer";
import DarkBackground from "@/components/common/background/DarkBackground";
import LightBackground from "@/components/common/background/LightBackground";
import Background from "@/components/common/background/Background";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hitori Portfolio",
  description: "An innovative software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background>
            <div
              className={`${jetbrainsMono.variable} font-mono text-gray-800 dark:text-white
                      `}
            >
              {/* Navbar */}
              <Navbar />
              {/* Main content */}
              <main>{children}</main>
              <div>
                <Footer />
              </div>
            </div>
          </Background>
        </ThemeProvider>
      </body>
    </html>
  );
}
