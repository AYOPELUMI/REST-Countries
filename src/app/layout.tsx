'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/REST.scss"
import "../components/Responsive.scss"
import CountryContextWrapper from "@/components/Context/CountryContext";
import { ThemeContextWrapper } from "@/components/ThemeContextWrapper";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "REST Countries",
//   description: "Get more information about countries in the world",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CountryContextWrapper>
          <ThemeContextWrapper>
            {children}
          </ThemeContextWrapper>
      </CountryContextWrapper>
    </html>
  );
}
