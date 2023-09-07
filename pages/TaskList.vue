<!-- Please remove this file from your project -->
<template>
    <div class="h-screen grid place-items-center">
   <div>
    List of Task
    <div v-for="i in tasks">
      <TaskListItem :task="i" />
    </div>

    
  </div>
  <TaskInputText />
      </div>
  
</template>

<script>
import TaskInputText from '../components/TaskInputText.vue';

export default {
    name: 'TaskList',
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    text: "Buy groceries",
                    done: false,
                },
                {
                    id: 2,
                    text: "Finish work project",
                    done: false,
                },
                {
                    id: 3,
                    text: "Go for a run",
                    done: false,
                },
                {
                    id: 4,
                    text: "Read a book",
                    done: false,
                },
                {
                    id: 5,
                    text: "Call mom",
                    done: false,
                },
                {
                    id: 6,
                    text: "Pay bills",
                    done: false,
                },
                {
                    id: 7,
                    text: "Clean the house",
                    done: false,
                },
                {
                    id: 8,
                    text: "Write in journal",
                    done: false,
                },
                {
                    id: 9,
                    text: "Learn Vue.js",
                    done: false,
                },
                {
                    id: 10,
                    text: "Watch a movie",
                    done: false,
                }
            ]
        };
    },
    components: { TaskInputText }
}
</script>
