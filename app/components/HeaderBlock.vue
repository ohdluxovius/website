<script setup lang="ts">

</script>

<template>
  <NavView/>

  <!-- Header -->
  <header id="top" class="bg-repeat bg-center bg-scroll" style="background-image: url(/img/back.jpg)">
    <div class="w-full h-screen flex flex-col justify-center items-center gap-4">
        <svg id="svg1" viewBox="0 0 500 500" style="max-height:500px; max-width:500px; width: 75%;">
          <path
id="origin" class="path" fill="none" stroke="#fff" stroke-width="10" stroke-miterlimit="10"
                stroke-linecap="round"
                d="M448.4 135.9c29.7 71.5 -94.2 225.3 -125.3 283.5c-8.1 15.1 55.7 39.2 89.8 -7.7c23.4 -32.2 0.6 -72.9 0.6 -72.9c-32.3 6.2 -25.9 116.7 -97.8 130.5">
            <animateTransform
attributeName="transform" type="rotate" from="0 250 250" to="360 250 250"
                              dur="24s" repeatCount="indefinite"/>
          </path>
          <use xlink:href="#origin" class="path" transform="rotate( 51.428,250,250)"/>
          <use xlink:href="#origin" class="path" transform="rotate(102.857,250,250)"/>
          <use xlink:href="#origin" class="path" transform="rotate(154.285,250,250)"/>
          <use xlink:href="#origin" class="path" transform="rotate(205.714,250,250)"/>
          <use xlink:href="#origin" class="path" transform="rotate(257.142,250,250)"/>
          <use xlink:href="#origin" class="path" transform="rotate(308.571,250,250)"/>

          <circle cx="250" cy="250" r="135" stroke="#fff" stroke-width="7" fill="none"/>

          <path
id="center_I" fill="none" stroke="#fff" stroke-width="10" stroke-miterlimit="10"
                stroke-linecap="round" d="M227.4 223.3c-37.4 -50.7 2.6 -90.3 34.3 -79.7c18.6 6.3 11.3 33 -5 29.3">
            <animateTransform
attributeName="transform" type="rotate" from="360 250 250" to="0 250 250"
                              dur="20s" repeatCount="indefinite"/>
          </path>
          <use xlink:href="#center_I" transform="rotate(120,250,250)"/>
          <use xlink:href="#center_I" transform="rotate(240,250,250)"/>

          <path
id="center_II" fill="none" stroke="#fff" stroke-width="10" stroke-miterlimit="10"
                stroke-linecap="round" d="M230.7 220.7c-37.4 -50.7 -0.7 -87.7 31 -77c18.6 6.3 11.3 33 -5 29.3">
            <animateTransform
attributeName="transform" type="rotate" from="360 250 250" to="0 250 250"
                              dur="20s" repeatCount="indefinite"/>
          </path>
          <use xlink:href="#center_II" transform="rotate(120,250,250)"/>
          <use xlink:href="#center_II" transform="rotate(240,250,250)"/>

          <circle cx="250" cy="250" r="20" stroke="#fff" stroke-width="10" fill="none"/>
          <circle cx="250" cy="250" r="5" stroke="#fff" stroke-width="6" fill="#fff"/>
        </svg>
        <br><br>
        <NuxtPicture width="360px" src="/img/text.png" style="max-width: 90%"/>
    </div>
    <!-- Header -->
    <section id="intro" class="pb-40 w-full">
      <div class="max-w-xl mx-auto text-white text-xl text-center">
        <p>Op 19 Februari 2014 is Onafhankelijk Heeren Dispuut Luxovius opgericht.</p>
        <br>
        <p>Wij borrelen om de week in onze stamkroeg, Mood, te Enschede. </p>
        <br>
        <p>De naam Luxovius is afgeleid van de Keltische god van het licht en warm water bronnen, twee elementen
          die sterk aan elkaar waren gelinkt in de Keltische cultuur.</p>
      </div>
    </section>
  </header>

</template>

<style scoped>
</style>