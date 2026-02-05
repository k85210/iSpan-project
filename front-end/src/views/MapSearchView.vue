<script setup>
import MapContainer from '@/components/MapContainer.vue';
import MapStoreCard from '@/components/MapStoreCard.vue';
import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
    

    <div>
        <SearchBar></SearchBar>
        <br>

        <div style="display: flex;">
            <div style="flex: 1; background-color: lightblue;"><MapContainer></MapContainer></div>
            <div style="flex: 1; background-color: lightgreen;"><MapStoreCard></MapStoreCard></div>
        </div>
       
       
        
    </div>




</template>

<style scoped>

</style>