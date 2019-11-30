import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Products from './components/Products.vue'
import Categories from './components/Categories.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/pro', component: Products },
    { path: '/categories', component: Categories }
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
