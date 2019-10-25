import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font_ygj5gwd8c1/iconfont.css';
import './assets/font_pdpehafgw6q/iconfont.css';
import './assets/font_wlfeqx7f8g/iconfont.css'
import store from './store/index.js'
import './assets/font_n2f46dbvurj/iconfont.css'
import './assets/font_07nt8cxqku5i/iconfont.css'
Vue.use(ElementUI);
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
import {
  router
} from './router/index.js'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')