<template>
  <NavBar></NavBar>
  <v-container class="container mx-auto p-4">
    <v-row>
      <!-- Coluna para o texto (ocupando 3 colunas em telas médias e grandes) -->
      <v-col cols="12" md="3">
        <h1 class="text-5xl font-bold mb-4 mx-3">
          Discover Australian Open Like Never Before
        </h1>

        <p class="flex text-lg mb-4 m-4 py-3 max-w-md">
          Welcome to Ace Court, your gateway to an immersive tennis experience.
          Get real-time updates, personalize your favorites, stay informed with
          updated news, and explore player rankings—all in one place. Elevate
          your love for tennis with us.
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
    <div class="my-5 py-5 justify-center align-center">
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://imgs.search.brave.com/6irUKBwEUV5qZ8DcT_SsyOtTR-WaDb_Gy6JM_r59K38/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW5kZXBlbmRl/bnQuY28udWsvMjAy/My8wOS8wOS8xOC8w/OS01NWFkMjI3MmE0/N2Y0MGZmOGNhMzY1/YWRmNjY5Y2NkMi5q/cGc_cXVhbGl0eT03/NSZ3aWR0aD02NDAm/Y3JvcD0zOjIsc21h/cnQmYXV0bz13ZWJw"
              height="200px"
              cover
            ></v-img>

            <v-card-title> Medvedev gets revenge </v-card-title>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://imgs.search.brave.com/6irUKBwEUV5qZ8DcT_SsyOtTR-WaDb_Gy6JM_r59K38/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW5kZXBlbmRl/bnQuY28udWsvMjAy/My8wOS8wOS8xOC8w/OS01NWFkMjI3MmE0/N2Y0MGZmOGNhMzY1/YWRmNjY5Y2NkMi5q/cGc_cXVhbGl0eT03/NSZ3aWR0aD02NDAm/Y3JvcD0zOjIsc21h/cnQmYXV0bz13ZWJw"
              height="200px"
              cover
            ></v-img>

            <v-card-title> Medvedev gets revenge </v-card-title>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://imgs.search.brave.com/6irUKBwEUV5qZ8DcT_SsyOtTR-WaDb_Gy6JM_r59K38/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW5kZXBlbmRl/bnQuY28udWsvMjAy/My8wOS8wOS8xOC8w/OS01NWFkMjI3MmE0/N2Y0MGZmOGNhMzY1/YWRmNjY5Y2NkMi5q/cGc_cXVhbGl0eT03/NSZ3aWR0aD02NDAm/Y3JvcD0zOjIsc21h/cnQmYXV0bz13ZWJw"
              height="200px"
              cover
            ></v-img>

            <v-card-title> Medvedev gets revenge </v-card-title>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
  color: #008bcc;
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
