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
                    <router-link
                      :to="{
                        name: 'players',
                        params: { id: game.first_player_key },
                      }"
                    >
                      <v-img
                        :src="game.event_first_player_logo"
                        alt="First-Player-Game"
                        height="180px"
                        width="180px"
                        cover
                        class="rounded-circle"
                      ></v-img>
                    </router-link>

                    <!-- Second Player Image -->
                    <router-link
                      :to="{
                        name: 'players',
                        params: { id: game.second_player_key },
                      }"
                    >
                      <v-img
                        :src="game.event_second_player_logo"
                        alt="First-Player-Game"
                        height="180px"
                        width="180px"
                        cover
                        class="rounded-circle"
                      ></v-img>
                    </router-link>
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
                  height="150"
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
                    <v-col>{{}}</v-col>
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

                  <v-row class="d-flex align-center">
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-row class="d-flex align-center">
                            <v-col class="text-left">
                              <p>{{ chance }}%</p>
                            </v-col>
                            <v-col class="text-right">
                              <p>{{ 100 - chance }}%</p>
                            </v-col>
                          </v-row>
                          <v-row class="d-flex align-center">
                            <v-col>
                              <v-progress-linear
                                :style="{
                                  '--bar-color': '#A9DC3C',
                                  '--background-color': '#008BCC',
                                }"
                                :model-value="chance"
                                :height="20"
                                max-width="150"
                              ></v-progress-linear>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-row>

                  <!-- Second Line -->
                  <v-row justify="center">
                    <v-col>
                      <v-btn
                        @click="votePlayer('First Player')"
                        :disabled="endVote"
                        >Vote</v-btn
                      >
                    </v-col>
                    <v-col>
                      <v-btn
                        @click="votePlayer('Second Player')"
                        :disabled="endVote"
                        >Vote</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <!-- Statistics -->
          <v-row>
            <v-col cols="9">
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

                <v-row class="d-flex justify-centercenter">
                  <v-col cols="6">
                    <v-card-subtitle>{{
                      game.event_first_player
                    }}</v-card-subtitle>
                  </v-col>
                  <v-col cols="6">
                    <v-card-subtitle>{{
                      game.event_second_player
                    }}</v-card-subtitle>
                  </v-col>
                </v-row>

                <v-row class="d-flex justify-centercenter">
                  <v-col cols="3">
                    <v-card-subtitle>{{
                      this.addStatistic.secondPlayerServeLost
                    }}</v-card-subtitle>
                  </v-col>
                  <v-col cols="5">
                    <v-progress-linear
                      :style="{
                        '--bar-color': '#A9DC3C',
                        '--background-color': '#008BCC',
                      }"
                      :model-value="statBar"
                      :height="20"
                      max-width="150"
                    ></v-progress-linear>
                  </v-col>
                  <v-col cols="3">
                    <v-card-subtitle>{{
                      this.addStatistic.firstPlayerServeLost
                    }}</v-card-subtitle>
                  </v-col>
                </v-row>

                <v-row class="d-flex justify-centercenter">
                  <v-col cols="3">
                    <v-card-subtitle>{{
                      this.addStatistic.firstPlayerServeWinner
                    }}</v-card-subtitle>
                  </v-col>
                  <v-col cols="5">
                    <v-progress-linear
                      :style="{
                        '--bar-color': '#A9DC3C',
                        '--background-color': '#008BCC',
                      }"
                      :model-value="statBar"
                      :height="20"
                      max-width="150"
                    ></v-progress-linear>
                  </v-col>
                  <v-col cols="3">
                    <v-card-subtitle>{{
                      this.addStatistic.secondPlayerServeWinner
                    }}</v-card-subtitle>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-centercenter">
                  <v-col cols="3">
                    <v-card-subtitle>{{
                      this.addStatistic.firstPlayerScore
                    }}</v-card-subtitle>
                  </v-col>
                  <v-col cols="5">
                    <v-progress-linear
                      :style="{
                        '--bar-color': '#A9DC3C',
                        '--background-color': '#008BCC',
                      }"
                      :model-value="statBar"
                      :height="20"
                      max-width="150"
                    ></v-progress-linear>
                  </v-col>
                  <v-col cols="3">
                    <v-card-subtitle>{{
                      this.addStatistic.secondPlayerScore
                    }}</v-card-subtitle>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- Court -->
          <v-row class="justify-center align-center">
            <v-col>
              <div v-for="(points, index) in game.pointbypoint" :key="index">
                <div v-if="animationGame">
                  <v-card-title>{{ points.set_number }}</v-card-title>
                  <v-card-title class="d-flex justify-center">
                    <v-img
                      :src="game.event_first_player_logo"
                      width="80px"
                      height="80px"
                    ></v-img>
                    <p class="mr-5">{{ game.event_first_player }}</p>
                    {{ point.score }}
                    <p class="ml-5">{{ game.event_second_player }}</p>
                    <v-img
                      :src="game.event_second_player_logo"
                      width="80px"
                      height="80px"
                    ></v-img>
                  </v-card-title>
                  <v-card-subtitle
                    v-if="points.player_served === 'First Player'"
                  >
                    {{ game.event_first_player }} served
                  </v-card-subtitle>
                  <v-card-subtitle
                    v-else-if="points.player_served === 'Second Player'"
                  >
                    {{ game.event_second_player }} served
                  </v-card-subtitle>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <img src="../assets/court.svg" alt="Court" />
            </v-col>
          </v-row>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useGameStore } from "../stores/games";
