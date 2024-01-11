<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <v-main>
        <div class="font-bold">
          <h1>My Profile</h1>
        </div>
        <div class="ma-3 pa-3">
          <ProfileButtons></ProfileButtons>
        </div>
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center align-center">
            <v-col cols="11" class="">
              <v-card
                class="rounded-lg bg-grey-lighten-5"
                elevation="3"
                height="300"
              >
                <v-row class="ml-5 my-5">
                  <v-col cols="3" class="my-5 m-5">
                    <v-img
                      :src=getlogUser.image
                      alt="Highlight-Player-Image"
                      width="180px"
                      height="180px"
                      cover
                      class="rounded-circle"
                    ></v-img>
                  </v-col>

                  <v-col cols="3" class="text-slate-700">
                    <v-card-subtitle class="m-1 text-body-2"
                      >Name</v-card-subtitle
                    >
                    <v-card-title class="my-2 text-body-1"
                      >{{ getlogUser.name }}</v-card-title
                    >
                    <v-card-subtitle class="m-1 text-body-2"
                      >E-Mail</v-card-subtitle
                    >
                    <v-card-title class="my-2 text-body-1"
                      >{{getlogUser.email}}</v-card-title
                    >
                    <v-card-subtitle class="m-1 text-body-2"
                      >Password</v-card-subtitle
                    >
                    <v-card-title class="my-2 text-body-1"
                      >{{ hideCharacters(getlogUser.password) }}</v-card-title
                    >
                  </v-col>
                  <v-col cols="5" class="m-1">
                    <div class="text-slate-700 text-left">
                      <v-card-subtitle class="text-slate-700"
                        >Bio</v-card-subtitle
                      >
                      <v-card-text class="ml-3 max-w-md"
                        >{{ getlogUser.bio }}</v-card-text
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="flex flex-row m-3 px-2">
          <div
            class="bg-blue-lighten-5 rounded-xl mx-3 pa-3 max-w-xs justify-center align-center"
          >
            <button class="justify-center align-center text-blue-900">Save</button>
          </div>
          <div
            class="bg-blue-lighten-5 rounded-xl pa-3 max-w-xs justify-center align-center"
          >
            <button class="justify-center align-center text-blue-900" @click="logout">
              Logout
            </button>
          </div>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProfileButtons from "@/components/ProfileButtons.vue";
import { useUserStore } from "../stores/user.js";
export default {
  components: {
    NavBar,
    ProfileButtons,
  },
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  computed: {
    getlogUser() {
      console.log(this.userStore.getLoggedUser.image);
      return this.userStore.getLoggedUser 
    }
  },

  methods: {
    logout() {
      this.userStore.logout
      this.$router.push({name:"landingpage"})
    },
    hideCharacters(text) {
      return text.replace(/./g, '*');
    },
  },
};
</script>

<style></style>
