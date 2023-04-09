export { default } from "next-auth/middleware"

export const config = { matcher: ["/records/:path*", "/records/:path*/update" ,"/records/new"] };