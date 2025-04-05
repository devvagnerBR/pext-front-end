import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: ["latin"],
} );

const inter = Inter( {
  variable: "--font-inter",
  subsets: ["latin"],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: ["latin"],
} );

export const metadata: Metadata = {
  title: "PexT Dashboard",
  description: " Gerenciamento de animais para adoção",
};

export default function RootLayout( { children, }: Readonly<{ children: React.ReactNode; }> ) {

  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
      </head>
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
