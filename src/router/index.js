import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../components/TaskList.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import TaskAdd from '../components/TaskAdd.vue'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,


  },
  {
    path: '/home',
    component: HomeView,
    children: [
      {

        path: '/home/load',
        component: TaskList,

      },
      {
        path: '/home/task',
        component: TaskAdd
      }

    ]
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/load',
    component: TaskList
  },
  {
    path: '/task',
    component: TaskAdd
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
