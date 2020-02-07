import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './views/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      children: [
        {
          path: '',
          name: 'home',
          component: () =>
            import(/* webpackChunkName: "home" */ './views/home.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () =>
            import(/* webpackChunkName: "order" */ './views/order.vue')
        },
        {
          path: '/product',
          name: 'product',
          component: () =>
            import(/* webpackChunkName: "product" */ './views/product.vue')
        }
      ]
    }
  ]
})
