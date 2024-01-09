<script setup lang="ts">

</script>

<template>
  <section id="about" class="about text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-lg-offset-2">
          <h2>Onafhankelijk Heeren Dispuut Luxovius</h2>
          <p class="lead">Van de voorzitter</p>
          <ContentQuery path="intro" find="one" v-slot="{ data }">
            <ContentRendererMarkdown :value="data" />
          </ContentQuery>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.about {
  padding: 200px 0;
}
</style>