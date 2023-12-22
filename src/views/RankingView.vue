<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <!-- Header Section -->
      <v-row>
        <v-col>
          <h1 class="text-3xl font-bold mb-4">
            Ranking
          </h1>
        </v-col>
        <v-col class="text-right">
          <button
            class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100"
            @click="goBack"
          >
            <img src="@/assets/back.svg" alt="">
            Back
          </button>
        </v-col>
      </v-row>

      <!-- Select Section -->
      <v-row>
        <v-col>
          <v-select
            v-model="selectedOption"
            :items="['Ranking', 'Country', 'A-Z', 'Z-A']"
            label="Filter By:"
            full-width
          ></v-select>
        </v-col>
      </v-row>

      <!-- Table Section -->
      <v-row>
        <v-col>
          <v-table fixed-header height="570px">
            <thead>
              <tr>
                <th class="text-left">Position</th>
                <th class="text-left">Name</th>
                <th class="text-left">Nationality</th>
                <th class="text-left">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="stand in filteredStandings" :key="stand.player">
                <td>{{ stand.place }}</td>
                <td>{{ stand.player }}</td>
                <td>{{ stand.country }}</td>
                <td>{{ stand.points }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useGameStore } from "@/stores/tennis.js";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: useGameStore(),
      standings: [],
      selectedOption: 'Ranking'
    };
  },

  created() {
    this.store.fetchStandings();
    this.standings = this.store.getStandings || [];
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },

  computed: {
    filteredStandings() {
      switch (this.selectedOption) {
        case 'Ranking':
          return this.standings;
        case 'Country':
          // Filtra por ordem alfabética do país
          return this.standings.slice().sort((a, b) => a.country.localeCompare(b.country));
        case 'A-Z':
          // Filtra por ordem alfabética do nome (A-Z)
          return this.standings.slice().sort((a, b) => a.player.localeCompare(b.player));
        case 'Z-A':
          // Filtra por ordem alfabética do nome (Z-A)
          return this.standings.slice().sort((a, b) => b.player.localeCompare(a.player));
        default:
          return this.standings;
      }
    },
  },

  watch: {
    selectedOption() {
    },
  },
};
</script>

<style scoped>
</style>
