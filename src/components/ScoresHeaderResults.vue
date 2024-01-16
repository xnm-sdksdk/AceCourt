<template>
  <v-row class="rounded-t-xl bg-blue-lighten-5 ma-1" v-if="game">
    <div class="flex text-blue-900 max-w-xl">
      <router-link :to="{ name: 'game', params: { id: game.event_key } }">
        <v-col cols="8">{{ game.tournament_round }}</v-col>
      </router-link>
      <v-col cols="1" class="ml-4 px-1">1st</v-col>
      <v-col cols="1" class="ml-4 px-1">2nd</v-col>
      <v-col cols="1" class="ml-4 px-1">3rd</v-col>
      <v-col cols="1" class="ml-4 px-1">4th</v-col>
      <v-col cols="1" class="ml-4 px-1">5th</v-col>
      <v-col cols="1">
        <img src="../assets/Live.svg" alt="Live-Game" />
      </v-col>
      <v-col cols="1" @click="handleMyGames" v-if="inLiveGames">
        <img src="../assets/StarFill.svg" alt="Favorite-Game" />
      </v-col>
      <v-col @click="handleRemoveGames" v-else>
        <img src="../assets/Vector.svg" alt="Remove-My-Games" />
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  props: {
    game: Object,
    inLiveGames: Boolean,
  },
  methods: {
    handleMyGames() {
      this.$emit("add-my-games", this.game);
    },
    handleIcon() {
      this.$emit("add-remove-my-games");
    },
    handleRemoveGames() {
      this.$emit("remove-my-games", this.game);
    },
  },
};
</script>
