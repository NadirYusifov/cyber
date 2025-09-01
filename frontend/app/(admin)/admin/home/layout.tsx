import "@/app/globals.css";
import Sidebar from "./sidebar/sidebar";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ThemeProviders from "@/components/providers/themeprovider";

// import {onCLS} from "web-vitals"

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

  // onCLS(console.log)
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${interSans.className} antialiased`} suppressHydrationWarning={true}>
        <main className="admin-layout-main flex">
          <ThemeProviders enableSystem={true} attribute="class" defaultTheme="system">
            <NextIntlClientProvider messages={messages}>
              <Sidebar />
              {children}
            </NextIntlClientProvider>
          </ThemeProviders>
        </main>
      </body>
    </html>
  );
}
