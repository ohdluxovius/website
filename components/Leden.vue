<script setup lang="ts">

import Lichting from "~/components/Lichting.vue";
</script>

<template>

  <!-- Nieuwe leden sectie, maakt gebruikt van fixstyle.css # Sverre 24/05/2019 -->
  <div id="ledensectie">

    <div class="title-header">
      <h2>Het Praesidium</h2>
    </div>

    <div class="leden-wrapper">
      <div class="leden-item">
        <img class="" src="/img/luxoven/ries.png"/>
        <h4>
          <strong>Ries Haaksma</strong><span class="service-small">Uw sexy Praeses</span>
        </h4>
      </div>
      <div class="leden-item">
        <img class="" src="/img/luxoven/Jelle.png"/>
        <h4>
          <strong>Jelle Smith</strong><span class="service-small">Uw sexy ab Actis</span>
        </h4>
      </div>
      <div class="leden-item">
        <img class="" src="/img/luxoven/Marnix.png"/>
        <h4>
          <strong>Marnix Lueb</strong><span class="service-small">Uw sexy Quaestor</span>
        </h4>
      </div>
    </div>

    <div class="title-header">
      <h2>Oprichters</h2>
    </div>

    <div class="leden-wrapper">
      <div class="leden-item">
        <img src="/img/luxoven/aschwin.png" class="image"/>
        <p class="hover">Oude lul</p>
        <h4 class="up">
          <strong>Aschwin Althof</strong><span class="service-small">Oer voorzitter</span>
        </h4>
      </div>
      <div class="leden-item">
        <img src="/img/luxoven/ruben.png" class="image"/>
        <p class="hover">Erelid</p>
        <h4 class="up">
          <strong>Ruben van den Berg</strong><span class="service-small">De centjes man</span>
        </h4>
      </div>
    </div>

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