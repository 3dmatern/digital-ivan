"use client";

import httpService from "@/services/http-service";
import localStorageService from "@/services/local-storage-service";

const HEADERS = {
    headers: {
        Authorization: `Bearer ${localStorageService.getAccessToken()}`,
    },
};

export const getSubscribe = async () => {
    try {
        const { data } = await httpService.get("/get_subscribe", HEADERS);
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
        const { data } = await httpService.post(
            "/extend_subscription",
            {
                months: 1,
            },
            HEADERS
        );
        console.log(data);

        return {
            success: true,
        };
    } catch (error) {
        console.error(error);

        return {
            error: error?.message,
        };
    }
};
