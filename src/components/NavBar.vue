<template>
  <nav>
    <div class="container mx-auto flex justify-between items-center m-3">
      <div class="flex items-center">
        <RouterLink :to="{ name: 'home' }">
          <h1>Ace Court</h1>
        </RouterLink>
      </div>
      <div class="flex items-center space-x-4">
        <!-- Navbar para usuário logado -->
        <RouterLink :to="{ name: 'scores' }">
          <p>Scores</p>
        </RouterLink>
        <RouterLink :to="{ name: 'tournament' }">
          <p>Tournaments</p>
        </RouterLink>
        <RouterLink :to="{ name: 'news' }">
          <p>News</p>
        </RouterLink>
      </div>
      <div v-if="isUserLoggedIn">
        <!-- Botão para o perfil quando logado -->
        <RouterLink :to="{ name: 'profile' }">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 justify-center align-center"
          >
            Profile
          </button>
        </RouterLink>
      </div>
      <div v-else class="flex items-center space-x-4">
        <RouterLink :to="{ name: 'login' }">
          <button
            class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100 justify-center align-center"
          >
            Login
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'signup' }">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 justify-center align-center"
          >
            Sign Up
          </button>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "../stores/user";
export default {
  data() {
    return {
      store: useUserStore(),
      isTournamentsHover: false,
    };
  },

  computed: {
    isUserLoggedIn() {
      return this.store.isUserLogged;
    },
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

p {
  font-family: "Karla ExtraBold", sans-serif;
  color: #0f3972;
  font-size: 12pt;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.subnavbar {
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #001f3f; /* Cor de fundo da subnavbar */
  padding: 10px;
  border-radius: 4px;
}

.subnavbar a {
  color: #ffffff; /* Cor do texto na subnavbar */
  margin-right: 10px;
}

.subnavbar a:hover {
  text-decoration: underline;
}
</style>
