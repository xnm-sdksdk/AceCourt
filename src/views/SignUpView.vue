<template>
  <form @submit.prevent="createAccount">
    <div class="flex items-center justify-center h-screen">
      <div class="max-w-xl mx-auto bg-white rounded p-8 shadow-md">
        <h2 class="text-2xl font-semibold mb-4 flex justify-center">Sign Up</h2>

        <!-- Name Input -->
        <div class="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            v-model.trim="name"
          />
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            v-model.trim="email"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-4 relative">
          <input
            id="password"
            name="password"
            placeholder="Password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            :type="showPassword ? 'text' : 'password'"
            v-model.trim="password"
          />
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            @click="togglePasswordVisibility"
          >
            <img v-if="!showPassword" src="../assets/seePass.svg" alt="" />
            <img v-if="showPassword" src="../assets/hidePass.svg" alt="" />
          </div>
        </div>

        <!-- Type of User Select -->
        <div class="mb-4">
          <!-- Type of User Select -->
          <div class="mb-4 relative">
            <select
              id="userType"
              name="userType"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              v-model="typeUser"
            >
              <option value="" disabled selected>Type of user</option>
              <option value="Tennis Enthusiast">Tennis Enthusiast</option>
              <option value="Sports Bettor">Sports Bettor</option>
              <option value="Youth Player">Youth Player</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
            >
              <img src="@/assets/arrowSelect.svg" alt="" />
            </div>
          </div>
        </div>

        <!-- Button Sign Up -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
        >
          Sign Up
        </button>

        <!-- Linha "Or" -->
        <div class="my-6 flex items-center">
          <div class="border-t border-gray-300 flex-grow mr-3"></div>
          <span class="text-gray-500">Or</span>
          <div class="border-t border-gray-300 flex-grow ml-3"></div>
        </div>

        <!-- Button Login -->
        <RouterLink :to="{ name: 'login' }">
          <button
            class="w-full bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-700"
          >
            Log In
          </button>
        </RouterLink>
      </div>
    </div>
  </form>
</template>

<script>
import { useUserStore } from "@/stores/user.js";
export default {
  data() {
    return {
      showPassword: false,
      name: "",
      email: "",
      password: "",
      typeUser: "",
      userStore: useUserStore(),
    };
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    createAccount() {
      try {
        this.userStore.register(
          this.name,
          this.email,
          this.password,
          this.typeUser
        );
        this.$router.push({ name: "login" });
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    },
  },
};
</script>

<style scoped></style>
