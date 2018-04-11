import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Schema from '@/components/Schema'
import Transport from '@/components/Transport'
import Food from '@/components/Food'
import Accomodation from '@/components/Accomodation'
import Dresscode from '@/components/Dresscode'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/schema',
      name: 'Schema',
      component: Schema
    }, {
      path: '/transport',
      name: 'Transport',
      component: Transport
    }, {
      path: '/food',
      name: 'Food',
      component: Food
    }, {
      path: '/accomodation',
      name: 'Accomodation',
      component: Accomodation
    }, {
      path: '/dresscode',
      name: 'Dresscode',
      component: Dresscode
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
