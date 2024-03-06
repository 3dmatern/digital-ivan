"use client";

import base64 from "base-64";
import utf8 from "utf8";

import { RegisterSchema } from "@/schemas";
import httpService from "@/actions/http-service";

export const register = async (values) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните поля!",
        };
    }

    const { email, username, password } = validatedFields.data;

    const bytesEncodeEmail = utf8.encode(email);
    const base64EncodeEmail = base64.encode(bytesEncodeEmail);

    const bytesEncodeUsername = utf8.encode(username);
    const base64EncodeUsername = base64.encode(bytesEncodeUsername);

    const bytesEncodePassword = utf8.encode(password);
    const base64EncodePassword = base64.encode(bytesEncodePassword);

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
        return {
            error: error?.message,
        };
    }
};
