import Sidebar from "./sidebar/sidebar";

// import {onCLS} from "web-vitals"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  const res = await fetch("http://localhost:7575/auth/profile", {
    cache: "no-store"
  })
  const auth = await res.json()
  if (!res.ok) {
    throw new Error("Have a problem with the server.")
  }

  return (
    <main className="admin-layout-main flex">
      <Sidebar user={auth.user} />
      {children}
    </main>
  );
}
