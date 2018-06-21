import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/components/Main').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/game',
      name: 'game',
      component: require('@/components/Game').default
    }
  ]
})
