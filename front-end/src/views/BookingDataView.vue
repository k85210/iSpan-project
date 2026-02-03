<script setup>
import { ref } from 'vue';
import EditBookingData from '@/components/EditBookingData.vue';

// 模擬假資料：訂位編號、姓名、電話、日期、時間、人數
const bookingList = ref([
  { id: '1', name: '趙活', phone: '0912-345-678', date: '2024-06-01', time: '18:00', people: 2 },
  { id: '2', name: 'Arthur Morgan', phone: '0988-888-888', date: '2024-06-02', time: '12:30', people: 4 }
]);

// 處理刪除
const handleDelete = (id) => {
  if (confirm('確定要刪除這筆訂位嗎？')) {
    // 這裡未來可以串接 API: axios.delete(`/api/bookings/${id}`)
    bookingList.value = bookingList.value.filter(item => item.id !== id);
    console.log('已刪除 ID:', id);
  }
};

// 處理更新
const handleUpdate = (updatedItem) => {
  const index = bookingList.value.findIndex(item => item.id === updatedItem.id);
  if (index !== -1) {
    // 使用展開運算子，確保 Vue 絕對能偵測到物件內容的變動
    bookingList.value[index] = { ...updatedItem };
    console.log('資料更新成功:', updatedItem);
  }
};

</script>

<template>
  <div class="container py-4">
    <h1 class="text-gdg mb-4">訂位管理系統</h1>
    <EditBookingData :bookings="bookingList" @delete="handleDelete" @update="handleUpdate" />
    <!-- 傳給子層時變成bookings與delete -->
  </div>
</template>

<style scoped>
/* 保持乾淨，樣式由全域 custom.scss 控管 */
</style>