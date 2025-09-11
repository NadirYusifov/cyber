import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import ProfileEdit from "./profileedit";

interface tokepayload {
    userId?: string;
    _id?: string
    id?: string;
    role: string;
    exp: number;
    iat: number
}

export default async function ProfileEditPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("cybercookie")?.value

    let userId: string | null = null

    if (token) {
        const decoded: tokepayload = jwtDecode(token);
        userId = decoded.id || null
    }

    return <ProfileEdit userId={userId} />
}
