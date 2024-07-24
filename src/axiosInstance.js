import axios from "axios";

const BaseUrl = "https://strapi-store-server.onrender.com/api"

export const axiosInstance = axios.create({
    baseURL: BaseUrl,
})