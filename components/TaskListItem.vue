<template>
  <div class="border rounded-md my-4 mx-auto shadow-md">
   <div class="w-fullrounded-md p-2 flex justify-between"> 
    <div class="grid place-items-center">
         <div class="flex justify-start gap-3">
          <div class="flex justify-start">
            <div class="flex">
              <font-awesome-icon icon="fa-solid fa-circle-check" class="text-gray-500 hover:cursor-pointer hover:text-gray-500" v-if="task.is_done" @click="mark_as_not_done(task)"/>
              <font-awesome-icon icon="fa-solid fa-circle" class="text-gray-300 hover:cursor-pointer hover:text-gray-500" v-else @click="mark_as_done(task)"/>
            </div> 
          </div>
          <span :class="task.is_done ? 'line-through text-gray-400 capitalize' : 'text-gray-600'" class="text-xs pr-4 flex-wrap"> {{ task.title }}</span>
        </div>
      </div>
      <div>
         <div class="group flex justify-end gap-3">
          <div class="bg-gray-300 rounded-full w-6 h-6 grid place-items-center hover:cursor-pointer">
            <div class="w-full">
              <img :src="task.assignee.avatar" class="rounded-full h-10 w-10"/>
            <div class="hidden group-hover:block absolute w-full">
              <Dropdownusers :taskObject="task"/>
            </div>
            </div>
          </div>
          <div class="grid place-items-center">
            <div class="flex">
              <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500 hover:cursor-pointer hover:text-gray-500" v-if="task.is_important" @click="mark_as_not_important(task)"/>
              <font-awesome-icon icon="fa-regular fa-star" class="text-gray-500 hover:cursor-pointer hover:text-yellow-500" v-else @click="mark_as_important(task)"/> 
            </div> 
          </div>
          <div class="grid place-items-center">
 <font-awesome-icon icon="fa-solid fa-trash-can" class="text-gray-300 hover:cursor-pointer hover:text-gray-500" @click="deleteTask(task)"/> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Dropdownusers from './DropdownUsers.vue'
export default {
  name: 'taskListItem',
  components: {
    Dropdownusers
  },
  props: {
    task: Object,
  },
  methods: {
    //////////////////////////////// I just directly call the axios request here, just for the sake of functionality.
    //////////////////////////////// I can make this better, just don't have enough time, due of set close deadline.
    /////////////////////////////// Some axios request can be seen in vuex stores
    async deleteTask(task) {
      axios.delete(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${task.id}`).then((res) => {
        console.log('deleting task', res);
        this.$emit('function-to-emit');
      })
    },
    async mark_as_not_important(task) {
      axios.put(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${task.id}`, { is_important: false }).then((res) => {
        console.log('updating task', res);
        this.$emit('function-to-emit');
      })
    },
    async mark_as_important(task) {
      axios.put(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${task.id}`, { is_important: true }).then((res) => {
        console.log('updating task', res);
        this.$emit('function-to-emit');
      })
    },
    async mark_as_not_done(task) {
      axios.put(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${task.id}`, { is_done: false }).then((res) => {
        console.log('updating task', res);
        this.$emit('function-to-emit');
      })
    },
    async mark_as_done(task) {
      axios.put(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/${task.id}`, { is_done: true }).then((res) => {
        console.log('updating task', res);
        this.$emit('function-to-emit');
      })
    }
  
  }
}
</script>

<style scoped>
img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

div img {
  overflow: hidden;
}
</style>
