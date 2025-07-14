import { CirclePlus, House, Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar({children}: any) {
  return (
    <aside className="bg-dark-charcoal text-white max-w-xs h-screen">
      <div className="container mx-auto px-4">
        <article className="text-[2.5rem]">
          <h3>Admin Panel</h3>
        </article>
        <article className="text-[1.3rem] flex flex-col space-y-3 pt-10">
          <Link className="flex items-center" href={"/admin/home"}><House />Home</Link>
          <Link className="flex items-center" href={"/admin/home/addproduct"}><CirclePlus />Add Product</Link>
          <Link className="flex items-center" href={"/admin/home/settings"}><Settings />Settings</Link>
        </article>
      </div>
    </aside>
  )
}
