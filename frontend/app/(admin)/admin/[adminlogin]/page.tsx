'use client'

import { useState } from "react";
// import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CiLock, CiUnlock } from "react-icons/ci";

export default function AdminLogin() {
  // const router = useRouter()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <div className="w-1/2">
          <article className="pb-10 text-center">
            <h3 className="text-[2.188rem] font-medium">Admin Login</h3>
          </article>
          <form className="flex flex-col justify-center space-y-4">
            <Input value={username} name="username" onChange={(e) => setUsername(e.target.value)} className="py-5" type="text" placeholder="Username" required />
            <div className="relative">
              <Input className="relative py-5" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type={!showpassword ? "password" : "text"} placeholder="Password" required />
              <button type="button" onClick={() => setShowPassword(!showpassword)} className="text-[1.25rem] absolute top-0 right-5 translate-y-1/2 cursor-pointer">{!showpassword ? <CiLock /> : <CiUnlock />}</button>
            </div>
            <Button className="text-[1.125rem] py-5">Login</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
