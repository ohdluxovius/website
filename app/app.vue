<script setup lang="ts">
useHead({
  script: [
    {src: "https://identity.netlify.com/v1/netlify-identity-widget.js"},
  ],
  link: [
    {rel: 'icon', href: '/img/Logo.png', type: 'image/png'},
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic'
    },
  ],
  title: 'O.H.D. Luxovius'
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>


<style>
</style>