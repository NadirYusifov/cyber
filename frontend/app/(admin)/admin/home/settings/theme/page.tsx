"use client"

import setCookie from '@/servers/cookie';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Theme() {
    const { theme, setTheme } = useTheme();
    const [switchTheme, setSwitchTheme] = useState(false);
    const t = useTranslations("Themes");
    const local = useLocale();

    const handleselectLang = (e: any) => {
        e.preventDefault();
        setCookie("LANGUAGE", e.target.value);
    }

    useEffect(() => {
        setSwitchTheme(true)
    }, []);

    if (!switchTheme) {
        return null
    };

    return (
        <section className="themes-section w-full mt-5">
            <div className="container mx-auto px-4">
                <article className="themes-section-header">
                    <h3 className="text-[3rem] font-medium mb-10">{t("title")}</h3>
                </article>
                <div className="theme-select w-full flex items-center justify-between">
                    <article className="themes-select-content">
                        <p className="text-[1.275rem]">{t("themesselect")}</p>
                    </article>
                    <div className="themes-change bg-zinc-800/50 divide-zinc-800 rounded-md border border-zinc-800/40 dark:border-zinc-400 text-white px-3 py-1.5">
                        <select className="themes-select" value={theme} onChange={e => setTheme(e.target.value)}>
                            <option value="system">{t("system")}</option>
                            <option value="light">{t("light")}</option>
                            <option value="dark">{t("dark")}</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <article>
                        <h3>{t("langselect")}</h3>
                    </article>
                    <select defaultValue={local} onChange={handleselectLang}>
                        <option value="az">Azərbaycanca</option>
                        {/* <option value="tr">Türkçe</option> */}
                        <option value="en">Engilsh</option>
                    </select>
                </div>
            </div>
        </section>
    )
}
