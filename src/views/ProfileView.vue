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
        <v-row class="justify-center align-center">
          <v-col cols="11">
            <v-card class="rounded-lg bg-grey-lighten-5" elevation="3" height="300">
              <v-row class="ml-5 my-5">
                <v-col cols="3" class="my-5 m-5">
                  <img
                    :src="getlogUser.image"
                    alt="Highlight-Player-Image"
                    width="180px"
                    height="180px"
                    cover
                    class="rounded-circle"
                  >
                </v-col>

                <v-col cols="3" class="text-slate-700">
                  <v-card-subtitle class="m-1 text-body-2">Name</v-card-subtitle>
                  <v-card-title class="my-2 text-body-1">
                    <div v-if="editMode">
                      <v-text-field v-model="editedUser.name"></v-text-field>
                    </div>
          
                    <div v-else>
                      {{ getlogUser.name }}
                    </div>
                  </v-card-title>

                  <v-card-subtitle class="m-1 text-body-2">Email</v-card-subtitle>
                  <v-card-title class="my-2 text-body-1">
                    <div v-if="editMode">
                      <v-text-field v-model="editedUser.email"></v-text-field>
                    </div>
          
                    <div v-else>
                      {{ getlogUser.email}}
                    </div>
                  </v-card-title>

                  <v-card-subtitle class="m-1 text-body-2">Password</v-card-subtitle>
                  <v-card-title class="my-2 text-body-1">
                    <div v-if="editMode">
                      <v-text-field v-model="editedUser.password"></v-text-field>
                    </div>
                    <div v-else>
                      {{ hideCharacters(getlogUser.password) }}
                    </div>
                  </v-card-title>
                </v-col>

                <v-col cols="5" class="m-1">
                  <div class="text-slate-700 text-left">
                    <v-card-subtitle class="text-slate-700">Description</v-card-subtitle>
                    <v-card-text class="ml-3 max-w-md">
                      <template v-if="editMode">
                        <v-textarea v-model="editedUser.bio"></v-textarea>
                      </template>
                      <template v-else>
                        {{ getlogUser.bio }}
                      </template>
                    </v-card-text>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <div class="flex flex-row m-3 px-2">
          <div class="bg-blue-lighten-5 rounded-xl mx-3 pa-3 max-w-xs justify-center align-center">
            <template v-if="!editMode">
              <button class="justify-center align-center text-blue-900" @click="toggleEditMode">Edit</button>
            </template>
            <template v-else>
              <button class="justify-center align-center text-blue-900" @click="saveChanges">Save</button>
            </template>
          </div>
          <div class="bg-blue-lighten-5 rounded-xl pa-3 max-w-xs justify-center align-center">
            <button class="justify-center align-center text-blue-900" @click="logout">Logout</button>
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
      editMode: false,
      editedUser: {
        name: "",
        email: "",
        password: "",
        bio: "",
      },
    };
  },
  computed: {
    getlogUser() {
      console.log(this.userStore.getLoggedUser.image);
      return this.userStore.getLoggedUser;
    },
  },
  methods: {
    logout() {
      this.userStore.logout;
      this.$router.push({ name: "landingpage" });
    },
    hideCharacters(text) {
      return text.replace(/./g, "*");
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
      this.editedUser = { ...this.getlogUser };
    },
    saveChanges() {
      this.userStore.updateUserProfile(this.editedUser);
      console.log(this.userStore.loggedUser.trophies)
      this.editMode = false;
    },
  },
};
</script>

<style></style>
