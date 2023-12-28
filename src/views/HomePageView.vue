<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <!-- Highlight Player Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row class="justify-center align-center">
          <v-col cols="5">
            <v-card
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900">
                <v-card-title class="ml-5 my-5 text-h5">
                  Highlight Player
                </v-card-title>
              </div>
              <v-row class="ml-5">
                <v-col cols="4">
                  <v-img
                    src="../assets/carlos.svg"
                    alt="Highlight-Player-Image"
                    height="180px"
                    width="180px"
                    cover
                    class="rounded-circle"
                  >
                  </v-img>
                </v-col>

                <v-col cols="7">
                  <div class="text-blue-600">
                    <v-card-subtitle class="m-1 text-body-1" justify="start"
                      >Carlos Alcaraz</v-card-subtitle
                    >
                  </div>

                  <div class="text-slate-700">
                    <v-card-text>
                      Spanish tennis sensation Carlos Alcaraz showcases
                      formidable skill and remarkable achievements.
                    </v-card-text>
                  </div>

                  <RouterLink :to="{ name: 'players', params: { id: 1905 } }">
                    <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                  </RouterLink>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Live Games Card -->
          <v-col cols="5">
            <div class="">
              <v-card
                class="rounded-xl bg-grey-lighten-5"
                elevation="3"
                height="300"
              >
                <div class="text-blue-900">
                  <v-card-title class="ml-5 my-5 text-h5">
                    Live Games
                  </v-card-title>
                </div>
                <div class="text-blue-600">
                  <v-card-subtitle class="ml-5 text-body-1"
                    >Real-Time Data</v-card-subtitle
                  >
                </div>

                <div class="text-slate-700 text-left">
                  <v-card-text class="ml-5 max-w-xs">
                    Experience the thrill of live games with our dynamic
                    dashboard, providing real-time data for an immersive gaming
                    experience
                  </v-card-text>
                </div>

                <div class="ml-5">
                  <RouterLink :to="{ name: 'scores' }">
                    <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                  </RouterLink>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Highlight Game Bar -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <!-- First Row -->
        <v-row class="justify-center align-center">
          <v-col cols="10">
            <v-card
              class="rounded-t-xl m-1 text-center bg-blue-lighten-5 white--text"
              elevation="3"
            >
              <div class="justify-center items-center p-1">
                <div class="text-blue-900 font-bold">
                  <v-row>
                    <v-col cols="2" class="m-3">Sets</v-col>
                    <v-col cols="1" class="m-3">1st</v-col>
                    <v-col cols="1" class="m-3">2nd</v-col>
                    <v-col cols="1" class="m-3">3rd</v-col>
                    <v-col cols="1" class="m-3">4th</v-col>
                    <v-col cols="1" class="m-3">5th</v-col>
                    <v-col cols="2" class="m-3">Final</v-col>
                  </v-row>
                </div>
              </div>
            </v-card>
            <!-- Second Row -->
            <div class="justify-center items-center p-1">
              <v-card class="text-center bg-grey-lighten-5 white--text">
                <v-row>
                  <v-col cols="2" class="m-3">N. Djokovic</v-col>
                  <v-col cols="1" class="m-3">6</v-col>
                  <v-col cols="1" class="m-3">6</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="2" class="m-3">2</v-col>
                </v-row>
              </v-card>
            </div>
            <!-- Third Row -->
            <div class="justify-center items-center p-1">
              <v-card
                class="rounded-b-xl text-center bg-grey-lighten-5 white--text"
              >
                <v-row>
                  <v-col cols="2" class="m-3">C. Alcaraz</v-col>
                  <v-col cols="1" class="m-3">3</v-col>
                  <v-col cols="1" class="m-3">2</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="2" class="m-3">0</v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Top Matches Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row class="justify-center align-center">
          <v-col cols="5">
            <v-card
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900">
                <v-card-title class="ml-5 my-5 text-h5">
                  Top Matches
                </v-card-title>
              </div>
              <div class="flex">
                <v-row class="ml-2">
                  <v-col cols="6" class="">
                    <div class="relative">
                      <!-- Carlos -->
                      <v-img
                        src="../assets/carlos.svg"
                        alt="Carlos-Alcaraz-Image"
                        height="180px"
                        width="180px"
                        cover
                        class="rounded-circle"
                      >
                      </v-img>

                      <!-- Jannik -->

                      <div class="absolute top-0 left-20 mx-6">
                        <v-img
                          src="../assets/jannik.svg"
                          alt="Jannik-Sinner-Image"
                          height="180px"
                          width="180px"
                          cover
                          class="rounded-circle"
                        >
                        </v-img>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="5">
                    <div class="text-slate-700 text-center tracking-widest">
                      <v-card-text class="m-4 ml-5 text-h5"
                        >Jannik Sinner defeats Carlos Alcaraz in a perfect
                        Game</v-card-text
                      >
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>

          <!-- News Card -->

          <v-col cols="5">
            <v-card
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900">
                <v-card-title class="ml-5 my-5 text-h5"> News </v-card-title>
              </div>

              <!-- Player -->
              <v-row class="ml-3">
                <v-col cols="6">
                  <v-img
                    src="../assets/player.svg"
                    alt="Player-Image"
                    width="200px"
                    height="200px"
                    cover
                    class="rounded-circle"
                  >
                  </v-img>
                </v-col>
                <v-col cols="5" class="flex flex-col">
                  <div class="text-slate-700">
                    <v-card-text class="m-1 text-body-1 text-right"
                      >Tennis - "We'll be back", say Australia's Davis Cup
                      nearly-men</v-card-text
                    >
                  </div>

                  <RouterLink :to="{ name: 'news' }">
                    <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                  </RouterLink>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- Ranking Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row class="justify-center align-center">
          <v-col cols="5">
            <v-card
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900">
                <v-card-title class="ml-5 my-5 text-h5"> Ranking </v-card-title>
              </div>

              <v-row class="ml-3">
                <v-col cols="6">
                  <!-- Player -->

                  <v-img
                    src="../assets/nova.svg"
                    alt="Djokovic-Ranking-Image"
                    width="200px"
                    height="200px"
                    cover
                    class="rounded-circle"
                  >
                  </v-img>
                </v-col>

                <v-col cols="5">
                  <div class="d-flex flex-col">
                    <v-card-text>{{ fetchRankingPlayerName }}</v-card-text>
                    <v-card-text>{{ fetchRankingPlayerPoints }}</v-card-text>
                    <RouterLink :to="{ name: 'ranking' }">
                      <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                    </RouterLink>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="5">
            <!-- Head to Head Card -->
            <v-card
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900">
                <v-card-title class="ml-5 my-5 text-h5">
                  Head to Head
                </v-card-title>
              </div>
              <!-- De Minaur -->

              <div class="flex">
                <v-row class="ml-2">
                  <v-col cols="6" class="">
                    <div class="relative">
                      <v-img
                        src="../assets/medvedev.svg"
                        alt="Medvedev-Image"
                        width="180px"
                        height="180px"
                        cover
                        class="rounded-circle"
                      >
                      </v-img>

                      <!-- Medvedev  -->

                      <div class="absolute top-0 left-20 mx-6">
                        <v-img
                          src="../assets/alex.svg"
                          alt="De-Minaur-Image"
                          width="180px"
                          height="180px"
                          cover
                          class="rounded-circle"
                        >
                        </v-img>
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="5">
                    <div class="text-slate-700">
                      <v-card-text class="text-h6 text-right"
                        >Medvedev gets revenge on De Minaur and return to US
                        Open quarter-finals</v-card-text
                      >
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- Tournament Progress Stats Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row class="justify-center align-center">
          <v-col cols="10">
            <v-card
              max-width="1500"
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <v-card-title class="ml-4"> Tournament Progress </v-card-title>
              <!-- Graph 1 -->

              <!-- Graph 2 -->
              <!-- Graph 3 -->
              <!--<canvas ref="myChart"></canvas>-->
              <v-card-subtitle class="ml-4"
                >Percentage of Completion</v-card-subtitle
              >
              <v-card-subtitle class="ml-4"
                >Average First Server Won %</v-card-subtitle
              >
              <v-card-subtitle class="ml-4">Second Serve % Won</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- Footer -->
    </v-container>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ButtonSeeMore from "@/components/ButtonSeeMore.vue";
import { useGameStore } from "@/stores/tennis";
//import Chart from "chart.js/auto";
export default {
  components: {
    NavBar,
    ButtonSeeMore,
    Footer,
  },
  data() {
    return {
      SeeMore: "See More",
      store: useGameStore(),
    };
  },
  computed: {
    fetchRankingPlayerName() {
      return this.store.getFirstPlayerRanking
        ? this.store.getFirstPlayerRanking.player
        : "Loading Name...";
    },
    fetchRankingPlayerPoints() {
      return this.store.getFirstPlayerRanking
        ? this.store.getFirstPlayerRanking.points
        : "Loading Points...";
    },
  },
};
</script>

<style></style>
