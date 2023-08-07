<template>
  <div class="hello">


  <div v-for="i in data" :key="i.id">
    <h1>{{ i }}</h1>
  </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {

  computed: {
        ...mapGetters({data: 'getTasks'})
    },
  name: 'TaskList',
  data(){
    return{
      check: false
    }
  },
  methods:{
    showData()
    {
      if(this.data==''){
        return true;
      }
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
