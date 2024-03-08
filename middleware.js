import NextAuth from "next-auth";

import { authConfig } from "@/auth.config";
import {
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
    DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isAuthRoute =
        !!nextUrl.searchParams.get("auth") ||
        !!nextUrl.searchParams.get("reset");

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    // const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    console.log("22: ", nextUrl.searchParams.get("auth"));
    console.log("23: ", isAuthRoute);

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            console.log("isAuthRoute, isLoggedIn");
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        return Response.redirect(
            new URL(`/?auth=login&callbackUrl=${encodedCallbackUrl}`, nextUrl)
        );
    }

    return null;
});

// Необязательно, не вызывайте промежуточное программное обеспечение на некоторых путях
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
