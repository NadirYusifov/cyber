"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { CirclePlus, House, LogOut, Settings, SquareChevronLeft, SquareChevronRight } from 'lucide-react';
import SidebarDropMenu from '@/components/common/sidebardropmenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



export default function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");
  const [largesidebarmenu, setLargeSidebarMenu] = useState(true);

  return (
    <>
      {/* {largesidebarmenu } */}
      <aside className={`flex border-r-2 border-zinc-700 h-screen transition-all duration-400 ease-in-out ${!largesidebarmenu ? "w-[5rem]" : "w-sm"}`}>
        <div className="container mx-auto px-4 mt-10">
          <div className={`pb-6 flex ${!largesidebarmenu ? "justify-center items-center" : "justify-end"}`}>
            <button className="" onClick={() => setLargeSidebarMenu(!largesidebarmenu)}>
              <span>{!largesidebarmenu ? <SquareChevronLeft /> : <SquareChevronRight />}</span>
            </button>
          </div>
          <article className="text-center">
            <h3 className="text-[2rem] font-bold">{!largesidebarmenu ? "A" : "Admin Panel"}</h3>
          </article>
          <article className="text-[1.3rem] flex flex-col space-y-3 pt-10">
            <Link className={`flex items-center transition-all ease-in hover:bg-dark-charcoal hover:text-white text px-2 py-1 rounded-sm ${!largesidebarmenu && "justify-center"} ${pathname == "/admin/home" ? "bg-dark-charcoal text-white px-2 py-1 rounded-sm" : ""}`} href={"/admin/home"}>
              <span title="Dashboard" className={`${largesidebarmenu && "pr-2"}`}><House /></span>
              <p className={`${!largesidebarmenu && "sr-only"}`}>{t("home")}</p>
            </Link>
            <Link className={`flex items-center transition-all ease-in hover:bg-dark-charcoal hover:text-white text px-2 py-1 rounded-sm ${!largesidebarmenu && "justify-center "} ${!largesidebarmenu && pathname == "/admin/home/addproduct" ? "bg-dark-charcoal text-white px-2 py-1 rounded-sm" : ""}`} href={"/admin/home/addproduct"}>
              <span title="Add Products" className={`${largesidebarmenu && "pr-2"}`}><CirclePlus /></span>
              <p className={`${!largesidebarmenu && "sr-only"}`}>{t("addproducts")}</p>
            </Link>
            <Link className={`flex items-center transition-all ease-in hover:bg-dark-charcoal hover:text-white text px-2 py-1 rounded-sm ${!largesidebarmenu && "justify-center"} ${pathname == "/admin/home/settings" ? "bg-dark-charcoal text-white px-2 py-1 rounded-sm" : ""}`} href={"/admin/home/settings"}>
              <span title="Settings" className={`${largesidebarmenu && "pr-2"}`}><Settings /></span>
              <p className={`${!largesidebarmenu && "sr-only"}`}>{t("settings")}</p>
            </Link>
          </article>
          {
            !largesidebarmenu ? <SidebarDropMenu t={t} /> :
              <div className="mt-[39rem] flex items-center gap-x-3">

                <Avatar className="bg-dark-charcoal border border-zinc-500 w-11 h-11">
                  <AvatarImage />
                  <AvatarFallback>a</AvatarFallback>
                </Avatar>
                <article className="flex flex-col">
                  <Link href={"/admin/home/settings/profile"}>admin</Link>
                  <Link className="flex items-center gap-x-2 text-zinc-500 hover:text-zinc-700 hover:underline transition-all" href={""}>{t(("logout"))}<LogOut size={16} /></Link>
                </article>
              </div>
          }
        </div>
      </aside>
    </>
  )
}
