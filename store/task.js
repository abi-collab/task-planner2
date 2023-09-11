import axios from 'axios'

export const state = () => ({
  AllTasks:[],
  user_assign_for_task: {}
})

export const actions = {
  async fetchTasks({ commit }) {
    try {
      const data = await axios.get(
        "https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks"
      );
      commit("SET_TASKS", data.data);
      console.log('tassssskkkkkk: ', data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async assign_user_to_task(i) {
    console.log('ssssssssssssss', this.assign_user_to_task);
  }
}

export const mutations = {
  SET_TASKS(state, tasks) {
    state.AllTasks = tasks;
  },
  SET_USER_TO_TASK(state, user) {
    state.user_assign_for_task = user;
  }
}

export const getters = {
    getModuleData: (state) => state.AllTasks

};