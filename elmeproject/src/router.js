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
        }
      ]
    }
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    
  ]
})
