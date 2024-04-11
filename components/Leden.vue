<script setup lang="ts">

import Lichting from "~/components/Lichting.vue";
</script>

<template>

  <!-- Nieuwe leden sectie, maakt gebruikt van fixstyle.css # Sverre 24/05/2019 -->
  <div id="ledensectie">
    <Lichting :lichting="{name: 'Het Praesidium'}">
      <template #leden>
        <ContentQuery path="praesidium" find="one" v-slot="{ data }">
          <ContentQuery path="leden" find="one" :where="{name: data.praeses}" v-slot="{ data }">
            <Lid :lid="{...data, type: false, subtitle: 'Uw sexy Praeses'}"/>
          </ContentQuery>
          <ContentQuery path="leden" find="one" :where="{name: data.abactis}" v-slot="{ data }">
            <Lid :lid="{...data, type: false, subtitle: 'Uw sexy Ab actis'}"/>
          </ContentQuery>
          <ContentQuery path="leden" find="one" :where="{name: data.quaestor}" v-slot="{ data }">
            <Lid :lid="{...data, type: false, subtitle: 'Uw sexy Quaestor'}"/>
          </ContentQuery>
        </ContentQuery>
      </template>
    </Lichting>
    <ContentList path="lichtingen" :query="{sort: [{order: 1, $numeric: true}]}" v-slot="{ list }">
      <Lichting v-for="lichting in list" key="lichting.name" :lichting="lichting"/>
    </ContentList>
  </div>
</template>

<style scoped>
/* Leden sexy */
#ledensectie {
  position: relative;
  width: 100vw;
  height: auto;
  padding: 50px 5vw;
  background: #000;
  text-align: center;
}
</style>