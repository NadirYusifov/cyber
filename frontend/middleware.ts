import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/admin/home")) {
        const token = req.cookies.get("cybercookie")?.value

        if (!token) {
            return NextResponse.redirect(new URL("adminlogin", req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: "/admin/home/:path*"
}