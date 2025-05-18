import React from 'react';
import Link from 'next/link';
import { HeaderIcon } from '@/assets/icon';

export default function HeaderLink() {
    return (
        <nav className='text-[30px] lg:text-[16px] mt-24 lg:mt-0 flex items-center flex-col lg:flex-row gap-y-3 lg:gap-6'>
            <div>
                <input className='outline-none px-5 bg-gray-200 rounded-lg py-3' placeholder='Search' />
            </div>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Blog</Link>
            <div className='flex justify-center gap-4'>
                {HeaderIcon.map((icon, index) => 
                    <Link href={"#"}>{icon.svg}</Link>
                )}
            </div>
        </nav>
    )
}
