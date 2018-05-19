import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/Introduction'
import NotFound from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction', // doesn't have to be Introduction, name is even optional
      component: Introduction
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
