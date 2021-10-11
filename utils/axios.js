import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }

//     return req;
// });

const authPath = "/auth";

export const login = (form) => API.post(`${authPath}/login`, form);
export const createAccount = (form) => API.post(`${authPath}/register`, form);
