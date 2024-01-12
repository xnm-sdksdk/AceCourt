<template>
  <v-row class="rounded-t-xl bg-blue-lighten-5 ma-1" v-if="game">
    <div class="flex text-blue-900">
      <v-col cols="8">{{ game.tournament_round }}</v-col>
      <v-col cols="2">1st</v-col>
      <v-col cols="2">2nd</v-col>
      <v-col cols="2">3rd</v-col>
      <v-col cols="2">4th</v-col>
      <v-col cols="2">5th</v-col>
      <v-col cols="3">
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
