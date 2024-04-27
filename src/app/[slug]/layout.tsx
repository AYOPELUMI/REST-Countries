import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CountryContextWrapper from "@/components/Context/CountryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REST Countries",
  description: "Get more information about countries in the world",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <CountryContextWrapper>
        {children}
      </CountryContextWrapper>
    </html>
  );
}
