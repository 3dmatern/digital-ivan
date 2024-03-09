import Credentials from "next-auth/providers/credentials";

import { encodeStringInBase64 } from "@/utils/encodeStringInBase64";
import { LoginSchema } from "@/schemas";
import httpService from "@/services/http-service";

export const authConfig = {
    providers: [
        Credentials({
            async authorize(credentials, req) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { username, password } = validatedFields.data;
                    const base64EncodeUsername = encodeStringInBase64(username);
                    const base64EncodePassword = encodeStringInBase64(password);
                    const payload = {
                        username: base64EncodeUsername,
                        password: base64EncodePassword,
                    };

                    const { data } = await httpService.post(
                        "login_web",
                        payload,
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    if (data.success) {
                        return data;
                    }
                }

                return null;
            },
        }),
    ],
};
