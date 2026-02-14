<script setup lang="ts">
function openNav() {
  document.getElementById("myNav").style.transitionDuration = "0.3s"
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.width = "0%";
}
</script>

<template>
  <!-- Navigation -->
  <UButton class="fixed top-6 left-6 z-40" color="primary" variant="subtle" size="xl" icon="i-lucide-align-justify" @click="openNav"/>
<!--  <a id="menu-toggle" @click="openNav" class="btn btn-dark btn-lg toggle"><UIcon name="i-lucide-align-justify"/></a>-->

  <!-- The overlay -->
  <div id="myNav" class="overlay z-50">

    <!-- Button to close the overlay navigation -->
    <a href="javascript:void(0)" class="closebtn absolute top-0 left-6" @click="closeNav">&times;</a>

    <!-- Overlay content -->
    <div class="overlay-content">
      <a href="#top" @click="closeNav">Start</a>
      <a href="#about" @click="closeNav">Van de voorzitter</a>
      <a href="#ledensectie" @click="closeNav">De leden</a>
      <a href="#contact" @click="closeNav">Contact</a>
    </div>

  </div>
</template>

<style scoped>
/* Menu overlay */

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 0;
  width: 0;
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.98); /* Black w/opacity */
  overflow: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top left corner) */
.overlay .closebtn {
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

</style>