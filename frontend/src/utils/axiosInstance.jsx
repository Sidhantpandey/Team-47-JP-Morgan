import axios from "axios";

const axiosInstance = axios.create({
    baseURL:
        import.meta.env.VITE_API_BASE_URL ||
        "https://team-47-jp-morgan.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
