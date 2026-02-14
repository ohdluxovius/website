<script setup lang="ts">
import type {Collections} from "@nuxt/content";

defineProps<{
  lid: Collections['leden'],
}>()
</script>

<template>

  <div class="w-64 relative text-white flex flex-col justify-center items-center">
    <div class="group">
      <img v-if="lid.old_style" :src="lid.photo" :alt="lid.name">
      <NuxtImg v-else width="100px" :src="lid.photo" class="new" :alt="lid.name"/>
      <p
v-if="lid.type"
         class="opacity-0 bg-black w-full pointer-events-none -translate-y-8 transition ease-out duration-500 group-hover:opacity-70 group-hover:-translate-y-14 group-hover:duration-300">
        {{ lid.type }}</p>
    </div>
    <h4 :class="lid.type ? 'up' : ''">
      <span class="text-2xl font-medium">{{ lid.name }}</span><span class="service-small" v-html="lid.subtitle"/>
    </h4>
  </div>
</template>

<style scoped>
.leden-item {
  color: #fff;
  position: relative;
  width: auto;
  min-width: 250px;
  max-width: 300px;
  display: inline-block;
  margin: 15px;
}

img.new {
  height: 102px;
  width: 102px;
  object-fit: cover;
  border: #FFF 2px solid;
  border-radius: 50%;
  filter: grayscale(100%);
}

.service-small {
  color: #fff;
  font-size: 12px;
  display: block;
  margin-top: 5px;
}


.hover {
  transition: .5s ease;
  color: #0000;
  position: relative;
  top: -40px;
}

/*zet tekst goed door hover*/
.up {
  top: -20px;
  position: relative;
}
</style>