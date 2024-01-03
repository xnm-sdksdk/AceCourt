<template>
  <NavBar></NavBar>
  <div class="">
    <h1>Draws</h1>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useGameStore } from "../stores/games";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      gameStore: useGameStore(),
      games:null
    }
  },
  created () {
    this.games=this.gameStore.getFixtures;
    console.log(this.games);
  },
};
</script>

<style></style>
