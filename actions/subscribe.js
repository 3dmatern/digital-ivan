"use client";

import httpService from "@/services/http-service";
import localStorageService from "@/services/local-storage-service";

const HEADERS = {
    headers: {
        Authorization: `Bearer ${localStorageService.getAccessToken()}`,
        "Content-Type": "application/json",
    },
};

export const getSubscribe = async () => {
    try {
        const { data } = await httpService.get("get_subscribe", HEADERS);
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

export const subscribeExtend = async () => {
    try {
        // const { data } = await httpService.post(
        //     'extend_subscription',
        //     {
        //         months: 1,
        //     },
        //     HEADERS
        // );
        // console.log(data);

        fetch("http://niko-translate-web.ru/extend_subscription", {
            method: "post",
            body: JSON.stringify({
                months: 1,
            }),
            headers: HEADERS.headers,
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((er) => console.error(er));

        // localStorageService.updSubscribe(month);

        return {
            success: true,
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
