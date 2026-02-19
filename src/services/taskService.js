import api from "./api";

export default {
  async getTasks() {
    const response = await api.get("/tasks");
    return response.data;
  },

  async createTask(task) {
    const response = await api.post("/tasks", { title: task });
    return response.data;
  },

  async updateTask(id,newTitle) {
    console.log("O valor de newTitle no arquivo services é",newTitle)
    const response = await api.put(`/tasks/${id}`, { title: newTitle });
    return response.data;
  },

  async deleteTask(id) {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  },
};
