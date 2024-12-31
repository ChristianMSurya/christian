import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./context/theme-provider";
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

const berkeley = localFont({
  src: "./fonts/TX-02-TRIAL-Regular.otf",
  variable: "--font-berkeley",
})

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
        className={`${geistSans.variable} ${geistMono.variable} ${berkeley.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
