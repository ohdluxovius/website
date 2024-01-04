<script setup lang="ts">
defineProps<{
  lid: object,
}>()
</script>

<template>

  <div class="leden-item">
    <img src="/img/luxoven/arne.jpg" class="new image"/>
    <p class="hover">Actief lid</p>
    <h4 class="up">
      <strong>{{ lid.name }}</strong><span class="service-small">{{ lid.subtitle }}</span>
    </h4>
  </div>
</template>

<style scoped>
.leden-item {
  color: #fff;
  position:       relative;
  width:          auto;
  min-width:      250px;
  max-width:      300px;
  display:        inline-block;
  margin:         15px;
}

.leden-item p {
  pointer-events: none;
}

.leden-item img.new {
  height: 102px;
  width: 102px;
  object-fit: cover;
  border: #FFF 2px solid;
  border-radius: 50%;
  filter: grayscale(100%);
}

.leden-item > img:hover ~ p {
  opacity:            0.7;
  transition:         0.3s ease;
  transform:          translateY(-20.0px);
  color:              #fff;
  height:             100%;
  overflow:           hidden;
  background-color:   #000;
}

/* Services */

.service-small {
  color:#fff;
  font-size: 12px;
  display: block;
  margin-top: 5px;
}


.hover {
  transition: .5s ease;
  color: #0000;
  position: relative;
  top:-40px;
}

/*zet tekst goed door hover*/
.up{
  top: -20px;
  position: relative;
}
</style>