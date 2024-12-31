import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./context/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

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
        <ThemeProvider>
          <div className="flex flex-col h-screen items-center justify-center">
            <div className="flex flex-col h-screen w-full px-10 gap-12 max-w-[800px] items-start justify-center">
              <Navbar/>
              <div className="h-[60%]">
                {children}
              </div>
              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
