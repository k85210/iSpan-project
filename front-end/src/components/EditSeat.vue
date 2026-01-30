<script setup>
import BaseButton from '@/components/common/BaseButton.vue';

// 1. 必須宣告 props 才能在 template 和 script 中使用 modelValue
const props = defineProps({
    modelValue: {
        type: Array,
        required: true
    }
});

// 2. 必須宣告 emits 才能發送更新事件
const emit = defineEmits(['update:modelValue']);

const updateCount = (type, delta) => {
    const updated = props.modelValue.map(item => {
        if (item.type === type) {
            const newCount = Math.max(0, item.count + delta);
            return { ...item, count: newCount };
        }
        return item;
    });
    // 發送事件通知父組件更新資料
    emit('update:modelValue', updated);
};
</script>

<template>
    <div class="seat-manager">
        <h3 class="text-gdg h5 mb-3">座位數量設定</h3>

        <div class="row g-3">
            <div v-for="seat in modelValue" :key="seat.type" class="col-md-6 col-lg-3">
                <div class="card border-gdg p-3">
                    <div class="text-center mb-2 fw-bold text-secondary">{{ seat.type }} 人座</div>
                    <div class="input-group">
                        <BaseButton color="outline-gdg" size="sm" @click="updateCount(seat.type, -1)">-</BaseButton>

                        <input type="number" class="form-control form-control-sm text-center no-spinners"
                            :value="seat.count" readonly />

                        <BaseButton color="outline-gdg" size="sm" @click="updateCount(seat.type, 1)">+</BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 解決 Property is not standard 的標準做法 */
.no-spinners {
    appearance: textfield;
    /* 標準屬性 */
    -webkit-appearance: none;
    /* Safari / Chrome */
    -moz-appearance: textfield;
    /* Firefox */
    background-color: #fff;
}

/* 隱藏 Chrome/Safari 的上下箭頭 */
.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.border-gdg {
    border: 1px solid rgba(160, 150, 115, 0.3);
}

.input-group .form-control {
    border-left: 0;
    border-right: 0;
    border-color: #9f9572;
}

/* 讓 input 即使在 readonly 狀態也不會變灰色 */
.form-control[readonly] {
    background-color: transparent;
}
</style>