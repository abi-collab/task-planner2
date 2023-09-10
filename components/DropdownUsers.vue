<template>
  <div class="w-1/5 bg-white px-1 py-3 shadow-xl rounded-lg">
    <div class="relative mt-2 rounded-md">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-gray-500 hover:cursor-pointer hover:text-gray-500" />
          </div>
          <input v-model="searchText" type="text" name="search text" id="search text" class="block w-full rounded-xs border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6" placeholder="Search Team Member" />
        </div>
    <div class="max-h-80 overflow-hidden overflow-y-auto p-3">
      <div v-for="user in filteredUsers" @click="setUser(user)" class="flex justify-start gap-1 my-2 py-1 hover:bg-gray-100 hover:cursor-pointer">
      <img :src="user.avatar" class="rounded-full h-8 w-8"/>
      <div class="text-xs grid place-items-center pl-2">
        {{ user.name }}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'taskInputText',
  props: {
    taskObject: Object, // Define the prop and its type
  },
  data() {
    return {
      searchText:'',
    }
  },
  computed: {
    filteredUsers() {
      // Filter the users based on the searchText
      return this.$store.state.users.AllUsers.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  },
  methods: {
    setUser(user) {
      axios.put(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${this.taskObject.id}`, { assignee: user }).then((res) => {
        this.$store.dispatch('task/fetchTasks');
      })

    }
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px; 
}

::-webkit-scrollbar-thumb {
  background-color: #2222; 
  border-radius: 4px; 
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}

::-webkit-scrollbar-thumb:active {
  background-color: #333; 
}

</style>
