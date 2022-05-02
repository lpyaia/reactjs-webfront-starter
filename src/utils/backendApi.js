import axios from "axios";
import { toast } from "react-toastify";

const backendApi = axios.create({
    baseURL: process.env.API_URL,
    headers: { "Content-Type": "application/json" },
});

backendApi.interceptors.response.use(
    function (response) {
        return response.data.responseObject;
    },
    function (error) {
        if (error.response.status === 400) {
            toast.error(error.response.data.formattedErrors);
        } else if (error.response.status === 401) {
            window.location = `/login?url=${window.location.pathname}${window.location.search}`;
        } else if (error.response.status === 403) {
            window.location = "/forbidden";
        } else if (error.response.status >= 500) {
            window.location = "/sorry";
        }

        return Promise.reject(error);
    }
);

export default backendApi;
