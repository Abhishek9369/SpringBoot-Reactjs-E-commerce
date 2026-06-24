import axios from "axios";

const API = axios.create({
    baseURL: "https://springboot-reactjs-e-commerce.onrender.com/api",
});

delete API.defaults.headers.common["Authorization"];
export default API;
