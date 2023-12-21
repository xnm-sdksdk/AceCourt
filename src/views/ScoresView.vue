<template>
  <NavBar></NavBar>
  <!-- My Games Title -->
  <div class="container mx-auto flex justify-between items-center p-4">
    <v-row>
      <v-col>
        <v-card-title
          class="rounded-t-xl text-center bg-blue-lighten-5 white--text"
          >My Games</v-card-title
        >
      </v-col>

      <v-col>
        <v-card-title
          class="rounded-t-xl text-center bg-blue-lighten-5 white--text"
        >
          Last Match
        </v-card-title>
      </v-col>
    </v-row>
  </div>
  <div class="container mx-auto flex justify-between items-center p-4">
    <v-row>
      <v-col>
        <v-card-title>Players</v-card-title>
      </v-col>
    </v-row>
  </div>
  <!-- Arena  -->
  <!-- First Game -->
  <!-- <v-card>
    <v-row>
      <v-col>Results</v-col>
      <v-col>Live Emojis</v-col>
      <v-col>1</v-col>
      <v-col>2</v-col>
      <v-col>3</v-col>
      <v-col>4</v-col>
      <v-col>5</v-col>
      <v-col>Sets</v-col>
    </v-row>
  </v-card> -->
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  // setup() {},
};
</script>

<style></style>
