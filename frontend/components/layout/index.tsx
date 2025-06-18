import Header from './Header/header';
import Footer from './Footer/footer';
import { ReactNode } from 'react';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};
