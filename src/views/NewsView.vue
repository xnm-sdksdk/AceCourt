<template>
  <NavBar></NavBar>
  <v-container class="container mx-auto p-4">
    <v-row>
      <!-- Coluna para o texto (ocupando 3 colunas em telas médias e grandes) -->
      <v-col cols="12" md="3">
        <h1 class="text-5xl font-bold mb-4">
          Discover Australian Open Like Never Before
        </h1>

        <p class="text-lg mb-4">
          Welcome to Ace Court, your gateway to an immersive tennis
          experience. Get real-time updates, personalize your favorites, stay
          informed with updated news, and explore player rankings—all in one
          place. Elevate your love for tennis with us.
        </p>

        <RouterLink :to="{ name: 'home' }">
          <button
            class="text-white px-4 py-2 rounded-full"
            style="letter-spacing: 0.15em"
          >
            Start
          </button>
        </RouterLink>
      </v-col>

      <!-- Coluna para a imagem (ocupando 9 colunas em telas médias e grandes) -->
      <v-col cols="12" md="9">
        <img
          src="../assets/newsHeader.svg"
          alt="Imagem"
          class="w-full h-auto"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  // setup() {},
};
</script>

<style>
h1 {
  font-size: 24pt;
  color: #008BCC;
  font-family: "Karla ExtraBold", sans-serif;
}

h2 {
  font-size: 16pt;
}

p {
  font-size: 12pt;
  font-family: "Karla ExtraLight", sans-serif;
}
.small-image {
  max-width: 100%;
  width: 50%;
  height: auto;
  max-height: 500px;
}

.small-image2 {
  max-width: 100%;
  width: 50%;
  height: auto;
  max-height: 500px;
  border-radius: 12px;
}
</style>
