import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (email, password, role) => {
    const { data } = await axiosInstance.post("/api/auth/login", {
        email,
        password,
        role,
    });
    return data;
};

export const registerUser = async (fullName, email, password, role) => {
    const { data } = await axiosInstance.post("/api/auth/register", {
        fullName,
        email,
        password,
        role,
    });
    return data;
};