<template>
  <NavBar></NavBar>
  <v-container>
    <!-- Header Section -->
    <v-row>
      <v-col>
        <h1 class="text-3xl font-bold mb-4">Draws</h1>
      </v-col>
      <v-col class="text-right">
        <button
          class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100"
          @click="goBack"
        >
          <img src="@/assets/back.svg" alt="" />
          Back
        </button>
      </v-col>
    </v-row>
    <!-- Select Section -->
    <v-row>
      <v-col>
        <v-select
          v-model="selectedOption"
          :items="[
            '1/64 Finals',
            '1/32 Finals',
            '1/16 Finals',
            '1/8 Finals',
            'Quarter-Finals',
            'Semi-Finals',
            'Final',
          ]"
          label="Round:"
          full-width
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
        <thead>
          <th rowspan="10">{{ selectedOption }}</th>
        </thead>
        <tbody>
          <tr>
            <v-card
              v-for="game in filteredGames"
              :key="game.event_key"
              class="rounded-xl bg-grey-lighten-5 ma-3"
            >
              <v-row class="rounded-xl bg-grey-lighten-5 ma-3">
                <v-col>{{ game.event_first_player }}</v-col>
                <v-col v-for="(score) in game.scores" :key="score.set">
                  <div v-html="formatScore(score.score_first)"></div>
                </v-col>
              </v-row>

              <v-row class="rounded-xl bg-grey-lighten-5 ma-3">
                <v-col>{{ game.event_second_player }}</v-col>
                <v-col v-for="score in game.scores" :key="score.set">
                  <div v-html="formatScore(score.score_second)"></div>
                </v-col>
              </v-row>
            </v-card>
          </tr>
        </tbody>
      </v-table>
      </v-col>
      <v-col>
        <v-table>
        <thead>
          <th rowspan="10">{{ selectedOption }}</th>
        </thead>
        <tbody>
          <tr>
            <v-card
              v-for="game in filteredGames"
              :key="game.event_key"
              class="rounded-xl bg-grey-lighten-5 ma-3"
            >
              <v-row class="rounded-xl bg-grey-lighten-5 ma-3">
                <v-col>{{ game.event_first_player }}</v-col>
                <v-col v-for="(score) in game.scores" :key="score.set">
                  <div v-html="formatScore(score.score_first)"></div>
                </v-col>
              </v-row>

              <v-row class="rounded-xl bg-grey-lighten-5 ma-3">
                <v-col>{{ game.event_second_player }}</v-col>
                <v-col v-for="score in game.scores" :key="score.set">
                  <div v-html="formatScore(score.score_second)"></div>
                </v-col>
              </v-row>
            </v-card>
          </tr>
        </tbody>
      </v-table>
      </v-col>
      <v-col>
        <v-table>
        <thead>
          <th rowspan="10">{{ selectedOption }}</th>
        </thead>
        <tbody>
          <tr>
            <v-card
              v-for="game in filteredGames"
              :key="game.event_key"
              class="rounded-xl bg-grey-lighten-5 ma-3"
            >
              <v-row class="rounded-xl bg-grey-lighten-5 ma-3">
                <v-col>{{ game.event_first_player }}</v-col>
                <v-col v-for="(score) in game.scores" :key="score.set">
                  <div v-html="formatScore(score.score_first)"></div>
                </v-col>
              </v-row>

              <v-row class="rounded-xl bg-grey-lighten-5 ma-3">
                <v-col>{{ game.event_second_player }}</v-col>
                <v-col v-for="score in game.scores" :key="score.set">
                  <div v-html="formatScore(score.score_second)"></div>
                </v-col>
              </v-row>
            </v-card>
          </tr>
        </tbody>
      </v-table>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useGameStore } from "@/stores/games";
export default {
  components: {
    NavBar,
  },

  data() {
    return {
      gameStore: useGameStore(),
      selectedOption: "Semi-Final",
    };
  },

  created() {
    this.gameStore.fetchFixtures();
    console.log(this.getFixtures);
  },

  computed: {
    getFixtures() {
      return this.gameStore.getFixtures;
    },

    filteredGames() {
      console.log("Selected Option:", this.selectedOption);
      switch (this.selectedOption) {
        case "1/64 Finals":
          return this.getFixtures.filter(
            (game) => game.tournament_round === "Australian Open - 1/64-finals"
          );
        case "1/32 Finals":
          return this.getFixtures.filter(
            (game) => game.tournament_round === "Australian Open - 1/32-finals"
          );
        case "1/16 Finals":
          return this.getFixtures.filter(
            (game) => game.tournament_round === "Australian Open - 1/16-finals"
          );
        case "1/8 Finals":
          return this.getFixtures.filter(
            (game) => game.tournament_round === "Australian Open - 1/8-finals"
          );
        case "Quarter-Finals":
          return this.getFixtures.filter(
            (game) => game.tournament_round === "Australian Open - Quarter-finals"
          );
        case "Semi-Finals":
          return this.getFixtures.filter(
            (game) => game.tournament_round === "Australian Open - Semi-finals"
          );
        case "Final":
          return this.getFixtures.filter(
            (game) => game.tournament_round === "Australian Open - Final");
        default:
          return this.getFixtures;
      }
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    formatScore(score) {
      const number = score.split(".");
      if (number[1]) {
        return `${number[0]}<sup>${number[1]}</sup>`;
      } else {
        return number[0];
      }
    },

    formatFinalResult(result){
      const score=result.split(" - ")
      if (score[1]) {
        return `${number[0]}<sup>${number[1]}</sup>`;
      } else {
        return number[0];
      }
    }
  },
};
</script>

<style></style>
