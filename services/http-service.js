import axios from "axios";

const http = axios.create({
    baseURL: process.env.API_ENDPOINT,
});

const httpService = {
    get: http.get,
    put: http.put,
    post: http.post,
    delete: http.delete,
};

export default httpService;
