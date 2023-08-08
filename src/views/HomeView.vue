<template>
  <div>
    <div>
    <NavbarView/>
  </div>
    <div class="h-screen w-screen flex justify-center items-center ">
    <router-view/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import TaskListView from '../components/taskview.vue';
import NavbarView from '@/components/Navbar.vue';
import router from '@/router';
//import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    //TaskListView,
    NavbarView,
    // HelloWorld
  },
  created() {
    router.push('/home/load')
  }
}
</script>
