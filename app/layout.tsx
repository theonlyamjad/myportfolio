import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBackground from "../components/ClientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amjad Ben amara - Web Developer",
  description: "Portfolio website of Amjad Ben amara, Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <ClientBackground />
        {children}
      </body>
    </html>
  );
}
