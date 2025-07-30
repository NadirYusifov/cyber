"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import cyberlogo from "@/public/cyberlogo.png";
import { CirclePlus, House, Settings } from 'lucide-react';

export default function Sidebar() {
  const [menu, setMenu] = useState(false)

  return (
    <aside className="w-xs size-full h-screen border-r-2 border-zinc-700">
      <div className="container mx-auto px-4 mt-10">
        <picture className="flex items-center justify-center">
          <Image src={cyberlogo} width={100} height={100} quality={100} alt="cyber logo" />
        </picture>
        <article className="text-[1.3rem] flex flex-col space-y-3 pt-10">
          <Link className="flex items-center" href={"/admin/home"}>
            <span className="pr-2"><House /></span>
            Home
          </Link>
          <Link className="flex items-center" href={"/admin/home/addproduct"}>
            <span className="pr-2"><CirclePlus /></span>
            Add Product</Link>
          <Link className="flex items-center" href={"/admin/home/settings"}>
            <span className="pr-2"><Settings /></span>
            Settings
          </Link>
        </article>
      </div>
    </aside>
  )
}
