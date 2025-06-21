import axios from "axios";

const instance = axios.create({
    baseURL: "https://myshop189.onrender.com",
});

export default instance;