import { useUserStore } from "../stores/user";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: useGameStore(),
      userStore: useUserStore(),
      game: null,
      chance: 50,
      statBar:40,
      endVote: false,
      animationGame: false,
      intervalId: null,
      currentPointIndex: 0,
      currentGameIndex: 0,
      currentPoints: null,
      statistic: [],
    };
  },
  created() {
    //Get Game Key as a number
    const gameKey = Number(this.$route.params.id);
    //Get Game
    this.game = this.store.getFixtures.find(
      (game) => game.event_key === gameKey
    );

    //Get players Rankings
    const firstPlayerRank = this.store.getStandings
      .filter((rank) => rank.player_key === this.game.first_player_key)
      .map((rank) => rank.place)[0];

    const secondPlayerRank = this.store.getStandings
      .filter((rank) => rank.player_key === this.game.second_player_key)
      .map((rank) => rank.place)[0];

    if (firstPlayerRank !== undefined && secondPlayerRank !== undefined) {
      this.chanceValue = this.generateChanceValue(
        firstPlayerRank,
        secondPlayerRank
      );
    } else {
      console.log("Alguns rankings não foram encontrados.");
    }

    //Check if user already vote in the game
    const checkGame = this.userStore.getUserVoteGames.find(
      (vote) => vote.gameKey == this.game.event_key
    );

    if (checkGame) {
      this.endVote = true;
    }

    //Check if user already have the badge
    if (this.userStore.isUserLogged) {
      this.userStore.addCheckVoteBadge();
      this.userStore.addCheckGameBadge();
    }

    //Check if game have statistics
    const findStats = this.store.getStatistic.find(
      (game) => game.gamekey == this.gamekey
    );

    if (findStats) {
      this.statistic = findStats;
    } else {
      this.statistic = [];
    }

    this.generateStatValue;
    console.log(this.game);
  },
  methods: {
    generateChanceValue(firstPlayerRank, secondPlayerRank) {
      const rankDifference = Math.abs(firstPlayerRank - secondPlayerRank);
      let lowerRankPlayer, higherRankPlayer;

      // See what are the higher ranking
      if (firstPlayerRank < secondPlayerRank) {
        lowerRankPlayer = this.game.first_player_key;
        higherRankPlayer = this.game.second_player_key;
      } else {
        lowerRankPlayer = this.game.second_player_key;
        higherRankPlayer = this.game.first_player_key;
      }

      if (rankDifference < 10) {
        // Generate a number between 50 and 54
        this.chance = Math.floor(Math.random() * 5) + 50;
      } else if (rankDifference < 30) {
        // Generate a number between 55 and 59
        this.chance = Math.floor(Math.random() * 5) + 55;
      } else if (rankDifference < 50) {
        // Generate a number between 60 and 64
        this.chance = Math.floor(Math.random() * 5) + 60;
      } else {
        // Generate a number between 60 and 65
        this.chance = Math.floor(Math.random() * 5) + 65;
      }

      if (this.game.first_player_key === lowerRankPlayer) {
        this.chance = 100 - this.chance;
      }
    },

    votePlayer(player) {
      //Get Game Key
      const gameKey = this.game.event_key;
      //Check if is logged
      if (!this.userStore.isUserLogged) {
        alert("To use this fixture you need to be logged!");
      } else {
        //Check if game is finished
        this.userStore.addVote(player, gameKey);
        this.endVote = true;

        if (player == "First Player") {
          this.chance++;
        } else {
          this.chance--;
        }
      }
    },
  },
  renderPoints() {
    this.intervalId = setInterval(() => {
      if (this.currentGameIndex < this.game.pointbypoint.length) {
        this.currentPoints =
          this.game.pointbypoint[this.currentGameIndex].points[
            this.currentPointIndex
          ];
        this.currentPointIndex++;

        if (
          this.currentPointIndex >=
          this.game.pointbypoint[this.currentGameIndex].points.length
        ) {
          this.currentGameIndex++;
          this.currentPointIndex = 0;
        }
      } else {
        clearInterval(this.intervalId);
      }
    }, 5000); // Intervalo de 5 segundos
  },
  //Statistics Animation
  StatsAnimation() {
    this.intervalId = setInterval(() => {
      for (const point of this.pointbypoint) {
        const points = point.points;
        this.firstPlayer = points;
        this.secondPlayer = points;
        this.animationGame = true;
        setTimeout(() => {
          this.animationGame = false;
        }, 3000);
      }
    }, 5000);
  },

  computed: {
    addStatistic() {
      //Compare the scores and count how many times the first player won
      const firstPlayerScore = this.game.scores.filter(
        (score) =>
          parseFloat(score.score_first) > parseFloat(score.score_second)
      ).length;

      //Compare the scores and count how many times the second player won
      const secondPlayerScore = this.game.scores.filter(
        (score) => score.score_second > score.score_first
      ).length;

      // Count how many times the serve_lost is "First Player"
      const firstPlayerServeLost = this.game.pointbypoint.filter(
        (point) => point.serve_lost === "First Player"
      ).length;

      // Count how many times the serve_lost is "Second Player"
      const secondPlayerServeLost = this.game.pointbypoint.filter(
        (point) => point.serve_lost === "Second Player"
      ).length;

      // Count how many times the serve_winner is "First Player"
      const firstPlayerServeWinner = this.game.pointbypoint.filter(
        (point) => point.serve_winner === "First Player"
      ).length;

      // Count how many times the serve_winner is "Second Player"
      const secondPlayerServeWinner = this.game.pointbypoint.filter(
        (point) => point.serve_winner === "Second Player"
      ).length;

      const statistics = {
        gamekey: this.game.event_key,
        firstPlayerScore: firstPlayerScore,
        secondPlayerScore: secondPlayerScore,
        firstPlayerServeLost: firstPlayerServeLost,
        secondPlayerServeLost: secondPlayerServeLost,
        firstPlayerServeWinner: firstPlayerServeWinner,
        secondPlayerServeWinner: secondPlayerServeWinner,
      };

      //Create the object with the statistics
      this.store.addStatistic(statistics);
      return statistics;
    },
  },
  beforeDestroy() {
    this.endResultAnimation();
  },
};
</script>

<style>
.v-progress-linear::before {
  background-color: var(--background-color);
}

.v-progress-linear__background,
.v-progress-linear__buffer {
  background-color: var(--bar-color);
}
</style>
