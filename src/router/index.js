import Vue from 'vue'
import VueRouter from 'vue-router'
import Body_Laser from '../views/Body_Laser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Body_Laser',
    component: Body_Laser
  },
 
]

const router = new VueRouter({
  routes
})

export default router
