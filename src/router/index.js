import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import NotFound from '@/components/Error'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        TitleSection: Title,
        MenuSection: Menu
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
