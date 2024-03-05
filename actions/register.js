"use client";

import { RegisterSchema } from "@/schemas";

export const register = async (values) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Заполните поля!",
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
