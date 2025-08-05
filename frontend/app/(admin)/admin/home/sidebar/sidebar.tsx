// "use client"

import Link from 'next/link';
import Image from 'next/image';
// import { useState } from 'react';
import cyberlogo from "@/public/cyberlogo.png";
import { CirclePlus, House, LogOut, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Sidebar() {
  // const [menu, setMenu] = useState(false);
  const t = useTranslations("Sidebar")

  return (
    <aside className="w-sm size-full h-screen border-r-2 border-zinc-700">
      <div className="container mx-auto px-4 mt-10">
        {/* <picture className="flex items-center justify-center">
          <Image src={cyberlogo} width={100} height={100} quality={100} alt="cyber logo" />
        </picture> */}
        <article className="text-[1.3rem] flex flex-col space-y-3 pt-10">
          <Link className="flex items-center" href={"/admin/home"}>
            <span className="pr-2"><House /></span>
            {t("home")}
          </Link>
          <Link className="flex items-center" href={"/admin/home/addproduct"}>
            <span className="pr-2"><CirclePlus /></span>
            {t("addproducts")}
          </Link>
          <Link className="flex items-center" href={"/admin/home/settings"}>
            <span className="pr-2"><Settings /></span>
            {t("settings")}
          </Link>
        </article>

        <div className="mt-[42rem] flex items-center gap-x-3">
          <Avatar className="bg-dark-charcoal border border-zinc-500 w-11 h-11">
            <AvatarImage />
            <AvatarFallback>a</AvatarFallback>
          </Avatar>
          <article>
            <h3>admin</h3>
            <Link className="flex items-center gap-x-2 text-zinc-500 hover:text-red-500 hover:underline transition-all" href={""}>LogOut<LogOut size={16} /></Link>
          </article>
        </div>
      </div>
    </aside>
  )
}
