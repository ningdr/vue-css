import Vue from 'vue'
import echarts from 'echarts'
import axios from 'axios'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
// 注册全局组件
Vue.component('HelloWorld', HelloWorld);
// 使用其他框架
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

// Vue.use(axios);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
