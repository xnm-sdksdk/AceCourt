<template>
  <v-row class="rounded-t-xl bg-blue-lighten-5 ma-1" v-if="game">
    <div class="flex text-blue-900">
      <v-col>{{ game.tournament_round }}</v-col>
      <v-col>1st</v-col>
      <v-col>2nd</v-col>
      <v-col>3rd</v-col>
      <v-col>4th</v-col>
      <v-col>5th</v-col>
      <v-col>
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
