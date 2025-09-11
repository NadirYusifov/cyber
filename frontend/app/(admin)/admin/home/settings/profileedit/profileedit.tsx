"use client"

import { toast } from 'sonner';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Lock, Unlock } from 'lucide-react';
import Toast from '@/components/common/toast';
import { Button } from '@/components/ui/button';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface profileedittypes {
  userId: string | null
}

export default function ProfileEdit({ userId }: profileedittypes) {

  const t = useTranslations("ProfileEdit");
  const [editprofile, setEditProfile] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditProfile({ ...editprofile, [e.target.name]: e.target.value })
  };

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    const res = await fetch(`http://localhost:7575/auth/profileedit/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editprofile),
      credentials: "include"
    })
    if (res.ok) {
      const data = res.json()
      toast.success("Update successfully.")
      console.log(data);
    } else {
      toast.error("Error updating profile")
    }
  };

  return (
    <section className="w-full mt-5">
      <div className="container mx-auto px-4">
        <article className="mb-10">
          <h3 className="text-[3rem]">
            {t("profileedit")}
          </h3>
        </article>
        <div className="w-full lg:w-1/2 mx-auto rounded-lg border border-zinc-700 p-10">
          <Avatar className="w-16 h-16 border border-zinc-500">
            <AvatarImage />
            <AvatarFallback className="bg-dark-charcoal text-white text-[1.6rem]">a</AvatarFallback>
          </Avatar>
          <form onSubmit={handleSumbit} className="relative w-full flex flex-col lg:gap-x-3 pt-7">
            <label htmlFor="Email">{t("email")}:</label>
            <input onChange={handleChange} name="email" value={editprofile.email} className="outline-none border-1 border-zinc-500 px-3 py-1 mt-1 rounded-sm" type="email" required />
            <div className="relative mt-5">
              <label htmlFor="Password">{t("password")}:</label>
              <input onChange={handleChange} name="password" value={editprofile.password} className="relative w-full outline-none border-1 border-zinc-500 px-3 py-1 mt-1 rounded-sm" type={showPassword ? "text" : "password"} required />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 translate-y-1/2" type="button">{showPassword ? <Unlock size={18} /> : <Lock size={18} />}</button>
            </div>
            <div className="flex items-center gap-x-3 mt-5">
              <Button className="text-black dark:text-white" variant={"outline"}>{t("cancel")}</Button>
              <Button>{t("save")}</Button>
            </div>
            <Toast />
          </form>
        </div>
      </div>
    </section>
  )
}
