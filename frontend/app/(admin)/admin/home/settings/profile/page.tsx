"use client"

import { toast } from 'sonner';
import { useEffect, useState } from 'react';
// import { Lock, Unlock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Profile() {

  interface User {
    email: string,
  }

  const [users, setUsers] = useState<User[]>([]);
  // const [showPassword, setshowPassword] = useState(false);

  useEffect(() => {
    try {
      fetch("http://localhost:7575/auth/profile")
        .then((res) => res.json())
        .then((res) => setUsers(res.user))
    } catch (error) {
      toast.error("Server Error, please try again later.")
    }
  }, [])

  return (
    <section className="w-full mt-5">
      <div className="container mx-auto px-4">
        <article>
          <h3 className="text-[3rem] font-medium mb-10">Profile</h3>
        </article>
        {users?.map((adminuser, _id) => (
          <div className="w-full h-fit rounded-lg border border-zinc-700 p-10" key={_id}>
            <div className="mb-10">
              <Avatar className="w-16 h-16 border border-zinc-500">
                <AvatarImage src="" alt="avatar image" />
                <AvatarFallback className="bg-dark-charcoal text-white text-[1.6rem]">{adminuser.email.slice(0, 1)}</AvatarFallback>
              </Avatar>
            </div>
            <article>
              <div className="flex items-center gap-x-4">
                <p className="text-zinc-600">Email:</p>
                <p>{adminuser.email}</p>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="text-zinc-600">Password:</p>
                <div className="relative">
                  {/* <input className="outline-0 relative" value={""} type={showPassword ? "text" : "password"} readOnly />
                  <button onClick={() => setshowPassword(!showPassword)} className="absolute right-2">{showPassword ? <Unlock /> : <Lock />}</button> */}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
