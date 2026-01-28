

<script setup>

import storeCard from '../component/storeCard.vue'
import { useRouter} from 'vue-router'


const router =useRouter();
const goToCart = () => {
  // 括號內填寫你在 router/index.js 設定的 path
    router.push('/cart') 
}


</script>

<template>
<h1>商店首頁</h1>


<storeCard />

    <button type="button"  class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"  @click="goToCart">
        結帳
    </button>
</template>

<style scoped>

</style>