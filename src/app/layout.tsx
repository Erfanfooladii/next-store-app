import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/layouts/Header";
import { Footer } from "@/app/layouts/Footer";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./Providers/ReactQuery";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <div className="w-full sm:w-2/3 m-auto">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
