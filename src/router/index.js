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
      path: '/moble',
      name: 'moble',
      component: resolve => require(['@/view/MobleHome'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      }
    },
    {
      path: '/environment',
      name: 'environment',
      component: resolve => require(['@/view/Environment'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      },
    },
    {
      path: '/smallbottle',
      name: 'smallbottle',
      component: resolve => require(['@/view/Smallbottle'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      },
    },
    {
      path: '/needle',
      name: 'needle',
      component: resolve => require(['@/view/Needle'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      },
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: resolve => require(['@/view/Accessories'], resolve),
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
      path: '/contactus',
      name: 'contactus',
      component: resolve => require(['@/view/ContactUs'], resolve),
      meta: {
        title: '广州中检仪达实验器材有限公司'
      }
    }
  ]

})
