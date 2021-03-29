<template>
  <Search />
  <div
    class="mt-8 container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
  >
    <router-link v-for="bad in bads" :key="bad.char_id" :to="`/${bad.char_id}`">
      {{bad.char_id}}
      <img :src="bad.img" alt="" />
      <p class="justify-items-center center-text-align">{{bad.name}}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { bads, getBreakingBad } from '../helpers/useGifs'
onMounted(() => {
  getBreakingBad()
})
</script>