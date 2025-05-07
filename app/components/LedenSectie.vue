<script setup lang="ts">
import LichtingView from "~/components/LichtingView.vue";
import {useAsyncData} from "#app";


const {data: praesidium} = useAsyncData('praesidium', async () => {
  const praesidiumLeden = await queryCollection('praesidium').first();
  const result = {
    praeses: await queryCollection('leden').where('name', '=', praesidiumLeden.praeses).first(),
    abactis: await queryCollection('leden').where('name', '=', praesidiumLeden.abactis).first(),
    quaestor: await queryCollection('leden').where('name', '=', praesidiumLeden.quaestor).first(),
  };
  return result;
})

const {data: lichtingen} = useAsyncData('lichtingen', () => {
  return queryCollection('lichtingen').order('order', 'ASC').all();
})

</script>

<template>
  <div id="ledensectie" class="text-center bg-black relative h-auto w-screen py-20 px-30 flex flex-col gap-y-18">
    <LichtingView v-if="praesidium" :lichting="{name: 'Het Praesidium'}">
      <template #leden>
        <LidBlock :lid="{...praesidium.praeses, type: false, subtitle: 'Uw sexy Praeses'}"/>
        <LidBlock :lid="{...praesidium.abactis, type: false, subtitle: 'Uw sexy Ab actis'}"/>
        <LidBlock :lid="{...praesidium.quaestor, type: false, subtitle: 'Uw sexy Quaestor'}"/>
      </template>
    </LichtingView>
    <LichtingView v-for="lichting in lichtingen" :key="lichting.name" :lichting="lichting"/>
  </div>
</template>

<style scoped>
</style>