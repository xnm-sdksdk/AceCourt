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
                        <!-- Header Scores Results -->
                        <ScoresHeaderResults :game="game">
                        </ScoresHeaderResults>
                        <v-row class="bg-blue-darken-2 ma-1">
                          <v-col cols="4" class="ml-3">{{
                            game.event_first_player
                          }}</v-col>
                          <!-- <v-col
                            v-for="(set, setIndex) in game.pointbypoint"
                            :key="setIndex"
                            >{{ getFirstPlayerScore(game, set) }}
                          </v-col> -->
                          <!-- <v-col
                            v-for="(set, setIndex) in game.pointbypoint"
                            :key="setIndex"
                          >
                            <span>{{ getSecondPlayerScore(game, set) }}</span>
                          </v-col> -->
                          <!-- <v-col>{{
                          }}</v-col> -->
                          <!-- <v-col
                          >
                            <v-col
                              v-for="(point, pointIndex) in set.points"
                              :key="pointIndex"
                            >
                              <p v-if="game.event_status !== 'Finished'">
                                 {{ set.score }} 
                              </p>
                            </v-col>
                          </v-col> -->
                          <!-- <v-col>Score {{ pointByPoint.score }}</v-col> -->
                          <!-- <v-col
                            v-for="(set, setIndex) in game.pointbypoint"
                            :key="setIndex"
                          >
                            <v-col cols="1" v-if="set.set_number === 'Set 1'">
                              {{
                                set.points[set.points.length - 1].score.slice(
                                  0,
                                  2
                                )
                              }}</v-col
                            > -->
                          <v-col cols="1">2</v-col>
                          <v-col cols="1">3</v-col>
                          <v-col cols="1">4</v-col>
                          <v-col cols="1">5</v-col>
                          <v-col cols="1">{{
                            game.event_game_result.slice(0, 2)
                          }}</v-col>
                          <!-- </v-col> -->
                          <!-- <v-col>{{ game.event_serve }}</v-col>  -->
                          <!-- ! Call above useful for court view -->
                          <!-- <v-col cols="2">
                            <v-btn @click="addMyGames(game)">
                              Add MyGames
                            </v-btn>
                          </v-col> -->
                        </v-row>

                        <v-row class="rounded-b-xl bg-blue-darken-2 ma-1">
                          <v-col cols="4" class="ml-3">{{
                            game.event_second_player
                          }}</v-col>
                          <v-col cols="1">1</v-col>
                          <v-col cols="1">2</v-col>
                          <v-col cols="1">3</v-col>
                          <v-col cols="1">4</v-col>
                          <v-col cols="1">5</v-col>
                          <v-col cols="1">{{
                            game.event_game_result.slice(4, 7)
                          }}</v-col>
                        </v-row>
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
              <v-row class="ml-3 my-3">
                <v-col v-if="ongoingGames">
                  <p>Games ongoing...</p>
                </v-col>
                <v-col
                  v-else
                  v-for="lastMatch in lastMatches"
                  :key="lastMatch.event_key"
                >
                  <!-- Displaying players names -->
                  <v-col cols="9"
                    >{{ lastMatch.event_first_player }} vs
                    {{ lastMatch.event_second_player }}</v-col
                  >
                  <!-- Displaying final result -->
                  <v-col cols="3">{{ lastMatch.event_final_result }}</v-col>
                </v-col>
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
                  v-for="player in renderPlayers.slice(0, 5)"
                  :key="player.player_key"
                  class="ml-3 my-3"
                >
                  <v-col class="d-flex align-center"
                    >{{ player.player_name }}
                  </v-col>
                  <v-col
                    ><ProfileStar
                      @click="addFavoritePlayer(player)"
                    ></ProfileStar
                  ></v-col>
                </v-row>

                <v-col cols="9">
                  <div class="flex justify-center items-center">
                    <v-btn @click="showAllPlayers">{{
                      visiblePlayers
                        ? "Show Initial Players"
                        : "Show All Players"
                    }}</v-btn>
                  </div>
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
import { useUserStore } from "@/stores/user";

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
      userStore: useUserStore(),
      myGames: [],
      listPlayers: [],
      visiblePlayers: false,
      isLoading: true,
      ongoingGames: false,
    };
  },
  created() {
    console.log(this.liveGames);
    this.store.fetchFixtures();
    this.store.fetchPlayers();
    this.store.fetchFinishedGames();
    this.myGames = this.userStore.getMyGames;
  },
  methods: {
    addMyGames(game) {
      this.userStore.addMyGames(game);
    },
    removeMyGames(game) {
      this.userStore.removeMyGames(game);
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
    // getFirstPlayerScore(game, set) {
    //   return set.points[set.points.length - 1].score;
    // },
    // getSecondPlayerScore(game, set) {
    //   return set.points[set.points.length - 1].score;
    // },
  },
  computed: {
    liveGames() {
      return this.store.getFixtures;
    },
    renderPlayers() {
      return this.store.getPlayers;
    },
    finishedGames() {
      return this.store.getFinishedScore;
    },
    lastMatches() {
      return this.finishedGames.filter(
        (game) => game.event_status === "Finished"
      );
    },
  },
  watch: {
    liveGames: {
      handler(newGames) {
        this.ongoingGames = newGames.some(
          (game) => game.event_status !== "Finished"
        );
        // newGames.forEach((game) => {
        //   game.pointbypoint.forEach((set, setIndex) => {
        //     // Access the set scores and update UI as needed
        //     const firstPlayerScore = set.points[set.points.length - 1].score;
        //     const secondPlayerScore = set.points[set.points.length - 1].score;

        //     // Perform your logic or UI update here
        //     console.log(
        //       `Set ${
        //         setIndex + 1
        //       } - First Player Score: ${firstPlayerScore}, Second Player Score: ${secondPlayerScore}`
        //     );
        //   });
        // });
      },
      immediate: true,
      // deep: true,
    },
  },
};
</script>
