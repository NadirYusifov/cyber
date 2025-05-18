'use client'

import Image from 'next/image';
import { useState } from 'react';
import HeaderLink from './HeaderLink';
import Hamburger from 'hamburger-react';
import Logo from '../../../public/cyberlogoblack.png';

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className='header-nav relative'>
            <div className='container mx-auto px-4'>
                <div className='bg-white py-8 flex justify-between items-center sticky top-0 z-10'>
                    <div className='header-logo relative z-10'>
                        <div>
                            <Image src={Logo} width={80} height={80} quality={100} alt='header logo' />
                        </div>
                    </div>
                    <div className=''>
                        <div className='hidden lg:block'>
                            <HeaderLink />
                        </div>
                        <div className='relative z-10 lg:hidden block'>
                            <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
                        </div>
                        {
                            isOpen && <div className='bg-white h-screen top-0 left-0 right-0 text-center fixed'>
                                <HeaderLink />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
