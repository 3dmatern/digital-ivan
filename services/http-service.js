"use client";

import axios from "axios";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

const httpService = {
    get: http.get,
    put: http.put,
    post: http.post,
    delete: http.delete,
};

export default httpService;
