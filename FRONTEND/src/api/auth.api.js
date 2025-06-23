import axiosInstance from "../utils/axiosInstance";

export const loginUSer = async (email, password) => {
    const { data } = await axiosInstance.post("/api/auth/login", {
        email,
        password,
    });
    return data;
};