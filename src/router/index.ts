// import { createMemoryHistory, createRouter } from 'vue-router'
import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import BaseView from '../views/BaseView.vue'
import Profile from '../views/Profile.vue'
import Gallery from '../views/Gallery.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },

  {
    name: 'BaseView',
    path: '/base',
    component: BaseView
  },

  {
    name: 'Profile',
    path: '/profile',
    component: Profile
  },

  {
    name: 'Gallery',
    path: '/gallery',
    component: Gallery
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
})

export default router;