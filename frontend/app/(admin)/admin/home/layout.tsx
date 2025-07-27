import { ThemeProvider } from "next-themes";
import "../../../globals.css";
import Sidebar from "./sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <main className="admin-layout flex w-full">
      <Sidebar />
      <ThemeProvider enableSystem={false} attribute={"class"} defaultTheme="system">
        {children}
      </ThemeProvider>
    </main>
  );
}
