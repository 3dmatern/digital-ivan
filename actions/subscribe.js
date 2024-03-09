"use server";

import httpService from "@/services/http-service";

export const getSubscribe = async (accessToken) => {
    try {
        const { data } = await httpService.get(
            "get_subscribe",
            generateHeaders(accessToken)
        );
        console.log(data);

        return {
            success: data,
        };
    } catch (error) {
        console.error(error);

        return {
            error: error?.message,
        };
    }
};

export const subscribeExtend = async (accessToken) => {
    try {
        const { data } = await httpService.post(
            "extend_subscription",
            {
                months: 1,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("data", data);

        return {
            success: data.message,
        };
    } catch (error) {
        if (error?.code === "ERR_NETWORK") {
            return {
                error: "Что-то пошло не так. Попробуйте позже",
            };
        }

        if (error.code === "ERR_BAD_REQUEST") {
            return {
                error: error?.response?.data?.msg,
            };
        }

        return {
            error: "Что-то пошло не так. Попробуйте позже",
        };
    }
};

function generateHeaders(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };
}
