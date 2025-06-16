import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/auth" });

export const login = (credentials) => API.post("/auth/login", credentials);
export const register = (userData) => API.post("/auth/register", userData);
