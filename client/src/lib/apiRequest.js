import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: "https://urbannest-backend-6jz4.onrender.com/api",
  withCredentials: true,
  credentials: "include",
  headers: { "Content-Type": "application/json" }
});

export default apiRequest;
