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
                      {{ game.tournament_round }}
                    </v-card-title>
                  </div>
                  <!-- First Player Image -->
                  <div class="flex">
                    <v-img
                      :src="game.event_first_player_logo"
                      alt="First-Player-Game"
                      height="180px"
                      width="180px"
                      cover
                      class="rounded-circle"
                    ></v-img>

                    <!-- Second Player Image -->
                    <v-img
                      :src="game.event_second_player_logo"
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
                    <v-col></v-col>
                    <v-col>1st</v-col>
                    <v-col>2nd</v-col>
                    <v-col>3rd</v-col>
                    <v-col>Final</v-col>
                  </v-row>
                  <v-row>
                    <v-col>{{ game.event_first_player }}</v-col>
                    <v-col>6</v-col>
                    <v-col>6</v-col>
                    <v-col>6</v-col>
                    <v-col>3</v-col>
                  </v-row>
                  <v-row>
                    <v-col>{{ game.event_second_player }}</v-col>
                    <v-col>3</v-col>
                    <v-col>2</v-col>
                    <v-col>4</v-col>
                    <v-col>0</v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="justify-center align-center" align="center">
              <v-col cols="11">
                <v-card
                  class="rounded-lg bg-grey-lighten-5"
                  elevation="3"
                  height="200"
                >
                  <!-- First Line-->
                  <v-row>
                    <v-col>
                      <p>{{ game.event_first_player }}</p>
                    </v-col>

                    <v-col>
                      <p>{{ game.event_second_player }}</p>
                    </v-col>
                  </v-row>

                  <v-row align="center">
                    <v-col>
                      <v-progress-linear
                        v-if="game.probability_first_player"
                        :value="game.probability_first_player"
                        color="primary"
                        height="10"
                      ></v-progress-linear>
                    </v-col>

                    <v-col>
                      <v-progress-linear
                        v-if="game.probability_second_player"
                        :value="game.probability_second_player"
                        color="primary"
                        height="10"
                      ></v-progress-linear>
                    </v-col>
                  </v-row>

                  <!-- Second Line -->
                  <v-row justify="center">
                    <v-col>
                      <v-btn>Vote</v-btn>
                    </v-col>
                    <v-col>
                      <v-btn>Vote</v-btn>
                    </v-col>
                  </v-row>
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
      game: null,
    };
  },
  created() {
    // this.game=this.$route.params.id
    this.game = {
      event_key: 11920665,
      event_date: "2024-01-14",
      event_time: "05:30",
      event_first_player: "J. De Jong",
      first_player_key: 412,
      event_second_player: "P. Cachin",
      second_player_key: 414,
      event_final_result: "-",
      event_game_result: "-",
      event_serve: null,
      event_winner: null,
      event_status: "1",
      event_type_type: "Atp Singles",
      tournament_name: "ATP Australian Open",
      tournament_key: 1236,
      tournament_round: "ATP Australian Open - 1/64-finals",
      tournament_season: "2024",
      event_live: "0",
      event_first_player_logo:
        "https://api.api-tennis.com/logo-tennis/412_j-de-jong.jpg",
      event_second_player_logo:
        "https://api.api-tennis.com/logo-tennis/414_p-cachin.jpg",
      event_qualification: "False",
      pointbypoint: [],
      scores: [],
    };
    console.log(this.game);
  },
};
</script>

<style></style>
