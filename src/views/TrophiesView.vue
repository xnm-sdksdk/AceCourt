<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <v-main class="d-flex justify-center align-start flex-column">
        <v-row class="justify-center align-center">
          <v-col cols="12" md="9" class="ma-3 pa-3">
            <ProfileButtons></ProfileButtons>
          </v-col>
          <v-col cols="12" md="9" class="text-center">
            <v-card class="rounded-lg bg-grey-lighten-5" elevation="3">
              <v-row>
                <v-col v-for="(trophy, index) in getTrophies" :key="index" cols="3" class="my-15">
                  <div class="w-40 mx-auto" v-if="trophy.isCompleted">
                    <img :src=trophy.image class="mx-auto" width="100%">
                    <v-card-text>{{ trophy.title }}</v-card-text>
                  </div>
                  <div class="w-40 mx-auto" v-else>
                    <img :src=trophy.image class="mx-auto" width="100%">
                    <v-card-text style="color:green">{{ trophy.title }}</v-card-text>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-container>
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ProfileButtons from "@/components/ProfileButtons.vue";
import { useUserStore } from "../stores/user";
export default {
  components: {
    NavBar,ProfileButtons
  },

  data() {
    return {
      userStore: useUserStore(),
    };
  },

  computed: {
    getTrophies() {
      //Sort trophies by completed
      this.userStore.getUserTrophies.sort((a, b) => {
        if (a.isCompleted && !b.isCompleted) return -1;
        if (!a.isCompleted && b.isCompleted) return 1;
        return 0;
      });
      //Return trophies
      return this.userStore.getUserTrophies;
    },

    trophiesPerRow() {
      return 4; 
    },
    
    trophyRows() {
      const trophies = this.getTrophies.slice(0, this.trophiesPerRow * 4); 
      const rows = [];
      for (let i = 0; i < trophies.length; i += this.trophiesPerRow) {
        rows.push(trophies.slice(i, i + this.trophiesPerRow));
      }
      return rows;
    },
  },
};
</script>

<style></style>