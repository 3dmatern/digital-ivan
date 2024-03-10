"use server";

import { ResetSchema } from "@/schemas";
import httpService from "@/services/http-service";
import { encodeStringInBase64 } from "@/utils/encodeStringInBase64";

export const reset = async (values) => {
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Неправильный email!",
        };
    }

    const { email } = validatedFields.data;

    const base64EncodeEmail = encodeStringInBase64(email);

    const payload = {
        email: base64EncodeEmail,
    };

    try {
        const { data } = await httpService.post(
            "request_reset_password",
            payload
        );

        return {
            success: data.message,
        };
    } catch (error) {
        console.error("actions reset: ", error);

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
