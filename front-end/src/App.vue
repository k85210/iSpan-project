<script setup>
// import { computed } from 'vue';
// import { useRoute } from 'vue-router';
// import DefaultLayout from '@/layouts/default.vue';
// import BlankLayout from '@/layouts/blank.vue';
import Navbar from '@/layouts/navbar.vue';
// const route = useRoute();

// const layout = computed(() => {
//   if (route.meta.layout === 'blank') return BlankLayout;
//   return DefaultLayout;
// });
</script>

<template>
  <Navbar />
  <ul>
    <li>
      <RouterLink to="/">首頁</RouterLink>
    </li>
    <li>
      <RouterLink to="/login">登入頁面</RouterLink>
    </li>
    <li>
      <RouterLink to="/storeInfo">店家資訊頁面(消費者)</RouterLink>
    </li>
    <li>
      <RouterLink to="/user/bookings">訂位查詢頁面(消費者)</RouterLink>
    </li>
    <div>======================================</div>
    <li>
      <RouterLink to="/owner/storeInfo">店家資訊編輯頁面(商家)</RouterLink>
    </li>
    <li>
      <RouterLink to="/owner/bookings">訂位後台頁面(商家)</RouterLink>
    </li>
    <li>
      <RouterLink to="/owner/bookings/seats">座位數量與時段維護(商家)</RouterLink>
    </li>
    <li>
      <RouterLink to="/owner/bookings/data">訂位資料管理(商家)</RouterLink>
    </li>
  </ul>
  <!-- <component :is="layout">
    <RouterView />
  </component> -->
  <RouterView />
</template>

<style scoped></style>
