import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import DebateFeed from "@/components/home/DebateFeed.vue";
import Debate from "@/components/home/DebateView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'debate-feed/:category',
        name: 'DebateFeed',
        component: DebateFeed
      }
    ]
  },
  {
    path: '/debate/:id',
    name: 'Debate',
    component: Debate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
