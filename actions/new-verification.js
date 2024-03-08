"use server";

import httpService from "@/services/http-service";

export const newVerification = async (verifidToken) => {
    let token = verifidToken.trim();

    if (!token) {
        return { error: "Токен не существует" };
    }

    try {
        const data = await httpService.get(`confirm/${token}`);
        console.log(data);

        return {
            success: data?.message,
        };
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

        return {
            error: "Что-то пошло не так. Попробуйте позже",
        };
    }
};
