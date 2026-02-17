import taskService from "@/services/taskService";

const state = {
  tasks: []
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  }
};

const actions = {
  async fetchTasks({ commit }) {
    const tasks = await taskService.getTasks();
    commit("SET_TASKS", tasks);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};