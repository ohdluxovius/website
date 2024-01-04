<script setup lang="ts">
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
  link: [
    { rel: 'icon', href: '/img/Logo.png', type: 'image/png'}
  ]
});
</script>

<template>
  <Head>
    <!-- Bootstrap Core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

    <!-- Custom Fonts -->
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"
          rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </Head>
  <NuxtPage />
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: "Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
}
</style>