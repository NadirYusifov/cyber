import React from 'react';
import Link from 'next/link';
import { HeaderIcon, SearchIcon } from '@/assets/icon';

export default function HeaderLink() {
    return (
        <nav className='mt-24 lg:mt-0 flex items-center flex-col lg:flex-row gap-y-3 lg:gap-6'>
            <div className='relative'>
                <div className='absolute translate-1/2'>
                    <SearchIcon />
                </div>
                <input type='search' className='w-[360px] outline-none px-10 bg-cultured rounded-lg py-3' placeholder='Search' />
            </div>
            <div className='text-[30px] text-american-silver lg:text-[16px] flex items-center flex-col lg:flex-row gap-y-3 lg:gap-13 transition-all'>
                <Link className='hover:text-black' href={"/"}>Home</Link>
                <Link className='hover:text-black' href={"#"}>About</Link>
                <Link className='hover:text-black' href={"#"}>Contact Us</Link>
                <Link className='hover:text-black' href={"#"}>Blog</Link>
            </div>
            <div className='flex justify-center items-center gap-x-6 mt-5 lg:mt-0'>
                {HeaderIcon.map((icon, index) =>
                    <Link key={index} href={icon.path}>{icon.svg}</Link>
                )}
            </div>
        </nav>
    )
}
