<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<!-- <script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  
}
</script> -->
<script>
import HelloWorld from '@/components/HelloWorld.vue'

import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
 setup(){
  
  onMounted(()=>{
    // console.log("accessing variable",process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)
    console.log("accessing variable",process.env.VUE_APP_SUPABASE_KEY )
    // console.log(process.env.meta)
  })
 }
})
</script>
