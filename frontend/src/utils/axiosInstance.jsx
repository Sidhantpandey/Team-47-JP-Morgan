import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://team-47-jp-morgan.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
