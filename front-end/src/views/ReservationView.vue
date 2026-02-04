<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/common/BaseButton.vue';
import Swal from 'sweetalert2';

const router = useRouter();

// --- 模擬資料 (Mock Data) ---
const storeInfo = {
  name: '唐門食堂',
  availableTables: [2, 4, 6, 8],
  bookedSlots: [
    { date: '2026-02-10', time: '12:00', type: 2 },
    { date: '2026-02-10', time: '18:00', type: 8 },
    { date: '2026-02-10', time: '16:00', type: 8 },
  ]
};

const timeSlots = ['12:00', '14:00', '16:00', '18:00', '20:00'];

// --- 使用者選擇狀態 ---
const isLogin = ref(false); // 模擬登入狀態
const bookingForm = ref({
  seatType: null,
  date: '',
  time: ''
});

// --- 計算邏輯 ---
const isSlotAvailable = (time) => {
  if (!bookingForm.value.date || !bookingForm.value.seatType) return true;
  return !storeInfo.bookedSlots.find(slot => 
    slot.date === bookingForm.value.date && 
    slot.time === time && 
    slot.type === bookingForm.value.seatType
  );
};

//
const falseSelect = () => {
Swal.fire({
      icon: 'error',
      title: '請完整選擇人數、日期與時段！',
      confirmButtonText: '確定',
    });
}

// --- 動作處理 ---
const handleBooking = () => {
  if (!bookingForm.value.seatType || !bookingForm.value.date || !bookingForm.value.time) {
    falseSelect();
    return;
  }

  if (!isLogin.value) {
    alert('請先登入');
    router.push({ name: 'Login' });
  } else {
    alert(`訂位成功！\n人數：${bookingForm.value.seatType}\n時間：${bookingForm.value.date} ${bookingForm.value.time}`);
    router.push({ name: 'UserBookings' });
  }
};
</script>

<template>
  <div class="container py-4">
    <h1 class="text-gdg mb-4">{{ storeInfo.name }}</h1>

    <div class="bg-gdg-light p-4 border mb-4">
      <p class="mb-0 text-muted">請選擇您的預約資訊。若時段已被預訂或不符合人數，按鈕將會隱藏。</p>
    </div>

    <div class="booking-options">
      <div class="mb-4">
        <label class="form-label d-block fw-bold mb-2">1. 選擇人數</label>
        <div class="d-flex flex-wrap gap-2">
          <button 
            v-for="type in storeInfo.availableTables" :key="type"
            type="button"
            class="btn"
            :class="bookingForm.seatType === type ? 'btn-gdg' : 'btn-outline-secondary'"
            @click="bookingForm.seatType = type"
          >
            {{ type }} 人座
          </button>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold mb-2">2. 選擇日期</label>
        <input 
          type="date" 
          class="form-control" 
          v-model="bookingForm.date" 
          style="max-width: 300px;"
        >
      </div>

      <div class="mb-4">
        <label class="form-label d-block fw-bold mb-2">3. 選擇時段</label>
        <div class="d-flex flex-wrap gap-2">
          <template v-for="slot in timeSlots" :key="slot">
            <button 
              v-if="isSlotAvailable(slot)"
              type="button"
              class="btn"
              :class="bookingForm.time === slot ? 'btn-gdg' : 'btn-outline-secondary'"
              @click="bookingForm.time = slot"
            >
              {{ slot }}
            </button>
          </template>
        </div>
      </div>

      <hr class="my-4">

      <BaseButton color="gdg" class="w-100" @click="handleBooking">
        確認訂位
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
</style>