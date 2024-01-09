<script setup lang="ts">
useHead({
  script: [
    {src: "https://identity.netlify.com/v1/netlify-identity-widget.js"},
  ],
  link: [
    {rel: 'icon', href: '/img/Logo.png', type: 'image/png'},
    {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'},
    {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css'},
    {rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic'},
  ],
  title: 'O.H.D. Luxovius'
});
</script>

<template>
  <NuxtPage/>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>