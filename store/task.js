import axios from 'axios'

export const state = () => ({
  name:'astro boy',
  AllTasks:[]
})

export const actions = {
  async fetchTasks({ commit }) {
    try {
      const data = await axios.get(
        "https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks"
      );
      commit("SET_TASKS", data.data);
      // console.log('tassssskkkkkk: ', data.data) ;
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
}

export const mutations = {
  SET_TASKS(state, tasks) {
    state.AllTasks = tasks;
  },
}