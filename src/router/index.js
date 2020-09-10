import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Treve from '../views/Treve.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/qalendar',
    name: 'Qalendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Qalendar.vue')
  },
  {
    path: '/treve',
    name: 'Treve',
    component: Treve
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
