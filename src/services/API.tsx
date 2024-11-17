import axios from "axios";

// this is interceptor file you can customize the header here.
// base url
const BASE_URL  = import.meta.env.VITE_BASE_URL;


const API = axios.create({
    baseURL:BASE_URL
});

API.interceptors.request.use((config)=>{
    return config;
},(error)=>{
    return Promise.reject(error);
});

API.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    return Promise.reject(error);
})

export default API;