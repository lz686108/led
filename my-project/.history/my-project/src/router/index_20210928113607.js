import Vue from 'vue'
import Router from 'vue-router'
import firstTable from '@/components/firstTable'
import secound from '@/components/secound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstTable',
      component: firstTable
    },
    {
      path: '/secound',
      name: 'secound',
      component: secound
    },
  ]
})
