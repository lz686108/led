import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
import XLSX from 'xlsx'
import ElementUI from 'element-ui';    // （1）
import 'element-ui/lib/theme-chalk/index.css';    // （2）
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })  // 使用组件
/* eslint-disable no-new */
Vue.use(XLSX);

new Vue({
  el: '#app',
  // mode: 'history',
  router,
  render: h => h(App)
})
