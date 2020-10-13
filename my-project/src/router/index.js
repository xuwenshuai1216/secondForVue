import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/view/index'
// import Banner from '@components/banner/Banner'

Vue.use(Router)

import page1 from '@/view/page1.vue';
import page2 from '@/view/page2.vue';

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    }
  ]
})
