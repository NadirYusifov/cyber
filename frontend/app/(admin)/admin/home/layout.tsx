// "use client"

// import { useEffect, useState } from "react";
import "@/app/globals.css"
import Sidebar from "./sidebar/sidebar";
import ThemeProviders from "@/components/providers/themeprovider";
import { Inter } from "next/font/google";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const interSans = Inter({
  weight: "variable",
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  const locale = await getLocale();
  const messages = await getMessages()
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // })

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${interSans.className} antialiased`}>
          <main className="admin-layout-main flex">
            <Sidebar />
            <ThemeProviders enableSystem attribute="class" defaultTheme="system">
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
            </ThemeProviders>
          </main>
      </body>
    </html>
  );
}
