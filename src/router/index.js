import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import NotFound from '@/components/Error'
import Menu from '@/components/Menu'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        TitleSection: Title,
        MenuSection: Menu,
        LocationSection: Locations,
        ContactSection: Contact
      }
    },
    /* to prevent a 404 when a section of the page is refreshed
    */
    {
      path: '/menu_section',
      redirect: '/'
    },
    {
      path: 'location_section',
      redirect: '/'
    },
    {
      path: 'contact_section',
      redirect: '/'
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
