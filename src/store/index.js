import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
 
  mutations: {
    SET_TASKS (state, payload){
      state.tasks = payload
    },
   
  },
  actions: {
    addTask({commit,state}, task){
      let newArr = [];
      newArr= state.tasks;
      newArr.push(task);
      commit('SET_TASKS', newArr)
    },
   
  
  },
   getters: {
    getTasks(state){
      return state.tasks
    }
  }
})
