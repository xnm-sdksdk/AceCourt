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
        </v-slide-group>
      </v-sheet>
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
      options: [1, 2, 3],
      selectedOption: null,
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
