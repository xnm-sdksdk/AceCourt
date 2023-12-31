<template>
  <nav class="bg-white shadow-md p-4" v-if="isLandingPage">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <RouterLink :to="{name: 'home'}">

          <h1>Ace Court</h1>
        </RouterLink>
      </div>
      <div class="flex items-center space-x-4">
        <RouterLink :to="{ name: 'login' }">
          <button
            class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            Login
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'signup' }">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Sign Up
          </button>
        </RouterLink>
      </div>
    </div>
  </nav>

  <nav v-else-if="!isLandingPage">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <RouterLink :to="{name: 'home'}">

          <h1>Ace Court</h1>
        </RouterLink>
      </div>
      <div class="flex items-center space-x-4" v-if="!isUserLoggedIn">
        <RouterLink :to="{ name: 'login' }">
          <button
            class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            Login
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'signup' }">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Sign Up
          </button>
        </RouterLink>
      </div>
      <div v-else>
        <RouterLink :to="{ name: 'profile' }">
          <img src="@/assets/profile.svg" alt="">
        </RouterLink>
      </div>
    </div>
  </nav>

  <nav v-else-if="isProfilePage">
  asdasd
  </nav>
</template>

<script>
import { useUserStore } from '../stores/user';
export default {
  data() {
    return {
      store: useUserStore()
    }
  },

  computed: {
    isLandingPage() {
      return this.$route.name==="landingpage" 
    },

    isUserLoggedIn() {
      return this.store.getLoggedUser;
    },

    isProfilePage(){
      return this.$route.name==="profile"
    }
  },
};
</script>

<style scoped>
h1 {
  font-family: "Karla", sans-serif;
  font-weight: 1000;
  font-style: italic;
  color: #0f3972;
  font-size: 20pt;
}
</style>
