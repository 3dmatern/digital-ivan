"use client";

import { RegisterSchema } from "@/schemas";
import httpService from "@/services/http-service";
import { encodeStringInBase64 } from "@/utils/encodeStringInBase64";

export const register = async (values) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните поля!",
        };
    }

    const { email, username, password } = validatedFields.data;

    const base64EncodeEmail = encodeStringInBase64(email);
    const base64EncodeUsername = encodeStringInBase64(username);
    const base64EncodePassword = encodeStringInBase64(password);

    const payload = {
        email: base64EncodeEmail,
        username: base64EncodeUsername,
        password: base64EncodePassword,
    };

    try {
        const data = await httpService.post("/register", payload);
        console.log(data);

        return {
            success: "Регистрация прошла успешно, проверьте почту",
        };
    } catch (error) {
        console.error(error);

        if (error.code === "ERR_NETWORK") {
            return {
                error: "Что-то пошло не так. Попробуйте позже",
            };
        }

        return {
            error: error?.message,
        };
    }
};
