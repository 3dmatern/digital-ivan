import NextAuth from "next-auth";

import { authConfig } from "@/auth.config";
import { parseToken } from "@/services/parse-token";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async signIn({ user }) {
            console.log("signIn: ", user);

            // Запретить вход без подтверждения электронной почты
            if (!user) {
                return false;
            }

            return true;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role;
            }

            if (session.user) {
                session.user.nickname = token.nickname;
                session.user.email = token.email;
            }

            return session;
        },
        async jwt({ token, user }) {
            if (!token.sub) return null;
            if (!user) return null;
            if (!user.access_token) return null;

            const {
                sub: username,
                exp,
                subscription_end: subscriptionEnd,
            } = await parseToken(user.access_token);

            token.exp = exp;

            // Получаем текущее время в секундах
            const currentTimeInSeconds = Math.floor(Date.now() / 1000);
            // Проверяем, истек ли токен
            const isTokenExpired = token.exp <= currentTimeInSeconds;

            if (isTokenExpired) {
                return null;
            }

            token.accessToken = user.access_token;
            token.username = username;
            token.subscriptionEnd = subscriptionEnd;

            return token;
        },
    },
    secret: "super",
    trustHost: true,

    ...authConfig,
});
