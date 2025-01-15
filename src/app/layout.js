import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/Layout/layout";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medium Clone",
  description: "Blog app in nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <CommonLayout>{children}</CommonLayout>
        <Toaster />
      </body>
    </html>
  );
}