import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import SwipeNavigation from "@/components/swipe-navigation";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Christian Matthew",
  description: "I'm Christian Matthew, and this is my personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geist-mono antialiased`}
      >
          <div className="flex flex-col px-8 w-full min-h-screen items-center justify-start">
            <div className="flex flex-col w-full max-w-[800px] gap-12">
              <div className="mt-24">
                <Navbar/>
              </div>
              <SwipeNavigation>
                {children}
                <Analytics/>
              </SwipeNavigation>
            </div>
          </div>
      </body>
    </html>
  );
}
