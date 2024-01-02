<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <div class="container mx-auto flex justify-between items-center p-6">
        <v-row>
          <v-col>
            <v-card>
              <div class="text-blue-900 font-bold">
                <v-card-title class="ml-5 my-5 text-h5"> Final</v-card-title>
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
            <!-- Game Score -->
            <v-card>
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
            <!-- Voting System -->
            <v-card>
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
          <v-col>
            <v-card>
              <v-card-title>Statistics</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <!-- Left Containers -->
        <!-- <v-row>
          <v-col cols="4"> Final </v-col>
          <v-col cols="4"> Container 2 </v-col>
          <v-col cols="4"> Container 3 </v-col>
        </v-row> -->

        <!-- Right Container -->
        <!-- <v-col cols="4">
          <v-card>
            <v-card-title>Container 4</v-card-title>
            Seu conteúdo aqui
          </v-card>
        </v-col> -->
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useTennisStore } from "../stores/tennis";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: useTennisStore(),
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
