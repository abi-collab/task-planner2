<!-- Please remove this file from your project -->
<template>
  <div class="border w-full">
   <div class="w-full border rounded-md p-2 flex justify-between"> <span>{{ task.text }}</span> <button>X</button></div>
  </div>
</template>

<script>
export default {
  name: 'taskListItem',
  props: {
    task: Object,
  },
}
</script>
