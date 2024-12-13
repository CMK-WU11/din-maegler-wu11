import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function middleware(request) {
	const cookieStore = await cookies()
	const token = cookieStore.get("dm_token")
	const userId = cookieStore.get("dm_userid")

	if (!token || !userId) return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
	matcher: "/my-favorites/:path*"
}