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
    <section className="">
      <div className="container mx-auto px-4">
        <article>{t("profileedit")}</article>
        <Avatar>
          <AvatarImage />
          <AvatarFallback>a</AvatarFallback>
        </Avatar>
          <form onChange={(e) => e.preventDefault()} className="relative">
            <label htmlFor="Name">{t("name")}:</label>
            <input type="text" />
            <div className="relative">
              <label htmlFor="Password">{t("password")}:</label>
              <input className="relative outline-1" type={showPassword ? "text" : "password"} />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute top-0.5 right-2" type="button">{showPassword ? <Unlock size={18}/> : <Lock size={18}/>}</button>
            </div>
            <div className="flex items-center gap-x-3">
            <Button variant={"destructive"}>{t("cancel")}</Button>
            <Button>{t("save")}</Button>
            </div>
          </form>
      </div>
    </section>
  )
}
