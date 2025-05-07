<script setup lang="ts">
import {useAsyncData} from "#app";

const {data: page} = useAsyncData('intro', () => {
  return queryCollection('intro').first();
})
</script>

<template>
  <section id="about" class="py-40 text-center">
    <div class="container m-auto">
      <div class="row justify-content-center">
        <div class="lg:w-8/12 lg:m-auto">
          <h2 class="text-4xl font-normal">Onafhankelijk Heeren Dispuut Luxovius</h2>
          <h3 class="text-xl font-light">Van de voorzitter</h3>
          <ContentRenderer v-if="page" :value="page" class="mt-4 mx-auto lg:max-w-10/12 prose leading-tight"/>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.about {
  padding: 200px 0;
}
</style>