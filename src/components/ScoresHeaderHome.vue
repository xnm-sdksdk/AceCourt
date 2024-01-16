<template>
  <v-row class="rounded-t-xl ma-1" v-if="game">
    <div class="flex text-blue-900 font-bold mx-5">
      <router-link :to="{ name: 'game', params: { id: game.event_key } }">
        <v-col cols="12">{{ game.tournament_round }}</v-col>
      </router-link>
      <v-col cols="3">1st</v-col>
      <v-col cols="3">2nd</v-col>
      <v-col cols="3">3rd</v-col>
      <v-col cols="3">4th</v-col>
      <v-col cols="3">5th</v-col>
      <v-col cols="2">
        <img src="../assets/Live.svg" />
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  props: {
    game: Object,
  },
};
</script>
