<script setup lang="ts">
import {useAsyncData} from "#app";
import type {Collections} from "@nuxt/content";

const props = defineProps<{
  lichting: Collections['lichtingen'],
}>()


const {data: leden} = useAsyncData(props.lichting.name, () => {
  return queryCollection('leden').where('lichting', '=', props.lichting.name).all();
})
</script>

<template>
  <div>
    <div class="mb-10 mx-auto text-white">
      <h2 class="text-3xl font-bold">{{ lichting.name }}</h2>
    </div>

    <div class="text-center flex justify-center items-center w-full flex-wrap gap-y-4">
      <slot name="leden">
        <LidBlock v-for="lid in leden" :key="lid.name" :lid="lid"/>
      </slot>
    </div>
  </div>
</template>

<style scoped>
</style>