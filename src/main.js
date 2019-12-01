import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: routes
})
new Vue({ el: '#app', router, render: h => h(App) })