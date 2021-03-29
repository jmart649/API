<template>
  <div v-if="bad" class="mt-8 grid justify-items-center space-y-4">
    <h1 class="text-3xl font-thin text-gray-200">{{ bad.name }}</h1>
    <img :src="bad.img" :alt="bad.name" />
    <p class="text-gray-200 font-light">{{bad.char_id}} {{ bad.char_id }}</p>
  </div>
  <div v-else class="text-gray-200 text-2xl block text-center mt-8">
    Loading ...
  </div>
</template>

<script setup>
import { bad } from '../helpers/useGifs'
</script>