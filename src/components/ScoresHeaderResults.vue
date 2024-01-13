<template>
  <v-row class="rounded-t-xl bg-blue-lighten-5 ma-1" v-if="game">
    <div class="flex text-blue-900 max-w-xl">
      <v-col cols="6">{{ game.tournament_round }}</v-col>
      <v-col cols="1" class="ml-4 px-1">1st</v-col>
      <v-col cols="1" class="ml-4 px-1">2nd</v-col>
      <v-col cols="1" class="ml-4 px-1">3rd</v-col>
      <v-col cols="1" class="ml-4 px-1">4th</v-col>
      <v-col cols="1" class="ml-4 px-1">5th</v-col>
      <v-col cols="1">
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
