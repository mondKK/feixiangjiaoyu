import Vue from 'vue'
import Router from 'vue-router'
import Lode from './views/Lode.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Lode
    },
    {
      path:'/shouye',
      name:'Shouye',
      component:()=>import('./views/Shouye.vue'),
      children:[
        {
          path:'/shouye',
          name:'content1',
          component:()=>import('./views/Content1.vue'),
        },
        {
          path:'/content2',
          name:'content2',
          component:()=>import('./views/Content2.vue'),
        },
        {
          path:'/content3',
          name:'content3',
          component:()=>import('./views/Content3.vue'),
        },
        {
          path:'/content4',
          name:'content4',
          component:()=>import('./views/Content4.vue'),
        },
        {
          path:'/content5',
          name:'content5',
          component:()=>import('./views/Content5.vue'),
        },
        {
          path:'/content6',
          name:'content6',
          component:()=>import('./views/Content6.vue'),
        },
        {
          path:'/content7',
          name:'content7',
          component:()=>import('./views/Content7.vue'),
        },
        {
          path:'/caiwuguanli',
          name:'caiwuguanli',
          component:()=>import('./views/Caiwuguanli.vue'),
        },
        {
          path:'/usermessage',
          name:'usermessage',
          component:()=>import('./views/Usermessage.vue')
        },
        {
          path:'/setting',
          name:'setting',
          component:()=>import('./views/Setting.vue')
        },
        {
          path:'/aboutwe',
          name:'aboutwe',
          component:()=>import('./views/Aboutwe.vue')
        },
        {
          path:'/workers',
          name:'workers',
          component:()=>import('./views/Workers.vue')
        },
        {
          path:'/madelod',
          name:'madelod',
          component:()=>import('./views/Madelod.vue')
        },
        {
          path:'/rolemessage',
          name:'rolemessage',
          component:()=>import('./views/Rolemessage.vue')
        },
        {
          path:'/addslideshow',
          name:'addslideshow',
          component:()=>import('./views/Addslideshow.vue')
        },
        {
          path:'/addworkers',
          name:'addworkers',
          component:()=>import('./views/Addworkers.vue')
        },
        {
          path:'/addrole',
          name:'addrole',
          component:()=>import('./views/Addrole.vue')
        }
      ]
    }
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    
  ]
})
