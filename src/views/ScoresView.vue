<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <!-- My Games Title -->
      <div class="container mx-auto flex justify-between items-center p-6">
        <v-row>
          <!-- First Column My Games, Live Games -->
          <v-col cols="9">
            <div class="py-2">
              <!-- My Games -->
              <v-card class="rounded-xl bg-grey-lighten-5" elevation="3">
                <div class="text-blue-900 font-bold">
                  <v-card-title class="ml-5 my-5 text-h5"
                    >My Games</v-card-title
                  >
                </div>
                <div class="py-4">
                  <v-card
                    v-for="game in myGames"
                    :key="game.event_key"
                    class="bg-grey-lighten-5 mb-4"
                  >
                    <v-row class="rounded-t-xl bg-blue-darken-2 ma-1">
                      <v-col>{{ game.tournament_round }}</v-col>
                      <v-col>{{ game.event_type_type }}</v-col>
                      <v-col>{{ game.event_status }}</v-col>
                    </v-row>
                    <ScoresHeaderResults></ScoresHeaderResults>
                    <v-row class="bg-blue-darken-2 ma-1">
                      <v-col>{{ game.event_first_player }}</v-col>
                      <!--
                          <v-col>{{ game. }}</v-col>
                          <v-col>{{ game. }}</v-col>
                          <v-col>{{ game. }}</v-col>
                          <v-col>{{ game. }}</v-col>
                          <v-col>{{ game. }}</v-col>
                          <v-col>{{ game. }}</v-col>
                          <v-col>{{ game. }}</v-col> -->
                      <v-btn @click="removeMyGames">Remove MyGames</v-btn>
                    </v-row>
                    <v-row class="rounded-b-xl bg-blue-darken-2 ma-1" I>
                      <v-col>{{ game.event_second_player }}</v-col>
                      <v-btn>Access Game</v-btn>
                    </v-row>
                  </v-card>
                </div>
              </v-card>
            </div>

            <!-- Live Games -->

            <v-row>
              <v-col col="9">
                <div class="my-4">
                  <v-card class="rounded-xl bg-grey-lighten-5" elevation="3">
                    <div class="text-blue-900">
                      <v-card-title class="text-h5 ml-5 my-5">
                        Live Games
                      </v-card-title>
                    </div>
                    <div class="my-4">
                      <v-card
                        v-for="game in liveGames"
                        :key="game.event_key"
                        class="rounded-xl bg-grey-lighten-5 ma-3"
                      >
                        <v-row class="rounded-t-xl bg-blue-darken-2 ma-1">
                          <v-col>{{ game.tournament_round }}</v-col>
                          <v-col>{{ game.event_type_type }}</v-col>
                          <v-col>{{ game.event_status }}</v-col>
                        </v-row>
                        <v-row> </v-row>
                        <ScoresHeaderResults></ScoresHeaderResults>
                        <v-row class="bg-blue-darken-2 ma-1">
                          <v-col>{{ game.event_first_player }}</v-col>
                          <!--
                            <v-col>{{ game. }}</v-col>
                            <v-col>{{ game. }}</v-col>
                            <v-col>{{ game. }}</v-col>
                            <v-col>{{ game. }}</v-col>
                            <v-col>{{ game. }}</v-col>
                            <v-col>{{ game. }}</v-col>
                            <v-col>{{ game. }}</v-col> -->
                          <v-btn @click="addMyGames"> Add MyGames </v-btn>
                        </v-row>

                        <v-row class="rounded-b-xl bg-blue-darken-2 ma-1" I>
                          <v-col>{{ game.event_second_player }}</v-col>
                          <v-btn @click="accessGame">Access Game</v-btn>
                        </v-row>
                      </v-card>
                      <!-- Fist Game Live Games -->
                    </div>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <!-- Second Column Last Match, Players -->
          <v-col cols="3">
            <!-- Last Match -->
            <v-card
              class="rounded-xl bg-grey-lighten-4 ma-1"
              elevation="3"
              height="300"
            >
              <div class="text-blue-900 font-bold">
                <v-card-title class="ml-2 my-2 text-h6">
                  Last Match
                </v-card-title>
              </div>
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

            <div class="my-5">
              <!-- Players -->
              <v-card
                class="rounded-xl bg-grey-lighten-4 ma-1"
                elevation="3"
                height="300"
              >
                <div class="text-blue-900 font-bold">
                  <v-card-title class="ml-2 my-2 text-h6">
                    Players
                  </v-card-title>
                </div>
                <!-- Players -->
                <v-col> </v-col>

                <!-- See More Players -->
                <v-row>
                  <v-col>
                    <v-btn>See More</v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { ref, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import ScoresHeaderResults from "@/components/ScoresHeaderResults.vue";
import { useGameStore } from "@/stores/games";

export default {
  components: {
    NavBar,
    ScoresHeaderResults,
  },
  data() {
    return {
      store: useGameStore(),

      myGames: [],
      isLoading: true,
    };
  },
  created() {
    console.log(this.liveGames);
    this.store.fetchFixtures();
    this.myGames = this.store.getMyGames;
  },
  methods: {
    addMyGames(game) {
      this.store.addMyGames(game);
    },
    removeMyGames(game) {
      this.store.removeMyGames(game);
    },
    renderLiveGames() {
      this.liveGames = this.store.getLiveScore;
    },
    getSetResult(game, setNumber) {
      console.log(game, setNumber);
    },
    getLiveScore(game) {
      console.log(game);
    },
  },
  computed: {
    liveGames() {
      return this.store.getLiveScore;
    },
  },
};
</script>

<style></style>
