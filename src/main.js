import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import './assets/css/iconfont/iconfont.css'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui'
Vue.use(ElementUI)

new Vue({
  el:'#app',
  render:h=>h(App),
  router
})
