'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CiLock, CiUnlock } from "react-icons/ci";
import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState(false)

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <div className="w-1/2">
          <article className="pb-10 text-center">
            <h3 className="text-[2.188rem] font-medium">Admin Login</h3>
          </article>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center space-y-4">
            <Input className="py-5" type="text" placeholder="Username" />
            <div className="relative">
              <Input className="relative py-5" type={!password ? "password" : "text"} placeholder="Password" />
              <button type="button" onClick={() => setPassword(!password)} className="text-[1.25rem] absolute top-0 right-5 translate-y-1/2 cursor-pointer">{!password ? <CiLock /> : <CiUnlock />}</button>
            </div>
            <Button className="text-[1.125rem] py-5">Login</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
