import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ServiceDetailView from './views/ServiceDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/layanan/:slug', name: 'service-detail', component: ServiceDetailView }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
