'use client'

import Image from 'next/image';
import { useState } from 'react';
import HeaderLink from './HeaderLink';
import Hamburger from 'hamburger-react';
import { useClickAway } from '@uidotdev/usehooks';
import Logo from '../../../public/cyberlogoblack.png';
import { AnimatePresence, motion } from 'motion/react';


export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useClickAway<HTMLDivElement>(() => {
        setOpen(false);
    });

    return (
        <header className='header-nav bg-white sticky top-0 z-10'>
            <div className='container mx-auto px-4'>
                <div className='py-5 justify-between lg:justify-between flex items-center sticky top-0 z-10'>
                    <div className='header-logo relative z-10'>
                        <picture>
                            <Image src={Logo} width={80} height={80} quality={100} alt='header logo' />
                        </picture>
                    </div>
                    <div className=''>
                        <div className='hidden lg:block'>
                            <HeaderLink />
                        </div>
                        <div ref={ref} className='relative z-10 lg:hidden block'>
                            <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
                        </div>
                        <AnimatePresence>
                            {
                                isOpen && <motion.div initial={{ opacity: 0, top: 0 }} animate={{ opacity: 1, top: 15 }} exit={{ opacity: 0, top: 0 }} className='bg-white h-screen top-0 left-0 right-0 text-center fixed'>
                                    <HeaderLink />
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    )
}
