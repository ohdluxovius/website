<script setup lang="ts">
import {useAsyncData} from "#app";
import {queryContent} from "#imports";
import type {ParsedContent} from "@nuxt/content/dist/runtime/types";

const props = defineProps<{
  lichting: object,
}>()
</script>

<template>
  <div class="title-header">
    <h2>{{ lichting.name }}</h2>
  </div>

  <div class="leden-wrapper">
    <slot name="leden">
      <ContentQuery path="leden" :where="{lichting: lichting.name}" v-slot="{ data }">
        <Lid v-for="lid in data" key="lid.name" :lid="lid"/>
      </ContentQuery>
    </slot>
  </div>
</template>

<style scoped>
.title-header {
  position: relative;
  color: #fff;
  margin: 25px auto;
}

.leden-wrapper {
  position: relative;
  text-align: center;
}
</style>