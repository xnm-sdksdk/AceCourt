<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <!-- Header Section -->
      <v-row>
        <v-col>
          <h1>Ranking</h1>
        </v-col>
        <v-col class="text-right">
          <button
            style="letter-spacing: 0.15em"
            @click="goBack"
          >
            <img src="@/assets/arrowSelect.svg" alt="">
            Back
          </button>
        </v-col>
      </v-row>

      <!-- Select Section -->
      <v-row>
        <v-col>
          <v-select
            clearable
            label="Select"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            full-width
          ></v-select>
        </v-col>
      </v-row>

      <!-- Table Section -->
      <v-row>
        <v-col>
          <v-data-table
            :items="desserts"
            :headers="headers"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.position }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.nationality }}</td>
                <td>{{ item.wl }}</td>
                <td>{{ item.points }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import {useGameStore} from "@/stores/tennis.js"
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store:useGameStore(),
      players:[]
    };
  },

  created () {
    this.store.fetchPlayers();
    this.players = this.store.getPlayers || [];
    console.log(this.players);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>
