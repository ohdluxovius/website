<script setup lang="ts">

import Lichting from "~/components/Lichting.vue";
</script>

<template>

  <!-- Nieuwe leden sectie, maakt gebruikt van fixstyle.css # Sverre 24/05/2019 -->
  <div id="ledensectie">
    <ContentList path="lichtingen" :query="{sort: [{order: 1, $numeric: true}]}" v-slot="{ list }">
      <Lichting v-for="lichting in list" key="lichting.name" :lichting="lichting"/>
    </ContentList>
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