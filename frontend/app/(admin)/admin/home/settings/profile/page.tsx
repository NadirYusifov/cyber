"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Lock, Unlock } from 'lucide-react'
import { useState } from 'react'
// import Image from 'next/image'

export default function Profile() {

  const [showPassword, setshowPassword] = useState(false)

  return (
    <section className="w-full mt-5">
      <div className="container mx-auto px-4">
        <article>
          <h3 className="text-[3rem] font-medium mb-10">Profile</h3>
        </article>
        <div className="w-full h-fit items-center rounded-lg border border-zinc-700 p-10">
          <div className="mb-10">
            <Avatar className="w-16 h-16 border border-zinc-500">
              <AvatarImage src="" alt="avatar image" />
              <AvatarFallback className="bg-dark-charcoal text-white text-[1.6rem]">a</AvatarFallback>
            </Avatar>
          </div>
          <article>
            <div className="flex items-center gap-x-4">
              <p className="text-zinc-600">Name:</p>
              <p>admin</p>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-zinc-600">Password:</p>
              <div className="relative">
                <input className="outline-0 relative" value={"admin123"} type={showPassword ? "text" : "password"} readOnly />
                <button onClick={() => setshowPassword(!showPassword)} className="absolute right-2">{showPassword ? <Unlock /> : <Lock />}</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
