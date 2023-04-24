<template>
  <div>
    <Navbar />
  </div>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import Navbar from "../src/components/Navbar.vue"
export default defineComponent({
  name: 'AppView',
  components: {
    Navbar
  },
 setup(){
  
  onMounted(()=>{

  })
 }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
