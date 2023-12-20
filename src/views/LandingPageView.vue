<template>
  <div>
    <NavBar></NavBar>
    <main>
      <v-container class="mt-5">
        <v-row>
          <v-col cols="12" md="6" class="align-self-center">
            <!-- Title -->
            <h1 class="text-5xl font-bold mb-4">
              Discover Australian Open Like Never Before
            </h1>

            <!-- Description -->
            <p class="text-lg mb-4">
              Welcome to Ace Court, your gateway to an immersive tennis
              experience. Get real-time updates, personalize your favorites,
              stay informed with updated news, and explore player rankings—all
              in one place. Elevate your love for tennis with us.
            </p>

            <!-- Start Button -->
            <RouterLink :to="{ name: 'signup' }">
              <button
                class="text-white px-4 py-2 rounded-full"
                style="letter-spacing: 0.15em"
              >
                Start
              </button>
            </RouterLink>
          </v-col>

          <!-- Image -->
          <v-col cols="12" md="6">
            <img
              src="@/assets/HeroImage.svg"
              alt="Imagem"
              class="w-full h-auto small-image"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-5" style="background-color: #efefef">
        <v-row>
          <v-col cols="12" md="4" v-for="index in 3" :key="index">
            <v-card>
              <!--Icon-->
              <img
                src="../assets/liveGames.svg"
                class="icon-image"
                style="max-height: 75px"
              />

              <!-- Title -->
              <v-card-title class="mt-0">Real-Time Updates</v-card-title>

              <!-- Description -->
              <v-card-text>
                Get instant updates on match outcomes, scores, and key moments
                as they happen on the court.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
h1 {
  font-size: 30pt;
  color: #0f3972;
}

p {
  font-size: 14pt;
}
.small-image {
  max-width: 100%;
  height: auto;
  max-height: 500px;
}

button {
  background-color: #a9dc3c;
  transition: background-color 0.5s ease-out;
}

button:hover {
  background-color: #008bcc;
  transition: background-color 0.5s ease-out;
}
.icon-image {
  width: 100%;
  height: auto;
}
</style>
