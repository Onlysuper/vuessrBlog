import Vue from 'vue'
import Router from 'vue-router'
import app from '@/components/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    }
  ]
})
