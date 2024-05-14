import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView2.vue"
import TestView from "@/components/test.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: "/test",
      name: 'test',
      component: TestView
    },
    {
      path: "/trip",
      name: 'trip',
      component: ()=>import("@/views/TripView.vue")
    }

  ]
})

export default router
