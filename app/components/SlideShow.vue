<script async setup lang="ts">

import {useAsyncData} from "#app";

const img = useImage();

const {data: slideData} = useAsyncData('slides', () => {
  return queryCollection('slides').order('date', "DESC").all();
})

const slides = computed(() => {
  return slideData.value?.map((slide) => {
    return {
      ...slide,
      photo: slide.photo,//img(slide.photo),
    }
  })
})


</script>

<template>
  <UCarousel
v-slot="{ item }" class="dark" :items="slides" align="center" loop autoplay dots arrows :ui="{
      item: 'ps-0 pe-0',
      container: 'ms-0 gap-0',
      dots: 'z-10',
      next: 'end-2',
      prev: 'start-2',
      }"
             :next="{variant: 'ghost'}"
             :prev="{variant: 'ghost'}"
  >
    <div
class="relative">
      <NuxtImg width="100%" class="w-full aspect-[5/2] object-cover grayscale-80" :src="item.photo"/>
      <div
          class="absolute w-full bottom-0 left-0 ps-2 pb-2 pt-16 text-white bg-gradient-to-t from-black via-black/70 to-transparent">
        <p><span class="text-xl">{{ item.name }}</span><span class="ms-2 text-xs italic text-gray-400">
          {{ new Date(item.date).toLocaleDateString('nl-NL', {day: 'numeric', month: 'long', year: 'numeric'}) }}
        </span></p>
        <p class="text-sm">{{ item.subtitle }}</p>
      </div>
    </div>
  </UCarousel>
</template>

<style scoped>
</style>