"use client"

import { useEffect, useState } from "react";
import "../../../globals.css";
import Sidebar from "./sidebar/sidebar";
import ThemeProviders from "@/components/providers/themeprovider";
import { Inter } from "next/font/google";

const interSans = Inter({
  weight: "variable",
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);
  })

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${interSans.className} antialiased`}>
        {isClient &&
          <main className="admin-layout-main flex">
            <Sidebar />
            <ThemeProviders enableSystem attribute="class" defaultTheme="system">
              {children}
            </ThemeProviders>
          </main>
        }
      </body>
    </html>
  );
}
