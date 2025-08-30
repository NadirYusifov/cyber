'use client'

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Toast from "@/components/common/toast";
import { Button } from "@/components/ui/button";
import { CiLock, CiUnlock } from "react-icons/ci";

export default function AdminLogin() {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:7575/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "With-Credentials": "true"
        },
        body: JSON.stringify({ email, password })
      })
      if (res.ok) {
        toast.success("Login Successfully")
        router.push("/admin/home")
      } else {
        toast.error("Login Failed")
      }
    } catch (error) {
      toast.error("Server error")
      // console.log(error);
    }
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="container px-4 mx-auto flex flex-col justify-center items-center">
        <div className="w-full lg:w-1/2">
          <article className="pb-10 text-center">
            <h3 className="text-[2.188rem] font-medium">Admin Login</h3>
          </article>
          <form className="flex flex-col justify-center space-y-4" onSubmit={handleSubmit}>
            <Input value={email} name="username" onChange={(e) => setEmail(e.target.value)} className="py-5" type="email" placeholder="Email" required />
            <div className="relative">
              <Input className="relative py-5" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type={!showpassword ? "password" : "text"} placeholder="Password" required />
              <button type="button" onClick={() => setShowPassword(!showpassword)} className="text-[1.25rem] absolute top-0 right-5 translate-y-1/2 cursor-pointer">{!showpassword ? <CiLock /> : <CiUnlock />}</button>
            </div>
            <Button className="text-[1.125rem] py-5">Login</Button>
            <Toast />
          </form>
        </div>
      </div>
    </section>
  )
}
