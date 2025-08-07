"use client"

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Lock, Unlock } from 'lucide-react';

export default function ProfileEdit() {
  const t = useTranslations("ProfileEdit");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="mt-5">
      <div className="container mx-auto px-4">
        <article className="mb-10">
          <h3 className="text-[3rem]">
            {t("profileedit")}
          </h3>
        </article>
        <div className="rounded-lg border border-zinc-700 p-10">
          <Avatar className="w-16 h-16 border border-zinc-500">
            <AvatarImage />
            <AvatarFallback className="bg-dark-charcoal text-white text-[1.6rem]">a</AvatarFallback>
          </Avatar>
          <form onChange={(e) => e.preventDefault()} className="relative w-full flex flex-col lg:gap-x-3 pt-7">
            <label htmlFor="Name">{t("name")}:</label>
            <input className="outline-none border-1 border-zinc-500 px-3 py-1 mt-1 rounded-sm" type="text" />
            <div className="relative mt-5">
              <label htmlFor="Password">{t("password")}:</label>
              <input className="relative w-full outline-none border-1 border-zinc-500 px-3 py-1 mt-1 rounded-sm" type={showPassword ? "text" : "password"} />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 translate-y-1/2" type="button">{showPassword ? <Unlock size={18} /> : <Lock size={18} />}</button>
            </div>
            <div className="flex items-center gap-x-3 mt-5">
              <Button className="text-black dark:text-white" variant={"outline"}>{t("cancel")}</Button>
              <Button>{t("save")}</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
