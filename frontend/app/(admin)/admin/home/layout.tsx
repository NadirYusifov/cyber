import "@/app/globals.css";
import Sidebar from "./sidebar/sidebar";
import ThemeProviders from "@/components/providers/themeprovider";

// import {onCLS} from "web-vitals"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <main className="admin-layout-main flex">
      <ThemeProviders enableSystem={true} attribute="class" defaultTheme="system">
        <Sidebar />
        {children}
      </ThemeProviders>
    </main>
  );
}
