<script setup lang="ts">

import Lichting from "~/components/Lichting.vue";
</script>

<template>

  <!-- Nieuwe leden sectie, maakt gebruikt van fixstyle.css # Sverre 24/05/2019 -->
  <div id="ledensectie">
    <ContentQuery path="lichtingen" sort="order" v-slot="{ data }">
      <Lichting v-for="lichting in data" key="lichting.name" :lichting="lichting"/>
    </ContentQuery>
  </div>
</template>

<style scoped>
/* Leden sexy */
#ledensectie {
  position:       relative;
  width:          100vw;
  height:         auto;
  padding:        50px 5vw;
  background:     #000;
  text-align:     center;
}
</style>