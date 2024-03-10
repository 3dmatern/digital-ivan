"use server";

import { cookies } from "next/headers";

import httpService from "@/services/http-service";

export const createSubscribe = async ({ accessToken, subscriptionPeriod }) => {
    try {
        const { data } = await httpService.post(
            "add_subscribe",
            {
                months: subscriptionPeriod,
            },
            generateHeaders(accessToken)
        );
        console.log(data);

        return {
            success: data.message,
        };
    } catch (error) {
        console.error("actions subscribe: ", error);

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

export const subscribeExtend = async (accessToken) => {
    try {
        const { data } = await httpService.post(
            "extend_subscription",
            {
                months: 1,
            },
            generateHeaders(accessToken)
        );
        const {
            data: { subscription_end, username },
        } = await httpService.get(
            "get_subscribe",
            generateHeaders(accessToken)
        );

        cookies().set("username", username);
        cookies().set("subscriptionEnd", subscription_end);

        return {
            success: data.message,
        };
    } catch (error) {
        console.error("actions subscribe: ", error);

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

function generateHeaders() {
    const accessToken = cookies().get("accessToken")?.value;

    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    };
}
