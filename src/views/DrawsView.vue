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
            '1st Round',
            '2nd Round',
            '3rd Round',
            '4th Round',
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
      <!-- <v-table>
        <thead>
          <th>1st Round</th>
          <th>2nd Round</th>
          <th>3rd Round</th>
        </thead>
        <tbody>
          <tr>
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
                <v-btn @click="addMyGames"> Add MyGames </v-btn>
              </v-row>

              <v-row class="rounded-b-xl bg-blue-darken-2 ma-1" I>
                <v-col>{{ game.event_second_player }}</v-col>
                <v-btn @click="accessGame">Access Game</v-btn>
              </v-row>
            </v-card>
          </tr>
        </tbody>
      </v-table> -->
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
      selectedOption: "1st Round",
    };
  },

  created() {
    this.gameStore.fetchFixtures();
  },

  computed: {
    getFixtures() {
      return this.gameStore.getFixtures;
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
