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
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
