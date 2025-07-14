import { ReactNode } from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};
