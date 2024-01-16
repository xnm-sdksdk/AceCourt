<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <!-- Highlight Player Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row class="justify-center align-center">
          <v-col :cols="12" md="5" lg="5">
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
          <v-col :cols="12" md="5" lg="5" class="order-sm-2">
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
          <v-col :cols="12" md="5" lg="10" class="order-sm-2">
            <!-- Second Row -->
            <div class="p-1">
              <v-card
                v-for="game in liveGames.slice(0, 1)"
                :key="game.event_key"
                class="text-center rounded-xl bg-grey-lighten-5"
              >
                <v-card
                  class="rounded-t-xl text-center bg-blue-lighten-5 white--text"
                  elevation="3"
                >
                  <div class="justify-center items-center px-1">
                    <ScoresHeaderHome :game="game"></ScoresHeaderHome>
                  </div>
                </v-card>
                <v-row class="rounded-b-xl">
                  <v-col cols="2" class="m-3">{{
                    game.event_first_player
                  }}</v-col>
                  <v-col cols="1" class="m-3">6</v-col>
                  <v-col cols="1" class="m-3">6</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="1" class="m-3">-</v-col>
                  <v-col cols="1" class="m-3">{{
                    game.event_game_result.slice(0, 2)
                  }}</v-col>
                </v-row>
                <!-- Third Row -->
                <div class="">
                  <v-row class="">
                    <v-col cols="2" class="m-3">{{
                      game.event_second_player
                    }}</v-col>
                    <v-col cols="1" class="m-3">3</v-col>
                    <v-col cols="1" class="m-3">2</v-col>
                    <v-col cols="1" class="m-3">-</v-col>
                    <v-col cols="1" class="m-3">-</v-col>
                    <v-col cols="1" class="m-3">-</v-col>
                    <v-col cols="1" class="m-3">{{
                      game.event_game_result.slice(4, 7)
                    }}</v-col>
                  </v-row>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Top Matches Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row class="justify-center align-center">
          <v-col :cols="12" md="5" lg="5" class="order-sm-2">
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

          <v-col :cols="12" md="5" lg="5" class="order-sm-2">
            <v-card
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900">
                <v-card-title class="ml-5 my-5 text-h5"> News </v-card-title>
              </div>

              <!-- Player -->
              <v-row class="ml-5">
                <v-col cols="5">
                  <v-img
                    src="../assets/player.svg"
                    alt="Player-Image"
                    width="180px"
                    height="180px"
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
          <v-col :cols="12" md="5" lg="5" class="order-sm-2">
            <v-card
              class="rounded-xl bg-grey-lighten-5"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900">
                <v-card-title class="ml-5 my-5 text-h5"> Ranking </v-card-title>
              </div>

              <v-row class="ml-5">
                <v-col cols="5">
                  <!-- Player -->

                  <v-img
                    src="../assets/nova.svg"
                    alt="Djokovic-Ranking-Image"
                    width="180px"
                    height="180px"
                    cover
                    class="rounded-circle"
                  >
                  </v-img>
                </v-col>

                <v-col cols="6" class="">
                  <div
                    class="flex flex-row text-blue-900 font-bold text-center"
                  >
                    <div class="flex flex-column text-left">
                      <v-card-title>Place</v-card-title>
                      <v-card-text class="text-h6" v-if="fetchFirstPlayer">{{
                        fetchFirstPlayer.place
                      }}</v-card-text>
                    </div>
                    <div class="flex flex-column text-left">
                      <v-card-title>Name</v-card-title>
                      <v-card-text class="text-h6" v-if="fetchFirstPlayer">{{
                        fetchFirstPlayer.player
                      }}</v-card-text>
                    </div>
                    <div class="flex flex-column text-left">
                      <v-card-title>Points</v-card-title>
                      <v-card-text class="text-h6" v-if="fetchFirstPlayer">{{
                        fetchFirstPlayer.points
                      }}</v-card-text>
                    </div>
                  </div>
                  <RouterLink :to="{ name: 'ranking' }">
                    <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                  </RouterLink>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col :cols="12" md="5" lg="5" class="order-sm-2">
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
          <v-col :cols="12" md="5" lg="10" class="order-sm-2">
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
import ScoresHeaderHome from "@/components/ScoresHeaderHome.vue";
import { useGameStore } from "@/stores/games";
//import Chart from "chart.js/auto";
export default {
  components: {
    NavBar,
    ButtonSeeMore,
    Footer,
    ScoresHeaderHome,
  },
  props: { game: Object },
  data() {
    return {
      SeeMore: "See More",
      store: useGameStore(),
    };
  },
  created() {
    this.store.fetchStandings();
    this.store.fetchFixtures();
  },
  computed: {
    fetchFirstPlayer() {
      return this.store.getFirstPlayerRanking;
    },
    liveGames() {
      return this.store.getFixtures;
    },
  },
};
</script>

<style></style>
