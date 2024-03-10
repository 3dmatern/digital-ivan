"use server";

import { NewPasswordSchema } from "@/schemas";
import { encodeStringInBase64 } from "@/utils/encodeStringInBase64";
import httpService from "@/services/http-service";

export const newPassword = async (values, resetToken) => {
    let token = resetToken.trim();

    if (!token) {
        return { error: "Токен не существует" };
    }

    const validatedFields = NewPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Введите пароль!",
        };
    }

    const { password } = validatedFields.data;

    const base64EncodePassword = encodeStringInBase64(password);

    const payload = {
        password: base64EncodePassword,
    };

    try {
        const { data } = await httpService.post(
            `reset_password/${token}`,
            payload
        );

        return {
            success: data.message,
        };
    } catch (error) {
        console.error("actions newPassword: ", error);

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
