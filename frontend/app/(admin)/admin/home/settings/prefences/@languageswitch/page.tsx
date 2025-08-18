"use client"

import setCookie from '@/servers/cookie';
import { useLocale, useTranslations } from 'next-intl';

export default function LanguageSwitch() {
    const t = useTranslations("Prefences");
    const local = useLocale();

    const handleselectLang = (e: any) => {
        e.preventDefault();
        setCookie("LANGUAGE", e.target.value);
    }

    return (
        <section className="themes-section w-full mt-5">
                <div className="flex items-center justify-between mt-3">
                    <article>
                        <p className="text-[1.275rem]">{t("langselect")}</p>
                    </article>
                    <select className="w-36 outline-none border border-zinc-500 rounded-sm px-2 py-1" defaultValue={local} onChange={handleselectLang}>
                        <option value="az">Azərbaycanca</option>
                        <option value="en">Engilsh</option>
                    </select>
                </div>
        </section>
    )
}
