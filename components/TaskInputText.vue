<template>
  <div class="w-full">
    <div class="relative w-full">
     <div class="group w-full">
      <form @submit.prevent="create_new_task()" class="flex bg-gray-100">
        <div class="pointer-events-none left-0 pl-2 bg-gray-100 grid place-items-center">
          <font-awesome-icon icon="fa-regular fa-circle" class="hidden group-focus-within:block text-gray-300 hover:cursor-pointer hover:text-gray-500 h-5 w-5" />
          <font-awesome-icon icon="fa-solid fa-plus" class="block group-focus-within:hidden text-gray-300 hover:cursor-pointer hover:text-gray-500 h-5 w-5" />
        </div>
        <input v-model="task_info.title" type="text" name="task" id="task" placeholder='Try typing "Submit report by Friday 3 PM"' class="outline-none bg-gray-100 border border-gray-100 p-2 w-full text-xs rounded-sm">
      </form>
      <label for="task" class="text-gray-400 text-xs group-focus-within:text-gray-500">Press <span class="font-bold text-red-500 group-focus-within:text-gray-500">enter</span> to add task</label>
     </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'taskInputText',
  data() {
    return {
      task_info: {
        title:''
      }
    }
  },
  methods: {
    async create_new_task() {
      axios.post(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks`, this.task_info).then((res) => {
        console.log('saving task: ', res)
        this.$router.push({ path: '/taskList' });
      })
    }
  }
}
</script>
