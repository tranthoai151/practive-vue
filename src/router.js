import Products from './components/product/Products'
import Categories from './components/category/Categories'
import ProductDetail from './components/product/Product-detail'
import FormComponent from './components/form/form-component'
import VueRouter from 'vue-router'

export const routes = [
       { path: '/products', component: Products },
       { path: '/products/:productId', component: ProductDetail },
       { path: '/categories', component: Categories },
       { path: '/components', component: FormComponent },
       { path: '*', component: {template: '<h1>Page not found</h1>'}}
     ];