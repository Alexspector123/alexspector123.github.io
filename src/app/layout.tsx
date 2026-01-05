import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/bar/Navbar";
import { Footer } from "@/components/footer/Footer";
import Background from "@/components/common/background/Background";

import ClickLayout from "@/layouts/ClickLayout";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hitori Portfolio",
  description: "An innovative software developer",
  icons: {
    icon: "/cat-logo.png",
  },
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
              <main>
                <ClickLayout>{children}</ClickLayout>
              </main>
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
