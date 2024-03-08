import Credentials from "next-auth/providers/credentials";

export const authConfig = {
    providers: [
        Credentials({
            async authorize(user) {
                console.log("authorize: ", user);

                if (user) return user;
                return null;
            },
        }),
    ],
};
