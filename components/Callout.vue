<script setup lang="ts">
defineProps<{
  img: string,
  hover?: string,
}>()
</script>

<template>
  <div>
    <NuxtImg width="2000px" :src="img"/>
    <div v-if="hover" class="hover">
      <h1>{{ hover }}</h1>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  height: 600px;
  position: relative;
}

img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  filter: grayscale(80%);
}

.hover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 600px;
  background: rgba(0, 0, 0, .7);
  color: white;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 200ms;
}

div:hover > .hover {
  opacity: 1;
}
</style>