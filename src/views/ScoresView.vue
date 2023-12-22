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
        <v-card class="rounded-b-xl bg-grey-lighten-4 ma-1 pa-4" elevation="3">
          <!-- Tournament Stage and Arena -->
          <v-card-text>
            <v-row>
              <v-col>Australia Open - Quarter Finals</v-col>
              <v-col>Rod Laver Arena</v-col>
            </v-row>
          </v-card-text>

          <!-- Header First Game -->
          <v-row class="rounded-t-xl bg-white ma-1 ">
            <v-col>Results</v-col>
            <v-col>Icon</v-col>
            <v-col>1st</v-col>
            <v-col>2nd</v-col>
            <v-col>3rd</v-col>
            <v-col>4th</v-col>
            <v-col>5th</v-col>
            <v-col>Sets</v-col>
          </v-row>

          <!-- First Player - First Game -->
          <v-row class="bg-blue-darken-2 ma-1 pa-1">
            <v-col>N. Djokovic</v-col>
            <v-col>40</v-col>
            <v-col>6</v-col>
            <v-col>0</v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>1</v-col>
          </v-row>

          <!-- Second Player - First Game -->
          <v-row class="rounded-b-xl bg-blue-darken-2 ma-1 pa-1">
            <v-col>C. Alcaraz</v-col>
            <v-col>40</v-col>
            <v-col>6</v-col>
            <v-col>0</v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>1</v-col>
          </v-row>

          <!-- Header First Game -->
          <v-row class="rounded-t-xl bg-white ma-1">
            <v-col>Results</v-col>
            <v-col>Icon</v-col>
            <v-col>1st</v-col>
            <v-col>2nd</v-col>
            <v-col>3rd</v-col>
            <v-col>4th</v-col>
            <v-col>5th</v-col>
            <v-col>Sets</v-col>
          </v-row>

          <!-- First Player - First Game -->
          <v-row class="bg-blue-darken-2 ma-1">
            <v-col>N. Djokovic</v-col>
            <v-col>40</v-col>
            <v-col>6</v-col>
            <v-col>0</v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>1</v-col>
          </v-row>

          <!-- Second Player - First Game -->
          <v-row class="rounded-b-xl bg-blue-darken-2 ma-1">
            <v-col>C. Alcaraz</v-col>
            <v-col>40</v-col>
            <v-col>6</v-col>
            <v-col>0</v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>1</v-col>
          </v-row>
        </v-card>

        <!-- Live Games -->
        <v-row class="bg-red">
          <v-col col="9">
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
          <v-card-text>
            <!-- First Player - Last Match -->
            <v-row>
              <v-col> N. Djokovic (1) </v-col>
              <v-col>3</v-col>
            </v-row>
            <!-- Second Player - Last Match -->
            <v-row>
              <v-col> C. Alcaraz (1) </v-col>
              <v-col>0</v-col>
            </v-row>
          </v-card-text>
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
            <v-card-text>
              <!-- First Player - Players -->
              <v-row>
                <v-col> N. Djokovic </v-col>
              </v-row>
              <!-- Second Player - Players -->
              <v-row>
                <v-col> C. Alcaraz </v-col>
              </v-row>
              <!-- Third Player - Players -->
              <v-row>
                <v-col> T. Tsitsipas </v-col>
              </v-row>
              <!-- See More Players -->
              <v-row>
                <v-col>
                  <v-btn @click="seeMorePlayers">See More</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
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
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    seeMorePlayers() {},
  },
  // setup() {},
};
</script>

<style></style>
