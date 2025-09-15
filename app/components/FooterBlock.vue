<script setup lang="ts">

</script>

<template>
  <footer id="contact" class="min-h-screen py-20 w-full">
      <div class="flex flex-col justify-center items-center">
        <svg id="svg1" viewBox="0 0 500 500" class="w-10/12 max-w-xl">
          <path
id="origin2" class="path2" fill="none" stroke="#111" stroke-width="10"
                stroke-miterlimit="10" stroke-linecap="round"
                d="M448.4 135.9c29.7 71.5 -94.2 225.3 -125.3 283.5c-8.1 15.1 55.7 39.2 89.8 -7.7c23.4 -32.2 0.6 -72.9 0.6 -72.9c-32.3 6.2 -25.9 116.7 -97.8 130.5">
            <animateTransform
attributeName="transform" type="rotate" from="0 250 250" to="360 250 250"
                              dur="24s" repeatCount="indefinite"/>
          </path>
          <use xlink:href="#origin2" class="path2" transform="rotate( 51.428,250,250)"/>
          <use xlink:href="#origin2" class="path2" transform="rotate(102.857,250,250)"/>
          <use xlink:href="#origin2" class="path2" transform="rotate(154.285,250,250)"/>
          <use xlink:href="#origin2" class="path2" transform="rotate(205.714,250,250)"/>
          <use xlink:href="#origin2" class="path2" transform="rotate(257.142,250,250)"/>
          <use xlink:href="#origin2" class="path2" transform="rotate(308.571,250,250)"/>

          <circle cx="250" cy="250" r="135" stroke="#111" stroke-width="7" fill="none"/>

          <path
id="center_I2" fill="none" stroke="#111" stroke-width="10" stroke-miterlimit="10"
                stroke-linecap="round"
                d="M227.4 223.3c-37.4 -50.7 2.6 -90.3 34.3 -79.7c18.6 6.3 11.3 33 -5 29.3">
            <animateTransform
attributeName="transform" type="rotate" from="360 250 250" to="0 250 250"
                              dur="20s" repeatCount="indefinite"/>
          </path>
          <use xlink:href="#center_I2" transform="rotate(120,250,250)"/>
          <use xlink:href="#center_I2" transform="rotate(240,250,250)"/>

          <path
id="center_II2" fill="none" stroke="#111" stroke-width="10" stroke-miterlimit="10"
                stroke-linecap="round"
                d="M230.7 220.7c-37.4 -50.7 -0.7 -87.7 31 -77c18.6 6.3 11.3 33 -5 29.3">
            <animateTransform
attributeName="transform" type="rotate" from="360 250 250" to="0 250 250"
                              dur="20s" repeatCount="indefinite"/>
          </path>
          <use xlink:href="#center_II2" transform="rotate(120,250,250)"/>
          <use xlink:href="#center_II2" transform="rotate(240,250,250)"/>

          <circle cx="250" cy="250" r="20" stroke="#111" stroke-width="10" fill="none"/>
          <circle cx="250" cy="250" r="5" stroke="#111" stroke-width="6" fill="#111"/>
        </svg>
        <h2 class="text-4xl">Neem contact met ons op via:</h2>
        <div class="text-center mt-2">
          <p class="text-2xl underline text-blue-500"><a href="mailto:hallo@luxovius.nl">hallo@luxovius.nl</a></p>
          <hr class="max-w-24 mx-auto my-2">
          <p class="text-muted">Copyright &copy; Luxovius 2025</p>
        </div>
      </div>
  </footer>
</template>

<style scoped>

.path2 {
  stroke-dasharray: 337;
  stroke-dashoffset: 0;
  animation: dash 2.5s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 674;
  }
}
</style>
