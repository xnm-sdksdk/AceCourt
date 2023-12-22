<template>
  <NavBar></NavBar>
  <!-- My Games Title -->
  <div class="container mx-auto flex justify-between items-center p-4">
    <v-row class="bg-green">
      <!-- First Column My Games, Live Games -->
      <v-col cols="9">
        <!-- My Games -->
        <v-card-title
          class="rounded-t-xl bg-grey-lighten-4 white--text ma-1 pa-3"
          >My Games</v-card-title
        >
        <v-card
          class="rounded-b-xl bg-grey-lighten-4 ma-1"
          elevation="3"
          height="300"
        >
        </v-card>
        <v-row class="bg-red">
          <v-col col="9">
            <!-- Live Games -->
            <v-card-title
              class="rounded-t-xl bg-grey-lighten-5 white--text ma-1 pa-3"
            >
              Live Games
            </v-card-title>
            <v-card
              class="rounded-b-xl bg-grey-lighten-4 ma-1"
              elevation="3"
              height="300"
            >
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Second Column Last Match, Players -->
      <v-col cols="3">
        <!-- Last Match -->
        <v-card-title
          class="rounded-t-xl bg-blue-lighten-5 white--text ma-1 pa-3"
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
            class="rounded-t-xl bg-blue-lighten-5 white--text ma-1 pa-3"
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
  <!-- <div class="container mx-auto flex justify-between items-center p-4"></div> -->
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
