<template>
  <NavBar></NavBar>
  <!-- My Games Title -->
  <div class="container mx-auto flex justify-between items-center p-4">
    <v-row>
      <!-- First Column My Games, Live Games -->
      <v-col cols="8">
        <!-- My Games -->
        <v-card-title
          class="rounded-t-xl text-center bg-grey-lighten-4 white--text ma-1"
          >My Games</v-card-title
        >
        <v-card
          class="rounded-b-xl bg-grey-lighten-4 ma-1"
          elevation="3"
          height="300"
        >
        </v-card>
        <!-- Live Games -->
        <v-card-title class="rounded-t-xl text-center bg-grey-lighten-5 white--text ma-1 pa-2"> Live Games </v-card-title>
        <v-card
          class="rounded-b-xl bg-grey-lighten-4 ma-1"
          elevation="3"
          height="300"
        >
        </v-card>
      </v-col>

      <!-- Second Column Last Match, Players -->
      <v-col cols="4">
        <!-- Last Match -->
        <v-card-title
          class="rounded-t-xl text-center bg-blue-lighten-5 white--text ma-1"
        >
          Last Match
        </v-card-title>
        <v-card
          class="rounded-b-xl bg-grey-lighten-4 ma-1"
          elevation="3"
          height="300"
        >
        </v-card>

        <div class="">
          <!-- Players -->
          <v-card-title
            class="rounded-t-xl text-center bg-blue-lighten-5 white--text ma-1"
            >Players</v-card-title
          >
          <v-card
            class="rounded-b-xl bg-grey-lighten-4 ma-1"
            elevation="3"
            height="300"
          >
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
  <div class="container mx-auto flex justify-between items-center p-4">
    <v-row>
      <v-col> </v-col>
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
