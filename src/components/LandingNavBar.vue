<template>
  <nav class="bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <RouterLink :to="{ name: 'home' }">
          <h1>Ace Court</h1>
        </RouterLink>
      </div>
      <div class="flex items-center space-x-4">
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
export default {

}
</script>

<style>

</style>