import { ChevronRight, Pencil, SunMoon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SettingsPage() {
  return (
    <section className="w-full mt-5">
      <div className="container mx-auto px-4">
        <article className="text-[3rem] font-medium mb-10">
          <h3>Settings</h3>
        </article>
        <article className="flex flex-col flex-wrap space-y-2">
          <Link className="text-[1.3rem] flex items-center justify-between w-full hover:bg-dark-charcoal hover:text-white px-2 py-1.5 rounded-md transition-all" href={"/admin/home/settings/profile"}>
            Profile
            <span><ChevronRight /></span>
          </Link>
          <Link className="text-[1.3rem] flex items-center justify-between w-full hover:bg-dark-charcoal hover:text-white px-2 py-1.5 rounded-md transition-all" href={"/admin/home/settings/profileedit"}>
            <Pencil />
            Profile Edit
            <span><ChevronRight /></span>
          </Link>
          <Link className="text-[1.3rem] flex items-center justify-between w-full hover:bg-dark-charcoal hover:text-white px-2 py-1.5 rounded-md transition-all" href={"/admin/home/settings/theme"}>
            <span><SunMoon /></span>
            Theme
            <span><ChevronRight /></span>
          </Link>
        </article>
      </div>
    </section>
  )
}
