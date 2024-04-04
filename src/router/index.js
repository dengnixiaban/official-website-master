import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '/',
    name: 'PageView',
    component: resolve => require(['@/view/PageView'], resolve),
    children: [{
        path: '/',
        redirect: '/home'
      }, {
        path: '/home',
        name: 'home',
        component: resolve => require(['@/view/HomePage'], resolve),
        meta: {
          title: '广州中检仪达实验器材有限公司'
        }
      }, {
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
        path: '/microwave',
        name: 'microwave',
        component: resolve => require(['@/view/Microwave'], resolve),
        meta: {
          title: ''
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
        path: '/protective',
        name: 'protective',
        component: resolve => require(['@/view/Protective'], resolve),
        meta: {
          title: '广州中检仪达实验器材有限公司'
        },
      },
      {
        path: '/service',
        name: 'service',
        component: resolve => require(['@/view/Service'], resolve),
        meta: {
          title: '广州中检仪达实验器材有限公司'
        }
      }, {
        path: '/newsinformation',
        name: 'newsinformation',
        component: resolve => require(['@/view/NewsInformation'], resolve),
        meta: {
          title: '广州中检仪达实验器材有限公司'
        }
      }, {
        path: '/companyintroduction',
        name: 'companyintroduction',
        component: resolve => require(['@/view/CompanyIntroduction'], resolve),
        meta: {
          title: '广州中检仪达实验器材有限公司'
        }
      }, {
        path: '/jobchance',
        name: 'jobchance',
        component: resolve => require(['@/view/JobChance'], resolve),
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
      },
      {
        path: '/servicedetail',
        name: 'servicedetail',
        component: resolve => require(['@/view/ServiceDetail'], resolve),
        meta: {
          title: '广州中检仪达实验器材有限公司'
        }
      }
    ]
  }]
})
