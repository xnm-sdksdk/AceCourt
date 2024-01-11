<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <v-main class="d-flex justify-center align-start flex-column">
        <div class="font-bold">
          <h1>My Profile</h1>
        </div>
        <div class="ma-3 pa-3">
          <ProfileButtons></ProfileButtons>
        </div>
        <div class="container mx-auto flex justify-between items-center py-4">
          <v-row class="justify-center align-center">
            <v-col cols="11" class="text-center">
              <v-card class="rounded-lg bg-grey-lighten-5" elevation="3">
                <v-row v-for="(trophy, index) in getTrophies" :key="index" class="ml-15 my-15">
                  <!-- First Row -->
                  <div class="ml-15 my-15" v-if="index<=3">
                    <v-col cols="3">
                      <div class="w-40">
                        <!-- Hit 5 Games in a row -->
                        <v-img :src="trophy.image"></v-img>
                        <v-card-text>{{trophy.title}}</v-card-text>
                      </div>
                    </v-col>
                  </div>
                  <v-row class="ml-15 my-15" v-else-if="index<=7">
                    <v-col cols="3">
                      <div class="w-40">
                        <!-- Hit 5 Games in a row -->
                        <v-img :src="trophy.image"></v-img>
                        <v-card-text>{{trophy.title}}</v-card-text>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="ml-15 my-15" v-else-if="index<=11">
                    <v-col cols="3">
                      <div class="w-40">
                        <!-- Hit 5 Games in a row -->
                        <v-img :src="trophy.image"></v-img>
                        <v-card-text>{{trophy.title}}</v-card-text>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="ml-15 my-15" v-else-if="index<=15">
                    <v-col cols="3">
                      <div class="w-40">
                        <!-- Hit 5 Games in a row -->
                        <v-img :src="trophy.image"></v-img>
                        <v-card-text>{{trophy.title}}</v-card-text>
                      </div>
                    </v-col>
                  </v-row>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useUserStore } from '../stores/user';
export default{
  components: {
    NavBar,
  },

  data() {
    return {
      userStore: useUserStore()
    }
  },

  computed: {
    getTrophies() {
      console.log(this.userStore.getUserTrophies);
      return this.userStore.getUserTrophies
    }
  },
}
</script>

<style></style>
