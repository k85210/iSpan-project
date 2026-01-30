<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
  <div class="container py-4">
    <h1 class="text-gdg mb-4">這是首頁</h1>

    <div class="bg-gdg-light p-5 text-center mb-4 border">
      <p class="text-muted">假裝有地圖...</p>
    </div>

    <RouterLink :to="{ name: 'StoreInfo' }" v-slot="{ navigate }">
      <BaseButton color="gdg" @click="navigate">某家店的地標</BaseButton>
    </RouterLink>


    <ul class="mt-5 pt-4 border-top">
      <div>跳轉測試用：</div>
      <li>
        <RouterLink to="/" class="text-gdg">首頁</RouterLink>
      </li>
      <li>
        <RouterLink to="/login" class="text-gdg">登入頁面</RouterLink>
      </li>
      <li>
        <RouterLink to="/storeInfo" class="text-gdg">店家資訊頁面(消費者)</RouterLink>
      </li>
      <li>
        <RouterLink to="/user/bookings" class="text-gdg">訂位查詢頁面(消費者)</RouterLink>
      </li>
      <div>======================================</div>
      <li>
        <RouterLink to="/owner/storeInfo" class="text-gdg">店家資訊編輯頁面(商家)</RouterLink>
      </li>
      <li>
        <RouterLink to="/owner/bookings/seats" class="text-gdg">座位數量與時段維護(商家)</RouterLink>
      </li>
      <li>
        <RouterLink to="/owner/bookings/data" class="text-gdg">訂位資料管理(商家)</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 保持乾淨 */
</style>