<template>
  <div class="w-screen flex flex-col items-center justify-center mb-2">

  <div v-for="(i, idx) in data" :key="i.id" class="w-9/12 hello border-black border-2 flex flex-row mb-4 ">
    <div class="flex flex-col items-start mr-20">
      <h1><b>Title:</b> {{ i.title }}</h1>
      <h1><b>Description:</b> {{ i.description }}</h1>
    </div>
    <div>
      <button class="flex bg-red bg-red-600 text-neutral-100 rounded-full p-3 hover:bg-red-800" @click="toDelete(idx)">Delete</button>
    </div>
  </div>

</div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {

  computed: {
    ...mapGetters({ data: 'getTasks' })
  },
  name: 'TaskList',
  data() {
    return {
      check: false
    }
  },
  methods: {
    showData() {
      if (this.data == '') {
        return true;
      }
    },
    toDelete(IDX){
      this.data.splice(IDX,1);
     //console.log("ABay delete ho")
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
