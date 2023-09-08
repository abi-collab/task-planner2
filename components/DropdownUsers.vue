<template>
  <div>
    <input v-model="user" v-on:keyup.enter="" type="text" name="task" id="task" placeholder="Search Team Member" class="border p-2 w-full my-4">
    <div class="h-80 border overflow-hidden overflow-y-auto p-3">
      <div v-for="i in all_users" class="flex justify-start gap-2 my-2 hover:bg-gray-100 hover:cursor-pointer">
      <img :src="i.avatar" class="rounded-full h-8 w-8"/>
      <div>
        {{ i.name }}
      </div>
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
      user:'',
      all_users:[]
    }
  },
  created() {

      axios.get(`https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/users`).then((res) => {
        this.all_users = res.data;
        console.log('all users: ', res)
      })
  
  }

}
</script>
