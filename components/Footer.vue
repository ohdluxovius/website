<script setup lang="ts">

</script>

<template>
  <footer id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 text-center">
          <svg id="svg1" viewBox="0 0 500 500" style="max-height: 500px; max-width: 500px">
            <path id="origin2" class="path2" fill="none" stroke="#111" stroke-width="10"
                  stroke-miterlimit="10" stroke-linecap="round"
                  d="M448.4 135.9c29.7 71.5 -94.2 225.3 -125.3 283.5c-8.1 15.1 55.7 39.2 89.8 -7.7c23.4 -32.2 0.6 -72.9 0.6 -72.9c-32.3 6.2 -25.9 116.7 -97.8 130.5">
              <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250"
                                dur="24s" repeatCount="indefinite"/>
            </path>
            <use xlink:href="#origin2" class="path2" transform="rotate( 51.428,250,250)"/>
            <use xlink:href="#origin2" class="path2" transform="rotate(102.857,250,250)"/>
            <use xlink:href="#origin2" class="path2" transform="rotate(154.285,250,250)"/>
            <use xlink:href="#origin2" class="path2" transform="rotate(205.714,250,250)"/>
            <use xlink:href="#origin2" class="path2" transform="rotate(257.142,250,250)"/>
            <use xlink:href="#origin2" class="path2" transform="rotate(308.571,250,250)"/>

            <circle cx="250" cy="250" r="135" stroke="#111" stroke-width="7" fill="none"/>

            <path id="center_I2" fill="none" stroke="#111" stroke-width="10" stroke-miterlimit="10"
                  stroke-linecap="round"
                  d="M227.4 223.3c-37.4 -50.7 2.6 -90.3 34.3 -79.7c18.6 6.3 11.3 33 -5 29.3">
              <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250"
                                dur="20s" repeatCount="indefinite"/>
            </path>
            <use xlink:href="#center_I2" transform="rotate(120,250,250)"/>
            <use xlink:href="#center_I2" transform="rotate(240,250,250)"/>

            <path id="center_II2" fill="none" stroke="#111" stroke-width="10" stroke-miterlimit="10"
                  stroke-linecap="round"
                  d="M230.7 220.7c-37.4 -50.7 -0.7 -87.7 31 -77c18.6 6.3 11.3 33 -5 29.3">
              <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250"
                                dur="20s" repeatCount="indefinite"/>
            </path>
            <use xlink:href="#center_II2" transform="rotate(120,250,250)"/>
            <use xlink:href="#center_II2" transform="rotate(240,250,250)"/>

            <circle cx="250" cy="250" r="20" stroke="#111" stroke-width="10" fill="none"></circle>
            <circle cx="250" cy="250" r="5" stroke="#111" stroke-width="6" fill="#111"></circle>
          </svg>
          <h2>Neem contact met ons op via:</h2>
          <p class="lead grotere-lead"><a href="mailto:hallo@luxovi.us">hallo@luxovi.us</a></p>
          <hr class="small border-2">
          <p class="text-muted">Copyright &copy; Luxovius 2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 100px 0;
  min-height: 100vh;
}

.grotere-lead {
  font-size: 24px;
}

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

hr.small {
  margin-left: auto;
  margin-right: auto;
  max-width: 100px;
  color: #000;
}
</style>