import api from "./api";

export default {
  async login(credentials) {
    const response = await api.post("/login", credentials);
    return response.data;
  },

  async register(data) {
    const response = await api.post("/register", data);
    return response.data;
  }
};