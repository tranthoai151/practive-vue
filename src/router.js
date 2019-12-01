import Products from './components/product/Products'
import Categories from './components/category/Categories'
import VueRouter from 'vue-router'

export const routes = [
       { path: '/pro', component: Products },
       { path: '/categories', component: Categories },
       { path: '*', component: {template: '<h1>Page not found</h1>'}}
     ];