import authService from "@/services/authService";

const state = {
  token: localStorage.getItem("token") || null
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  }
};

const actions = {
  async login({ commit }, credentials) {
    const data = await authService.login(credentials);

    localStorage.setItem("token", data.token);
    commit("SET_TOKEN", data.token);
  },

  logout({ commit }) {
    localStorage.removeItem("token");
    commit("SET_TOKEN", null);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};