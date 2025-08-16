import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

/* swiper */
import 'swiper/dist/css/swiper.min.css';
/* 重置样式 */
import './assets/css/reset.min.css'
/* jquery */
import 'jquery'
/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
/* animate.css */
import 'animate.css'
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name, Header)
/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
