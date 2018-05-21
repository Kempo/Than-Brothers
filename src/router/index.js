import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import NotFound from '@/components/Error'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        TitleSection: Title,
        TestSection: Test
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
