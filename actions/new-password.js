"use client";

import { NewPasswordSchema } from "@/schemas";

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
        // const { data } = await httpService.post(
        //     `reset_password/${token}`,
        //     payload
        // );
        // console.log(data);

        return {
            success: "Пароль успешно обновлен!",
        };
    } catch (error) {
        console.error(error);

        return {
            error: error?.message,
        };
    }
};
