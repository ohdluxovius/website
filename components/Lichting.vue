<script setup lang="ts">
import {useAsyncData} from "#app";
import {queryContent} from "#imports";
import type {ParsedContent} from "@nuxt/content/dist/runtime/types";

const props = defineProps<{
  lichting: ParsedContent,
}>()
</script>

<template>
  <div class="title-header">
    <h2>{{ lichting.name }} lichting</h2>
  </div>

  <div class="leden-wrapper">
    <ContentQuery path="leden" :where="{lichting: parseInt(lichting.title)}" v-slot="{ data }">
      <Lid v-for="lid in data" key="lid.name" :lid="lid"/>
    </ContentQuery>
  </div>
</template>

<style scoped>
.title-header {
  position:       relative;
  color:          #fff;
  margin:         25px auto;
}

.leden-wrapper {
  position:   	relative;
  text-align:     center;
}
</style>