import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function SettingsPage() {
const t = await getTranslations("Settings")

  return (
    <section className="w-full mt-5">
      <div className="container mx-auto px-4">
        <article className="text-[3rem] font-medium mb-10">
          <h3>{t("settings")}</h3>
        </article>
        <article className="flex flex-col flex-wrap space-y-2">
          <Link className="text-[1.3rem] flex items-center justify-between w-full active:text-white active:bg-dark-charcoal hover:bg-dark-charcoal hover:text-white px-2 py-1.5 rounded-md transition-all" href={"/admin/home/settings/profile"}>
            {t("profile")}
            <span><ChevronRight /></span>
          </Link>
          <Link className="text-[1.3rem] flex items-center justify-between w-full active:text-white active:bg-dark-charcoal hover:bg-dark-charcoal hover:text-white px-2 py-1.5 rounded-md transition-all" href={"/admin/home/settings/profileedit"}>
            {t("profileedit")}
            <span><ChevronRight /></span>
          </Link>
          <Link className="text-[1.3rem] flex items-center justify-between w-full active:text-white focus:bg-dark-charcoal hover:bg-dark-charcoal hover:text-white px-2 py-1.5 rounded-md transition-all" href={"/admin/home/settings/prefences"}>
            {t("prefences")}
            <span><ChevronRight /></span>
          </Link>
        </article>
      </div>
    </section>
  )
}
