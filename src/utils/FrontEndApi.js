import axios from "axios";
import { toast } from "react-toastify";

const frontendApi = axios.create({
    baseURL: process.env.API_URL,
    headers: { "Content-Type": "application/json" },
});

frontendApi.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 400) {
            toast.error("Bad Request!");
        } else if (error.response.status === 401) {
            // verificar se o token está expirado
            window.location = "/login";
        } else if (error.response.status >= 500) {
            window.location = "/sorry";
        }

        return Promise.reject(error);
    }
);

export default frontendApi;
