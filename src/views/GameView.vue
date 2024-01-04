<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <div class="container mx-auto flex justify-between items-center p-6">
        <v-row class="justify-center align-center">
          <!-- First Player and Game Score -->
          <v-col cols="6">
            <v-row class="justify-center align-center">
              <v-col cols="11">
                <v-card
                  class="rounded-lg bg-grey-lighten-5"
                  elevation="3"
                  height="300px"
                >
                  <div class="text-blue-900 font-bold">
                    <v-card-title class="ml-5 my-5 text-h5">
                      Final
                    </v-card-title>
                  </div>
                  <!-- First Player Image -->
                  <div class="flex">
                    <v-img
                      src="../assets/nova.svg"
                      alt="First-Player-Game"
                      height="180px"
                      width="180px"
                      cover
                      class="rounded-circle"
                    ></v-img>

                    <!-- Second Player Image -->
                    <v-img
                      src="../assets/carlos.svg"
                      alt="First-Player-Game"
                      height="180px"
                      width="180px"
                      cover
                      class="rounded-circle"
                    ></v-img>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <!-- Game Score -->
            <v-row class="justify-center align-center">
              <v-col cols="11">
                <v-card
                  class="rounded-lg bg-grey-lighten-5"
                  elevation="3"
                  height="300"
                >
                  <v-row>
                    <v-col>Sets</v-col>
                    <v-col>1st</v-col>
                    <v-col>2nd</v-col>
                    <v-col>3rd</v-col>
                    <v-col>Final</v-col>
                  </v-row>
                  <v-row>
                    <v-col>N. Djokovic</v-col>
                    <v-col>6</v-col>
                    <v-col>6</v-col>
                    <v-col>6</v-col>
                    <v-col>3</v-col>
                  </v-row>
                  <v-row>
                    <v-col>C. Alcaraz</v-col>
                    <v-col>3</v-col>
                    <v-col>2</v-col>
                    <v-col>4</v-col>
                    <v-col>0</v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <!-- Voting System -->
            <v-row class="justify-center align-center">
              <v-col cols="11">
                <v-card
                  class="rounded-lg bg-grey-lighten-5"
                  elevation="3"
                  height="200"
                >
                  <v-row>
                    <v-card-title>Winning Player</v-card-title>
                  </v-row>
                  <v-col>
                    <div class="flex">
                      <p>N. Djokovic</p>
                      <p>C. Alcaraz</p>
                    </div>
                    <v-btn>Vote</v-btn>
                    <v-btn>Vote</v-btn>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <!-- Statistics -->
          <v-col cols="6">
            <v-card
              class="rounded-lg bg-grey-lighten-5"
              elevation="3"
              height="600"
            >
              <v-row class="justify-center align-center">
                <v-col cols="6">
                  <v-card-title>Statistics</v-card-title>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
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
      store: useGameStore(),
      fixtures: [],
    };
  },
  created() {
    // this.store.fetchFixtures();
    // this.fixtures = this.store.getFixtures;
    // console.log(this.fixtures);
  },
};
</script>

<style></style>
