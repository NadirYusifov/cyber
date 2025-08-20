import { useTranslations } from 'next-intl';
import LanguageSwitch from './@languageswitch/page';
import ThemeSwitch from './@themeswitch/page';

export default function Theme() {
    const t = useTranslations("Prefences");

    return (
        <main className="themes-section w-full mt-5">
            <div className="container mx-auto px-4">
                <article className="themes-section-header mb-10">
                    <h3 className="text-[3rem] font-medium">{t("prefences")}</h3>
                </article>
                <ThemeSwitch />
                <LanguageSwitch />
            </div>
        </main>
    )
}
