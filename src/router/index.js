import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/view/HomePage'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      }
    },
    {
      path: '/productCenter',
      name: 'productCenter',
      component: resolve => require(['@/view/ProductCenter'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      },
    },
    {
      path: '/companyintroduction',
      name: 'companyintroduction',
      component: resolve => require(['@/view/CompanyIntroduction'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      }
    }, {
      path: '/contact',
      name: 'contact',
      component: resolve => require(['@/view/ContactUs'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      }
    }, {
      path: '/aboutUs',
      name: 'aboutUs',
      component: resolve => require(['@/view/AboutUs'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      }
    }
  ]

})
