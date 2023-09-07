<template>
  <div class="h-screen grid place-items-center">
    <div>
      <h1 class="text-xl font-bold text-center">Welcome to Task Planner</h1>
    <p class="text-center">Get things done with your day, a list that refreshes everyday.</p>
    <TaskInputText/>
    <small>Press <span class="font-bold text-red-500">enter</span> to add task</small>
    </div>
    
  </div>
  
</template>

<script>
import TaskInputText from '../components/TaskInputText.vue';

export default {
    name: 'landingPage',
    components: { TaskInputText }
}
</script>
