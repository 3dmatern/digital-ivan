"use client";

import axios from "axios";

import localStorageService from "./local-storage-service";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

http.interceptors.request.use(
    async function (config) {
        const expiresDate = localStorageService.getTokenExpiresDate();
        const isExpired = new Date(expiresDate) < new Date();

        if (isExpired) {
            localStorageService.removeAuthData();
        } else {
            const accessToken = localStorageService.getAccessToken();
            if (accessToken) {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${accessToken}`,
                };
            }
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (res) => res,
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            console.error("Что-то пошло не так. Попробуйте позже");
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    put: http.put,
    post: http.post,
    delete: http.delete,
};

export default httpService;
