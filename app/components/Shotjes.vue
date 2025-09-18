<script setup lang="ts">
import {useAsyncData} from "#app";

const {data: page} = useAsyncData('shotjes', () => {
  return queryCollection('shotjes').first();
})
</script>

<template>
  <div class="absolute w-full h-svh bg-black text-white text-center">
    <div class="absolute top-1/2 left-1/2 -translate-1/2 scale-150">
      <div>
        <h3 class="text-xl font-light">Kunnen we shotjes doen?</h3>
      </div>
      <ContentRenderer v-if="page" :value="page" class="mt-4 invert grayscale prose leading-tight"/>
    </div>
  </div>
</template>

<style scoped>
</style>