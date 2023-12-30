<template>
  <NavBar></NavBar>
  <v-container>
    <v-row>
      <v-col>
        <img src="@/assets/about.svg" alt="" />
      </v-col>
      <v-col>
        <h1>About us</h1>
        <p>
          At the Australian Open Dashboard, we're more than just a platform; we're
          a team of avid tennis enthusiasts dedicated to enhancing your connection
          with the game. Our journey began with a shared passion for the thrill of
          the court, and we've crafted this space to share that enthusiasm with
          you. Immerse yourself in the game you love as we weave technology and
          passion into every update, every player insight, and every match
          highlight. Join us in celebrating the unique spirit of tennis,
          transforming each moment into a personal victory for fans around the
          globe. Welcome to a tennis experience that's as individual as your love
          for the game.
        </p>
      </v-col>
    </v-row>
  </v-container>
  <Footer></Footer>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style>
h1 {
  font-size: 24pt;
  color: #0F3972;
  font-family: "Karla ExtraBold", sans-serif;
}

p{
  font-size: 14pt;
  color: #0F3972;
  font-family: "Karla ExtraLight", sans-serif;
  text-align: justify
};
</style>