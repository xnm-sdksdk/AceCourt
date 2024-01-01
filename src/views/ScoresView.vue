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
              <v-card-title
                class="rounded-t-xl bg-grey-lighten-4 white--text ma-1 pa-3"
                >My Games</v-card-title
              >
              <v-card
                class="rounded-b-xl bg-grey-lighten-4 ma-1 pa-4"
                elevation="3"
              >
                <!-- Tournament Stage and Arena -->
                <div class="py-4">
                  <v-card-text>
                    <v-row>
                      <v-col>Australia Open - Quarter Finals</v-col>
                      <v-col>Rod Laver Arena</v-col>
                    </v-row>
                  </v-card-text>

                  <!-- Header First Game -->

                  <ScoresHeaderResults></ScoresHeaderResults>

                  <!-- First Player - First Game -->
                  <v-row
                    class="bg-blue-darken-2 ma-1 pa-1"
                    v-for="(game, index) in myGames"
                    :key="index"
                  >
                    <v-col>
                      {{ game.event_first_player }}
                    </v-col>
                    <!-- <div>{{ game.event_first_player }}</div> -->
                    <!-- <v-col>{{ game.pointbypoint.points.number_point }}</v-col> -->
                    <!-- <v-col>{{ getLiveScore(game) }}</v-col>-->
                    <v-col>{{ getSetResult(game, 1) }}</v-col>
                    <v-col>{{ getSetResult(game, 2) }}</v-col>
                    <v-col>{{}}</v-col>
                    <v-col>{{}}</v-col>
                    <v-col>{{}}</v-col>
                    <v-col>{{ game.event_final_result }}</v-col>
                  </v-row>
                </div>
              </v-card>
            </div>

            <!-- Live Games -->

            <v-row>
              <v-col col="9">
                <div class="py-4">
                  <v-card-title
                    class="rounded-t-xl bg-grey-lighten-4 white--text ma-1 pa-3"
                  >
                    Live Games
                  </v-card-title>
                  <v-card
                    class="rounded-b-xl bg-grey-lighten-4 ma-1 pa-4"
                    elevation="3"
                  >
                    <div class="py-4">
                      <v-card-text>
                        <v-row>
                          <v-col>Australia Open - Quarter Finals</v-col>
                          <v-col>Rod Laver Arena</v-col>
                        </v-row>
                      </v-card-text>
                      <!-- Fist Game Live Games -->
                      <ScoresHeaderResults></ScoresHeaderResults>

                      <v-row
                        v-for="game in liveGames"
                        :key="game.event_key"
                        class="bg-blue-darken-2 ma-1"
                      >
                        <v-col>{{ game.event_first_player }}</v-col>
                        <v-col>40</v-col>
                        <v-col>6</v-col>
                        <v-col>0</v-col>
                        <v-col></v-col>
                        <v-col></v-col>
                        <v-col></v-col>
                        <v-col>1</v-col>
                      </v-row>

                      <v-row
                        class="bg-blue-darken-2 ma-1 pa-1 rounded-b-xl"
                        v-for="(game, index) in liveGames"
                        :key="index"
                      >
                        <v-col>{{ game.event_second_player }}</v-col>
                        <v-col>40</v-col>
                        <v-col>6</v-col>
                        <v-col>0</v-col>
                        <v-col></v-col>
                        <v-col></v-col>
                        <v-col></v-col>
                        <v-col>1</v-col>
                      </v-row>
                    </div>
                  </v-card>
                </div>
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
      liveGames: [],
      myGames: [],
      isLoading: true,
    };
  },
  async created() {
    await this.fetch();
  },
  methods: {
    async fetch() {
      await this.store.fetchFixtures();
      this.liveGames = this.store.liveGames;
      this.myGames = this.store.getMyGames;
    },
    addMyGames(game) {
      this.store.addMyGames(game);
    },
    removeMyGames(game) {
      this.store.removeMyGames(game);
    },
    renderLiveGames() {
      this.liveGames = liveGames;
    },
    getSetResult(game, setNumber) {
      console.log(game, setNumber);
    },
    getLiveScore(game) {
      console.log(game);
    },
  },
  computed: {},
};
</script>

<style></style>
