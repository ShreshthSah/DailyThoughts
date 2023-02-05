import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Thoughts from "../components/Thoughts.vue"
import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
    path:"/thoughts",
    name:'Thoughts',
    component:Thoughts
    },
    {
      path:'/register',
      name:'Login',
      component:Login
    },
    {
      path:"/signup",
      name:'Signup',
      component:Signup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
