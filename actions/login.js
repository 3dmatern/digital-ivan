"use server";

import { cookies } from "next/headers";

import { LoginSchema } from "@/schemas";
import { encodeStringInBase64 } from "@/utils/encodeStringInBase64";
import httpService from "@/services/http-service";
import { parseToken } from "@/services/parse-token";

export const login = async (values) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните поля!",
        };
    }

    const { username, password } = validatedFields.data;
    const base64EncodeUsername = encodeStringInBase64(username);
    const base64EncodePassword = encodeStringInBase64(password);

    const payload = {
        username: base64EncodeUsername,
        password: base64EncodePassword,
    };

    try {
        const { data } = await httpService.post("login_web", payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!data.success) return { error: data.message };

        const { sub, exp } = await parseToken(data.access_token);

        cookies().set("username", sub);
        cookies().set("subscriptionEnd", data.subscription_end);
        cookies().set("accessToken", data.access_token);
        cookies().set("expiresIn", exp);

        return {
            success: true,
        };
    } catch (error) {
        console.error("actions login: ", error);

        if (error?.code === "ERR_NETWORK") {
            return {
                error: "Что-то пошло не так. Попробуйте позже",
            };
        }

        if (error.code === "ERR_BAD_REQUEST") {
            return {
                error: error?.response?.data?.message,
            };
        }

        return {
            error: "Что-то пошло не так. Попробуйте позже",
        };
    }
};
