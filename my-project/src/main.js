// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js'
import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css'
import  FastClick  from  'fastclick'


FastClick.attach(document.body);
Vue.use(Mint); 
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
window.document.documentElement.style.fontSize = `${100 * cale}px`

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
