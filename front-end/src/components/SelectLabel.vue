<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue';

// 模擬 SQL 寫死的標籤資料表
const LabelTable = ['寵物友善', '有插座', '日式料理', '禁帶外食', '有停車場', '禁止趙活與狗入內'];

const selected = ref(LabelTable['0']);
const emit = defineEmits(['add']);

const handleAdd = () => {
    if (!selected.value) {
        alert('請選擇一個標籤！');
        return;
    } else {
        emit('add', selected.value);
    }
};
</script>

<template>
    <div class="label-selector-container">
        <div class="input-group">
            <select v-model="selected" class="form-select border-gdg custom-select">
                <option v-for="item in LabelTable" :key="item" :value="item">
                    {{ item }}
                </option>
            </select>

            <BaseButton color="gdg" @click="handleAdd">
                <i class="bi bi-plus-lg me-1"></i>新增標籤
            </BaseButton>
        </div>
        <small class="text-muted mt-2 d-block">選擇上方標籤以加入您的店舖特色</small>
    </div>
</template>

<style scoped>
.border-gdg {
    border-color: #9f9572;
}

.custom-select {
    border-radius: 0;
    /* 維持直角風格 */
    max-width: 250px;
    background-color: #fff;
}

.custom-select:focus {
    border-color: #776f54;
    box-shadow: none;
}

/* 讓 input-group 內的元件緊密結合 */
.input-group :deep(.base-button) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>