<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <!-- Header Section -->
      <v-row>
        <v-col>
          <h1 class="text-3xl font-bold mb-4">Ranking</h1>
        </v-col>
        <v-col class="text-right" cols="1">
          <button
            class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100"
            @click="goBack"
          >
            <img src="../assets/back.svg" alt="" />
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
              <tr
                v-for="stand in filteredStandings"
                :key="stand.player_key"
                style="cursor: pointer"
              >
                <td>{{ stand.place }}</td>
                <td
                  @click="
                    seePlayer(stand.player_key, stand.place, stand.points)
                  "
                >
                  {{ stand.player }}
                </td>
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
import { useGameStore } from "@/stores/games.js";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: useGameStore(),
      selectedOption: "Ranking",
    };
  },

  created() {
    this.store.fetchStandings();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    seePlayer(playerKey) {
      this.$router.push({ name: "players", params: { id: playerKey } });
    },
  },

  computed: {
    getStandings() {
      return this.store.getStandings;
    },

    filteredStandings() {
      switch (this.selectedOption) {
        case "Ranking":
          return this.getStandings;
        case "Country":
          // Sort by Country Name
          return this.getStandings
            .slice()
            .sort((a, b) => a.country.localeCompare(b.country));
        case "A-Z":
          // Sort by Name (A-Z)
          return this.getStandings
            .slice()
            .sort((a, b) => a.player.localeCompare(b.player));
        case "Z-A":
          // Sort by Name (Z-A)
          return this.getStandings
            .slice()
            .sort((a, b) => b.player.localeCompare(a.player));
        default:
          return this.getStandings;
      }
    },
  },
};
</script>

<style scoped></style>
