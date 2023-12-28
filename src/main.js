import Vue from 'vue'
// 引入element-ui的全局样式
import "element-ui/lib/theme-chalk/index.css"
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element-ui插件
import ElementUI from 'element-ui'
// 引入axios插件
import axios  from 'axios'
import VueAxios from 'vue-axios'

// 使用elemen-ui插件
Vue.use(ElementUI);
// 使用axios插件
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
