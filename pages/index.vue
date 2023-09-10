<template>
  <div class="h-screen grid place-items-center">
    <!-- <NuxtLink to="/taskList">
      To Task List
    </NuxtLink> -->
    <div class="w-3/4">
      <h1 class="text-3xl text-center">Welcome to Task Planner</h1>
    <div class="text-gray-500 text-xs text-center mb-12 mt-1">Get things done with your day, a list that <br> refreshes everyday.</div>
    
    <TaskInputText />
   
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
<style>
    body {
        font-family: 'Roboto', sans-serif;
    }
</style>
