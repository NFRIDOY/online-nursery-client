import axios from "axios";

// Vercel URL RepleaceMaent (carefull with the /)
// http://localhost:5000

const instance = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: 'https://online-nursery-server-nine.vercel.app/api',
    // baseURL: "/api",
    // baseURL: import.meta.env.VITE_Server_API_URL,
});

const useAxios = () => {
    return instance;
};

export default useAxios;
