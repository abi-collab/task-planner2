<template>
  <div class="border w-full">
   <div class="w-fullrounded-md p-2 flex justify-between"> 
    <div class="grid place-items-center">
         <div class="flex justify-start gap-3">
          <div class="grid place-items-center">
            <div class="flex">
              <font-awesome-icon icon="fa-solid fa-circle-check" class="text-gray-500 hover:cursor-pointer hover:text-gray-500" v-if="task.is_done" @click="mark_as_not_done(task)"/>
              <font-awesome-icon icon="fa-solid fa-circle" class="text-gray-300 hover:cursor-pointer hover:text-gray-500" v-else @click="mark_as_done(task)"/>
            </div> 
          </div>
          <span :class="task.is_done ? 'line-through' : ''"> {{ task.title }}</span>
        </div>
      </div>
      <div>
         <div class="flex justify-end gap-3">
          <div class="bg-gray-300 rounded-full w-6 h-6 grid place-items-center">
            d
          </div>
          <div class="grid place-items-center">
            <div class="flex">
              <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500 hover:cursor-pointer hover:text-gray-500" v-if="task.is_important" @click="mark_as_not_important(task)"/>
              <font-awesome-icon icon="fa-regular fa-star" class="text-gray-500 hover:cursor-pointer hover:text-yellow-500" v-else @click="mark_as_important(task)"/> 
            </div> 
          </div>
          <font-awesome-icon icon="fa-solid fa-trash-can" class="text-gray-300 hover:cursor-pointer hover:text-gray-500" @click="deleteTask(task)"/> 
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
  // components: {
  //   Dropdownusers
  // },
  props: {
    task: Object,
  },
  methods: {
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
