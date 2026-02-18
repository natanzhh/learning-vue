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
    // TODO => Colocar um códgo para mudar a task que tiver o id especificado. Depois disso, eu ja posso fazer os primeiros testes da funcionalidade de UPDATE
    state.tasks[id]=push(task);
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
  async updateTask({ commit }, id, newTitle) {
    const task = await taskService.updateTask(id, { title: newTitle });
    commit("UPDATE_TASK", task);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
