<template>
  <NavBar></NavBar>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-3xl font-bold mb-4">Schedule</h1>
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
    <v-row>
      <v-sheet class="mx-auto" max-width="600">
        <v-slide-group v-model="selectedOption" show-arrows>
          <v-slide-group-item
            v-for="number in options"
            :key="number"
            v-slot="{ isSelected, toggle }"
          >
            <v-btn
              class="ma-2"
              rounded
              :color="isSelected ? 'primary' : undefined"
              @click="toggle"
            >
              Day {{ number }}
            </v-btn>
          </v-slide-group-item>

          <!-- Customizando a seta 'anterior' (prev) -->
          <template v-slot:prev="{ on }">
            <v-btn icon :on="on" color="#0F3972">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </template>

          <!-- Customizando a seta 'próxima' (next) -->
          <template v-slot:next="{ on }">
            <v-btn icon :on="on" color="#0F3972">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <tbody>
            <tr>
              <v-card
                v-for="game in filterByDay"
                :key="game.event_key"
                class="rounded-xl bg-grey-lighten-5 ma-3"
              >
                <v-row class="rounded-xl bg-grey-lighten-5 ma-3">
                  <v-col>{{ game.event_first_player }}</v-col>
                  <v-col v-for="score in game.scores" :key="score.set">
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
import { useGameStore } from "../stores/games";
export default {
  components: {
    NavBar,
  },

  data() {
    return {
      gameStore: useGameStore(),
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      selectedOption: 1,
    };
  },

  created() {
    this.gameStore.fetchFixtures();
  },

  computed: {
    getFixtures() {
      console.log(this.gameStore.getFixtures);
      return this.gameStore.getFixtures;
    },

    filterByDay() {
      switch (this.selectedOption) {
        case 1:
          console.log(this.getFixtures);
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-09"
          );
        case 2:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-10"
          );
        case 3:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-16"
          );
        case 4:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-17"
          );
        case 5:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-18"
          );
        case 6:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-19"
          );
        case 7:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-20"
          );
        case 8:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-21"
          );
        case 9:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-22"
          );
        case 10:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-22"
          );
        case 11:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-23"
          );
        case 12:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-24"
          );
        case 13:
          return this.getFixtures.filter(
            (fixture) => fixture.event_date === "2023-01-23"
          );
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

    formatFinalResult(result) {
      const score = result.split(" - ");
      if (score[1]) {
        return `${number[0]}<sup>${number[1]}</sup>`;
      } else {
        return number[0];
      }
    },
  },
};
</script>

<style></style>
