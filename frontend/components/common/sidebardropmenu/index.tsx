import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface DropdownMenuUserList {
    t:(key: string) => string;
    handlelogout: () => void;
    user: { _id: string, email: string }[],
}

export default function SidebarDropMenu({ t, handlelogout, user }: DropdownMenuUserList) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="mt-[30rem]">
                <Avatar className="bg-dark-charcoal border border-zinc-500 w-11 h-11">
                    <AvatarImage />
                    <AvatarFallback>a</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{t("profile")}</DropdownMenuLabel>
                {user.map((u, _id) => (
                    <DropdownMenuItem key={_id}>
                        <Link href={"/admin/home/settings/profile"}>{u.email}</Link>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link onClick={handlelogout} className="flex items-center gap-x-2 text-zinc-500 hover:text-zinc-700 hover:underline transition-all" href={{ pathname: "/admin/adminlogin" }}>{t(("logout"))}<LogOut size={16} /></Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
