<template>
  <div>
    <NavbarView />
    
  </div>
</template>

<script>
// @ is an alias to /src
//import TaskListView from '../components/taskview.vue';
import NavbarView from '@/components/Navbar.vue';
//import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    //TaskListView,
    NavbarView,
    // HelloWorld
  }
}
</script>
