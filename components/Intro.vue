<script setup lang="ts">

</script>

<template>

  <!-- About -->
  <section id="about" class="about text-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-lg-offset-2">
          <h2>Onafhankelijk Heeren Dispuut Luxovius</h2>
          <p class="lead">Van de voorzitter</p>
        <ContentDoc path="intro" v-slot="{ doc }">
          <ContentRenderer :value="doc" />
        </ContentDoc>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>

</template>

<style scoped>
/* About */

.about {
  padding: 200px 0;
}
</style>