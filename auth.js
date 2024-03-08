import NextAuth from "next-auth";

import { authConfig } from "@/auth.config";
import { parseToken } from "@/services/parse-token";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/?auth=login",
        error: "/?auth=error",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (!token.sub || !user.access_token) return null;

            const {
                sub: username,
                exp: tokenExp,
                subscription_end: subscriptionEnd,
            } = await parseToken(user.access_token);

            // Получаем текущее время в секундах
            const currentTimeInSeconds = Math.floor(Date.now() / 1000);
            // Проверяем, истек ли токен
            const isTokenExpired = tokenExp <= currentTimeInSeconds;

            if (isTokenExpired) {
                return null;
            }

            token.accessToken = user.access_token;
            token.username = username;
            token.subscriptionEnd = subscriptionEnd;

            return token;
        },
    },
    session: { strategy: "jwt" },
    ...authConfig,
});
