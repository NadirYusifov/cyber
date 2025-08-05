"use client"

import { useTheme } from 'next-themes';
import setCookie from '@/servers/cookie';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Monitor } from 'lucide-react';
// import { Monitor } from 'lucide-react';

export default function Theme() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations("Prefences");
    const local = useLocale();

    const handleselectLang = (e: any) => {
        e.preventDefault();
        setCookie("LANGUAGE", e.target.value);
    }

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    };

    return (
        <section className="themes-section w-full mt-5">
            <div className="container mx-auto px-4">
                <article className="themes-section-header">
                    <h3 className="text-[3rem] font-medium mb-10">{t("prefences")}</h3>
                </article>
                <div className="theme-select w-full flex items-center justify-between">
                    <article className="themes-select-content">
                        <p className="text-[1.275rem]">{t("themesselect")}</p>
                    </article>
                    <div className="themes-change">
                        <select className="themes-select w-36 outline-1" value={theme} onChange={e => setTheme(e.target.value)}>
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
                        <option value="en">Engilsh</option>
                    </select>
                </div>
            </div>
        </section>
    )
}
