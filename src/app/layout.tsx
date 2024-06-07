'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/fonts.css"
import "@/components/REST.scss"
import CountryContextWrapper from "@/components/Context/CountryContext";
import { ThemeContextWrapper } from "@/components/ThemeContextWrapper";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });


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
