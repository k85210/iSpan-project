import { createRouter, createWebHistory } from 'vue-router';



// 定義router
const routes = [
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue'),
    name: 'Login'
  },

  {
    path: '/shopStore',
    component: () => import('@/views/shopStore.vue'),
    name: 'ShopStore'
  },
  {
    path: '/Cart',
    component: () => import('@/views/shopCart.vue'),
    name: 'ShopCart'
  }

];

// 建立router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
