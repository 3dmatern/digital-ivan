"use client";

import httpService from "@/services/http-service";

export const newVerification = async (verifidToken) => {
    let token = verifidToken.trim();

    if (!token) {
        return { error: "Токен не существует" };
    }

    try {
        const data = await httpService.get(`/confirm/${token}`);
        console.log(data);

        return {
            success: "Почта подтверждена, теперь вы можете войти",
        };
    } catch (error) {
        console.error(error);

        return {
            error: error?.message,
        };
    }
};
