<!-- Please remove this file from your project -->
<template>
    <div class="p-12 w-3/4 mx-auto">
   <div>
    <div class="flex justify-between">
        <div>Task Planner</div>
        <div class="flex justi hover:cursor-pointerfy-between gap-6 text-gray-500 text-sm">
            <div class="" @click="filter_value = ''">All</div>
            <div class="hover:cursor-pointer" @click="filter_value = 'important'">{{ all_important }} Important</div>
            <div class="hover:cursor-pointer" @click="filter_value = 'done'">{{ all_done }} Done</div>
        </div>
    </div>
    <div>
        <!-- <input type="text" v-model="search_task" @keyup="fetchTasks()" class="border w-full my-2 text-md rounded-full">
        <br> -->
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-gray-500 hover:cursor-pointer hover:text-gray-500" />
          </div>
          <input v-model="search_task" type="text" name="search text" id="search text" class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Search" />
        </div>
    </div>
    <div v-for="i in this.$store.state.task.AllTasks">
      <TaskListItem :task="i" @function-to-emit="fetchTasks" />
    </div>
  </div>
  <!-- <TaskInputText />
  <br>
  <br>
  <DropdownUsers /> -->
      </div>
</template>

<script>
import TaskInputText from '../components/TaskInputText.vue';
import DropdownUsers from '../components/DropdownUsers.vue';
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
        this.$store.dispatch('task/fetchTasks');
        this.$store.dispatch('users/fetchUsers');
    },
    methods: {
    async fetchTasks() {
      // axios.get(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks?search=${this.search_task}`).then((res) => {
      //   this.AllTasks = res.data;
      //   console.log(res)
      // })
      this.$store.dispatch('task/fetchTasks');
    }
  },
  computed: {
    task_toltal() {
      return this.$store.state.task.AllTasks.length;
    },
    all_important() {
      let important = this.$store.state.task.AllTasks.filter((i) => i.is_important == true );
      return important.length;
    },
    all_done() {
      let important = this.$store.state.task.AllTasks.filter((i) => i.is_done == true );
      return important.length;
    }
  }
}
</script>
<style>
    body {
        font-family: 'Roboto', sans-serif;
    }
</style>
