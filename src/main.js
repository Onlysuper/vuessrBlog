// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/app.vue'
import router from './router'
import iView from 'iView';
import 'iview/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(iView);
// import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
