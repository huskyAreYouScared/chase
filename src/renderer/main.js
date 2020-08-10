import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
