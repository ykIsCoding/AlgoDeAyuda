
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import ResponsePage from '@/pages/ResponsePage.vue'
import { createRouter,createMemoryHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/history/:id', component: ResponsePage, name:'history' },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export { router}

