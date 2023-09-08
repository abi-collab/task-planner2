<template>
  <div>
   <input v-model="task_info.title" v-on:keyup.enter="create_new_task()" type="text" name="task" id="task" placeholder="What's your plan for today?" class="border p-2 w-full my-4">
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
