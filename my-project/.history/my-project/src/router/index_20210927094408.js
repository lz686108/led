import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstTable from '@/components/firstTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstTable',
      component: firstTable
    }
  ]
})
