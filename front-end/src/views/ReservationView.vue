<script setup>
import { useRouter } from 'vue-router';
import BaseButton from '@/components/common/BaseButton.vue';

const router = useRouter();

const isLogin = false;

const loginOrNot = () => {
  if (isLogin) {
    router.push({ name: 'UserBookings' });
  } else {
    router.push({ name: 'Login' });
  }
}

</script>

<template>
  <div class="container py-4">
    <h1 class="text-gdg mb-4">訂位頁面(使用者)</h1>

    <div class="bg-gdg-light p-4 border mb-4">
      <p class="mb-0 text-muted">按下訂位沒登入跳轉到登入頁面，有則跳到訂位頁面</p>
    </div>

    <BaseButton color="gdg" @click="loginOrNot">訂位</BaseButton>
  </div>
</template>

<style scoped>
/* 保持乾淨 */
</style>