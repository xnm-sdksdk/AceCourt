<template>
  <v-app>
    <v-container style="display: flex;flex-direction: row;">
      <!-- Left Containers -->
      <v-row style="display: flex;flex-direction: column;">
        <v-col cols="4">
            Final
        </v-col>
        <v-col cols="4">
            Container 2
        </v-col>
        <v-col cols="4">
            Container 3
        </v-col>
      </v-row>

      <!-- Right Container -->
      <v-col cols="4">
        <v-card>
          <v-card-title>Container 4</v-card-title>
          <!-- Seu conteúdo aqui -->
        </v-card>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { useTennisStore } from '../stores/tennis';

export default {
  data() {
    return {
      store: useTennisStore(),
      fixtures:[]
    }
  },
  created () {
    this.store.fetchFixtures()
    this.fixtures=this.store.getFixtures;
    console.log(this.fixtures);
  },
}
</script>

<style>

</style>