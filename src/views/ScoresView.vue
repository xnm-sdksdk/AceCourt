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
                    <ScoresHeaderResults
                      :game="game"
                      @remove-my-games="removeMyGames"
                      :inLiveGames="inLiveGames"
                    ></ScoresHeaderResults>
                    <v-row class="bg-blue-darken-2 ma-1">
                      <v-col>{{ game.event_first_player }}</v-col>
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
                        <ScoresHeaderResults
                          :game="game"
                          @add-my-games="addMyGames"
                          :inLiveGames="inLiveGames"
                        >
                        </ScoresHeaderResults>
                        <v-row class="bg-blue-darken-2 ma-1">
                          <v-col cols="4" class="ml-3">{{
                            game.event_first_player
                          }}</v-col>

                          <v-col cols="1">3</v-col>
                          <v-col cols="1">4</v-col>
                          <v-col cols="1">5</v-col>
                          <v-col cols="1">{{
                            game.event_game_result.slice(0, 2)
                          }}</v-col>
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
                  cols="12"
                  v-else
                  v-for="lastMatch in lastMatches"
                  :key="lastMatch.event_key"
                >
                  <!-- Displaying players names -->
                  <router-link
                    :to="{ name: 'game', params: { id: lastMatch.event_key } }"
                  >
                    <v-col cols="12"
                      >{{ lastMatch.event_first_player }} vs
                      {{ lastMatch.event_second_player }} :
                      {{ lastMatch.event_final_result }}</v-col
                    >
                  </router-link>
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

                <!-- See More Players -->
                <div v-if="renderPlayers.length > 0">
                  <v-row
                    v-for="player in renderPlayers.slice(0, 5)"
                    :key="player.playerKey"
                    class="ml-3 my-3"
                  >
                    <v-col class="d-flex align-center"
                      >{{ player.playerName }}
                    </v-col>
                    <v-col
                      ><ProfileStar
                        @click="removeFav(player.playerKey)"
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
                </div>
                <div v-else class="flex justify-center items-center">
                  <br />
                  No Favorite Players.
                </div>
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
      listPlayers: [],
      visiblePlayers: false,
      isLoading: true,
      ongoingGames: false,
      inLiveGames: true,
    };
  },
  created() {
    this.store.fetchFixtures();
  },
  methods: {
    addMyGames(game) {
      //Add to my Games
      this.userStore.addMyGames(game);
      //Remove from Live Games
      this.store.removeLiveGames(game);
    },
    removeMyGames(game) {
      this.userStore.removeMyGames(game);
    },
    getLiveScore(game) {
      console.log(game);
    },
    showAllPlayers() {
      console.log("Displaying All Players");
    },
    removeFav(playerKey) {
      this.userStore.remFavorite(playerKey);
    },
  },
  computed: {
    liveGames() {
      if (this.userStore.isUserLogged) {
        // Get Fixtures
        const liveGames = this.store.getFixtures;

        // Get Logged User Games
        const myGames = this.userStore.getLoggedUser.myGames;

        // Filter Live games removing myGames
        const filteredGames = liveGames.filter((liveGame) => {
          // Verifique se o jogo ao vivo não está em myGames
          return !myGames.some((myGame) => myGame.event_key === liveGame.event_key);
        });

        console.log(filteredGames);
        return filteredGames;
      }
    },
    renderPlayers() {
      //Verifying if user have favorite players
      if (this.userStore.getLoggedUser.myPlayers.length > 0) {
        return this.userStore.getLoggedUser.myPlayers;
      } else {
        return [];
      }
    },
    lastMatches() {
      return this.liveGames.slice(
        this.liveGames.length - 5,
        this.liveGames.length
      );
    },
    myGames() {
      return this.userStore.getLoggedUser.myGames;
    },
  },
  // watch: {
  //   liveGames: {
  //     handler(newGames) {
  //       this.ongoingGames = newGames.some(
  //         (game) => game.event_status !== "Finished"
  //       );
  //     },
  //     immediate: true,
  //     deep: true,
  //   },
  // },
};
</script>
