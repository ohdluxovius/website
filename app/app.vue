<script setup lang="ts">
import ShotjesPage from "~/components/ShotjesPage.vue";
const shotjes = useRequestURL().host === 'kunnenweshotjesdoen.nl';
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
  title: shotjes ? 'Kunnen we shotjes doen?' : 'O.H.D. Luxovius'
});
</script>

<template>
  <UApp>
    <ShotjesPage v-if="shotjes"/>
    <NuxtPage v-else/>
  </UApp>
</template>