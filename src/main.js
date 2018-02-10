import Vue from 'vue'
import VueResource from 'vue-resource'
import MyModule from './page/module.vue'
import Dashboard from './page/dashboard.vue'
import Repo from './page/repo.vue'
import VueRouter from "vue-router";
import moduleDetial from './components/common/moduleDetial'
import repoDetial from './components/common/repoDetial'
import repoFuncDetial from './components/common/repoFuncDetial'
import Service from './page/service'
import serviceFuncDetial from './components/common/serviceFuncDetial'

import ConstList from './constConfig'

global.apiUrl = ConstList.apiUrl;

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.use(VueResource);
Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'


Vue.use(VueRouter);

const routes = [
  {
    path: '/module',
    component: MyModule,
    children: [{
        name: "md",
        path: 'md/:id',
        component: moduleDetial
      }

    ]
  },
  {
    name: "repo",
    path: '/repo',
    component: Repo,
    children: [{
        name: "repoDetial",
        path: 'repoDetial/:id',
        component: repoDetial
      },
      {
        name: "repoFuncDetial",
        path: 'repoFuncDetial/:id',
        component: repoFuncDetial
      }

    ]
  },
  {
    name: "service",
    path: '/service',
    component: Service,
    children: [{
        name: "serviceFuncDetial",
        path: 'serviceFuncDetial/:id',
        component: serviceFuncDetial
      }

    ]
  },


]
const router = new VueRouter({
  routes
})





new Vue({
  router,
  el: '#app',
  render: h => h(Dashboard)
})
