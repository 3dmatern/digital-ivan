"use client";

import { ResetSchema } from "@/schemas";

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
        // const { data } = await httpService.post(
        //     "request_reset_password",
        //     payload
        // );
        // console.log(data);

        console.log("http://localhost:3000/?reset=qwe");

        return {
            success: "Проверьте вашу почту",
        };
    } catch (error) {
        console.error(error);

        return {
            error: error?.message,
        };
    }
};
