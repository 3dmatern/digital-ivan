"use client";

import { LoginSchema } from "@/schemas";
import httpService from "@/services/http-service";
import { parseToken } from "@/services/parse-token";
import localStorageService from "@/services/local-storage-service";
import { encodeStringInBase64 } from "@/utils/encodeStringInBase64";

export const login = async (values, callbackUrl) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните поля!",
        };
    }

    const { email, password } = validatedFields.data;

    const base64EncodeEmail = encodeStringInBase64(email);
    const base64EncodePassword = encodeStringInBase64(password);

    const payload = {
        email: base64EncodeEmail,
        password: base64EncodePassword,
    };

    try {
        const { data } = await httpService.post("/login_web", payload);
        console.log(data);

        // const parseAccessToken = await parseToken(data.token);
        // localStorageService.setTokens({
        //     userId: parseAccessToken.userId,
        //     accessToken: data.token,
        //     expiresIn: data.expiration,
        // });

        return {
            success: true,
        };
    } catch (error) {
        console.error(error);

        return {
            error: error?.message,
        };
    }
};
