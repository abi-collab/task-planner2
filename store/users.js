
import axios from 'axios'

export const state = () => ({
  AllUsers:[],
  search_name:''
})

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const data = await axios.get(
        `https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/users`
      );
      commit("SET_USERS", data.data);
      console.log(data.data)
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
}

export const mutations = {
  SET_USERS(state, users) {
    state.AllUsers = users;
  },
}