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
      games: [],
      selectedOption: "1st Round",
    };
  },

  created() {
    this.gameStore.fetchFixtures()
  },

  computed: {
    getFixtures() {
      return this.gameStore.getFixtures
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
