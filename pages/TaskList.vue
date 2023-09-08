<!-- Please remove this file from your project -->
<template>
    <div class="p-12">
   <div>
    <div class="flex justify-between">
        <div>Task Planner</div>
        <div class="flex justi hover:cursor-pointerfy-between gap-4">
            <div class="border" @click="filter_value = ''">All</div>
            <div class="border hover:cursor-pointer" @click="filter_value = 'important'">Important</div>
            <div class="border hover:cursor-pointer" @click="filter_value = 'done'">Done</div>
        </div>
    </div>
    <div>
        <input type="text" v-model="search_task" @keyup="fetchTasks()" class="border w-full my-2">
    </div>
    <div v-for="i in AllTasks">
      <TaskListItem :task="i" @function-to-emit="fetchTasks" />
    </div>
  </div>
  <TaskInputText />
  <br>
  <br>
  <DropdownUsers />
      </div>
</template>

<script>
import TaskInputText from '../components/TaskInputText.vue';
import DropdownUsers from '../components/DropdownUsers.vue';
import axios from 'axios';
export default {
    name: 'TaskList',
    components: { TaskInputText, DropdownUsers },
    data() {
        return {
            AllTasks: [],
            filter_value: '',
            search_task:''
        };
    },
    created() {
        this.fetchTasks();
    },
    methods: {
    async fetchTasks() {
      axios.get(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks?search=${this.search_task}`).then((res) => {
        this.AllTasks = res.data;
        console.log(res)
      })
    }
   
  }
}
</script>
