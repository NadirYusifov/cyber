"use client"

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Theme() {
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [switchTheme, setSwitchTheme] = useState(false);

    console.log(useTheme());


    useEffect(() => {
        setSwitchTheme(true)
    }, [])

    if (!switchTheme) {
        return null
    }

    return (
        <section className="mt-5">
            <div className="container mx-auto px-4">
                <article>
                    <h3 className="text-[3rem] font-medium mb-10">Theme</h3>
                </article>
                <div className="grid grid-cols-3 place-items-center place-content-center gap-4 bg-zinc-800/50 divide-zinc-800 rounded-md border border-zinc-800/40 dark:border-zinc-400 text-white px-3 py-1.5">
                    <button className="cursor-pointer" onClick={() => setTheme("system")}><Monitor /></button>
                    <button className="cursor-pointer" onClick={() => setTheme("light")}><Sun /></button>
                    <button className="cursor-pointer" onClick={() => setTheme("dark")}><Moon /></button>
                </div>
            </div>
        </section>
    )
}
