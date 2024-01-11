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
                    <ScoresHeaderResults :game="game"></ScoresHeaderResults>
                    <v-row class="bg-blue-darken-2 ma-1">
                      <v-col>{{ game.event_first_player }}</v-col>
                      <v-btn @click="removeMyGames(game)">Remove MyGames</v-btn>
                    </v-row>
                    <v-row class="rounded-b-xl bg-blue-darken-2 ma-1" I>
                      <v-col>{{ game.event_second_player }}</v-col>
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
                        class="rounded-xl bg-grey-lighten-5 ma-3"
                        v-for="game in liveGames"
                        :key="game.event_key"
                      >
                        <!-- <div class="game.event_live === '1'">
                          <div
                          class=""
                          v-for="(set, setIndex) in game.pointbypoint"
                          :key="setIndex"
                          >
                          <div
                          class=""
                          v-for="(pointByPoint, pointIndex) in set.points"
                          :key="pointIndex"
                          > -->
                        <!-- Header Scores Results -->
                        <ScoresHeaderResults :game="game">
                        </ScoresHeaderResults>
                        <v-row class="bg-blue-darken-2 ma-1">
                          <v-col>{{ game.event_first_player }}</v-col>
                          <v-col>{{
                            game.event_game_result.slice(0, 2)
                          }}</v-col>
                          <!-- <v-col>Score {{ pointByPoint.score }}</v-col> -->

                          <v-col>3</v-col>
                          <v-col>4</v-col>
                          <v-col>5</v-col>
                          <v-col>Final</v-col>
                          <!-- <v-col>{{ game.event_serve }}</v-col>  -->
                          <!-- ! Call above useful for court view -->
                          <v-btn @click="addMyGames(game)"> Add MyGames </v-btn>
                        </v-row>

                        <v-row class="rounded-b-xl bg-blue-darken-2 ma-1">
                          <v-col>{{ game.event_second_player }}</v-col>
                          <v-col>{{
                            game.event_game_result.slice(4, 7)
                          }}</v-col>
                          <v-col>1</v-col>
                          <v-col>2</v-col>
                          <v-col>3</v-col>
                          <v-col>4</v-col>
                          <v-col>5</v-col>
                          <v-col>Final</v-col>
                        </v-row>
                        <!-- </div>
                          </div>
                        </div> -->
                      </v-card>
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
              class="rounded-xl bg-grey-lighten-4 ma-1 pa-4"
              elevation="3"
            >
              <div class="text-blue-900 font-bold">
                <v-card-title class="ml-2 my-1 text-h6">
                  Last Match
                </v-card-title>
              </div>
              <v-row
                v-for="lastMatch in liveGames.slice(0, 4)"
                :key="lastMatch.event_key"
                class="ml-3 my-3"
              >
                <v-col
                  >{{ lastMatch.event_first_player }} vs
                  {{ lastMatch.event_second_player }}</v-col
                >
              </v-row>
            </v-card>

            <div class="my-5">
              <!-- Players -->
              <v-card
                class="rounded-xl bg-grey-lighten-4 ma-1 pa-4"
                elevation="3"
              >
                <div class="text-blue-900 font-bold">
                  <v-card-title class="ml-2 my-1 text-h6">
                    Players
                  </v-card-title>
                </div>
                <!-- Players -->

                <!-- See More Players -->
                <v-row
                  v-for="player in renderPlayers.slice(0, 2)"
                  :key="player.player_key"
                  class="ml-3 my-3"
                >
                  <v-col
                    >{{ player.player_name }}
                    <ProfileStar @click="addFavoritePlayer(player)"></ProfileStar
                  ></v-col>
                </v-row>

                <v-col cols="9">
                  <v-btn
                    block
                    rounded="xl"
                    size="large"
                    @click="showAllPlayers"
                    >{{
                      visiblePlayers
                        ? "Show Initial Players"
                        : "Show All Players"
                    }}</v-btn
                  >
                </v-col>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ScoresHeaderResults from "@/components/ScoresHeaderResults.vue";
import ProfileStar from "@/assets/ProfileStar.svg";
import { useGameStore } from "@/stores/games";

export default {
  components: {
    NavBar,
    ScoresHeaderResults,
    ProfileStar,
  },
  props: { game: Object },
  data() {
    return {
      store: useGameStore(),
      myGames: [],
      listPlayers: [],
      visiblePlayers: false,
      isLoading: true,
    };
  },
  created() {
    console.log(this.liveGames);

    this.store.fetchLiveScores();
    this.store.fetchPlayers();
    this.myGames = this.store.getMyGames;
  },
  methods: {
    addMyGames(game) {
      this.store.addMyGames(game);
    },
    removeMyGames(game) {
      this.store.removeMyGames(game);
    },

    getSetResult(game, setNumber) {
      console.log(game, setNumber);
    },
    getLiveScore(game) {
      console.log(game);
    },
    showAllPlayers() {
      console.log("Displaying All Players");
    },
    addFavoritePlayer(player) {
      console.log("Favorite Player Added: ", player.player_name);
    },
  },
  computed: {
    liveGames() {
      return this.store.getLiveScore;
    },
    renderPlayers() {
      return this.store.getPlayers;
    },
  },
};
</script>
