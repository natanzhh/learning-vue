import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  function (config) {

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    alert("Falha ao colocar o token na requisição.");
    return Promise.reject(error);
  },
);
export default api;