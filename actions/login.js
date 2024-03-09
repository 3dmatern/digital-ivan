"use server";

import { AuthError } from "next-auth";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { encodeStringInBase64 } from "@/utils/encodeStringInBase64";
import httpService from "@/services/http-service";

export const login = async (values, callbackUrl) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните поля!",
        };
    }

    const { username, password } = validatedFields.data;
    // const base64EncodeUsername = encodeStringInBase64(username);
    // const base64EncodePassword = encodeStringInBase64(password);

    // const payload = {
    //     username: base64EncodeUsername,
    //     password: base64EncodePassword,
    // };

    try {
        // const { data } = await httpService.post("login_web", payload, {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });

        await signIn("credentials", {
            // ...data,
            username,
            password,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
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

        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        error: "Неверные учетные данные!",
                    };
                default:
                    return {
                        error: "Что-то пошло не так!",
                    };
            }
        }

        throw error;
    }
};
