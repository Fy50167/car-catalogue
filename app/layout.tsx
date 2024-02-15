import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import './globals.css';
import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
  title: "Car Catalogue",
  description: "A website for browsing currently available cars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = 'relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
