import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//AXIOS
import axios from 'axios'

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'

//FONTAWESOME
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import './pages/Login/style.scss'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ClientsComponent from './pages/Clients/ClientsComponent'
import ProductsComponent from './pages/Products/ProductsComponent'

Vue.config.productionTip = false
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://127.0.0.1:3232/api';

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/clients', name: 'clients', component: ClientsComponent },
  { path: '/products', name: 'products', component: ProductsComponent },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new*/
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
