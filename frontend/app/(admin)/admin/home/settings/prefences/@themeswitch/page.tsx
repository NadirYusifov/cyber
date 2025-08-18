"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations("Prefences");

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    };

    return (
        <section className="themes-section w-full mt-5">
            <div className="theme-select w-full flex items-center justify-between">
                <article className="themes-select-content">
                    <p className="text-[1.275rem]">{t("themesselect")}</p>
                </article>
                <div className="themes-change">
                    <select className="themes-select w-36 outline-none border border-zinc-500 rounded-sm px-2 py-1" value={theme} onChange={e => setTheme(e.target.value)}>
                        <option value="system">{t("system")}</option>
                        <option value="light">{t("light")}</option>
                        <option value="dark">{t("dark")}</option>
                    </select>
                </div>
            </div>
        </section>
    )
}
