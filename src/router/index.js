import Vue from 'vue'
import Router from 'vue-router'
import Location from 'location/Location'
import Login from 'login/Login'
import Home from 'home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/location',
      name: 'location',
      component: Location
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
