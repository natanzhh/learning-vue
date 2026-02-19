import taskService from "@/services/taskService";

const state = {
  tasks: [],
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  ADD_TASK(state, task) {
    state.tasks.push(task);
  },
  UPDATE_TASK(state, task) {
    const index = state.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      state.tasks[index].title = task.title;
    }
  },
  DELETE_TASK(state, id) {
    const index = state.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      state.tasks.splice(id,1);
    }
  },
};

const actions = {
  async fetchTasks({ commit }) {
    const tasks = await taskService.getTasks();
    commit("SET_TASKS", tasks);
  },
  async createTask({ commit }, title) {
    const task = await taskService.createTask(title);
    commit("ADD_TASK", task);
  },
  async updateTask({ commit }, {taskId,newTitle}) {
    console.log("O valor de newTitle no arquivo store é", newTitle);
    const task = await taskService.updateTask(taskId, newTitle);
    commit("UPDATE_TASK", task);
  },
  async deleteTask({ commit }, id) {
    const task = await taskService.deleteTask(id);
    commit("DELETE_TASK", task);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
