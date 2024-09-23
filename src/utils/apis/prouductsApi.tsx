// import useAxios from "../../hooks/useAxios";

import axios from "axios";
// const baseURL = "http://localhost:5000/api";
const baseURL = "https://online-nursery-server-nine.vercel.app/api";

export const getProducts = async () => {
    // const publicAxios = useAxios();
    await axios.get(`${baseURL}/products`).then((res) => {
        return res.data;
    });
};
