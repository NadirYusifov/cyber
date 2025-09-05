import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/admin/home")) {
        const token = req.cookies.get("cybercookie")?.value

        if (!token) {
            if (req.nextUrl.pathname === "adminlogin") {
                return NextResponse.next();
            }
            return NextResponse.redirect(new URL("adminlogin", req.url));
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: "/admin/home/:path*"
}