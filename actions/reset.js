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

    if (email) {
        return email;
    }

    return {
        error: "Что-то пошло не так!",
    };
};
