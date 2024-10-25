import axios from "axios";
import {AppError} from "@/utils/AppError";
import {apiUrl} from "@/etc";

const api = axios.create({
    baseURL: apiUrl
});

api.interceptors.response.use(
    (response) => {
        if (response.data.status !== undefined && response.data.status !== 200)
            return Promise.reject(new AppError(response.data.message))
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            console.log(error.message)
            return Promise.reject(new AppError(error.data.message))
        }
        else {
            console.log(error)
            return Promise.reject(new AppError(error))
        }
    }
)

export { api }