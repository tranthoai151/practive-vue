import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Products from './components/product/Products.vue'
import Categories from './components/category/Categories.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/pro', component: Products },
    { path: '/categories', component: Categories },
    { path: '*', component: {template: '<h1>Page not found</h1>'}}
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
