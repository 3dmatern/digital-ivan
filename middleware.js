import { NextResponse } from "next/server";

import { DEFAULT_LOGIN_REDIRECT, authRoutes, publicRoutes } from "@/routes";

export default function middleware(request) {
    const { nextUrl } = request;
    const expiresIn = request.cookies.get("expiresIn")?.value;
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const isTokenNotExpired = expiresIn > currentTimeInSeconds;

    const isAuthRoute = authRoutes.some((route) =>
        nextUrl.search?.startsWith(route)
    );
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (isAuthRoute) {
        if (isTokenNotExpired) {
            return NextResponse.redirect(
                new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)
            );
        }

        return null;
    }

    if (!isTokenNotExpired && !isPublicRoute) {
        return Response.redirect(new URL("/?auth=login", nextUrl));
    }

    return null;
}

// При желании не вызывайте промежуточное ПО на некоторых путях.
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
