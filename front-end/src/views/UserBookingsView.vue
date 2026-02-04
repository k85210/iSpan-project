<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';

const fakeBookingData = ref([{
  id: "1",
  resterount:"唐門食堂",
  customerName: "趙活",
  phone: "0912-345-678",
  date: "2026-02-14",
  time: "18:30",
  guests: 1,
  tableType: "2人桌",
},
{
  id: "2",
  resterount:"Tahiti大溪地餐廳",
  customerName: "Arthur Morgan",
  phone: "0922-888-777",
  date: "2026-02-15",
  time: "12:00",
  guests: 8,
  tableType: "8人桌",
}
])


const updateBooking = (booking) => {
  Swal.fire({
    icon: 'success',
    title: '進入修改模式',
    text: `正在修改 ${booking.customerName} 的訂位...`,
    timer: 1500,
    showConfirmButton: false
  });
};

// 顯示明細的邏輯
const showDetail = (booking) => {
  Swal.fire({
    title: '<strong>訂位明細</strong>',
    html: `
      <div style="text-align: left;">
        <p><b>店家名稱：</b>${booking.resterount}</p>
        <p><b>姓名：</b>${booking.customerName}</p>
        <p><b>電話：</b>${booking.phone}</p>
        <p><b>日期：</b>${booking.date} ${booking.time}</p>
        <p><b>人數：</b>${booking.guests} 人 (${booking.tableType})</p>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: '修改訂位',
    cancelButtonText: '關閉',
    confirmButtonColor: '#3085d6', // 根據你的 GDG 顏色調整
  }).then((result) => {
    // 如果使用者點擊了「修改訂位」按鈕
    if (result.isConfirmed) {
      updateBooking(booking);
    }
  });
};


</script>

<template>
  <div class="container py-4">
    <h1 class="text-gdg mb-4">訂位查詢頁面(使用者)</h1>
    <div class="mb-4">
      <div v-for="booking in fakeBookingData" :key="booking.id" class="mb-3 p-3 border rounded">
        <p>{{ booking.date }} - {{ booking.customerName }} - {{ booking.phone }}</p>
        <BaseButton color="gdg" @click="showDetail(booking)" class="mx-1">查詢訂位明細</BaseButton>
        <BaseButton color="gdg" @click="deleteBooking" class="mx-1">刪除訂位</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>