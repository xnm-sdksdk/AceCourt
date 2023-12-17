<template>
  <nav class="bg-white shadow-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <h1>Ace Court</h1>
      </div>
      <div class="flex items-center space-x-4">
        <button
          class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100"
        >
          Login
        </button>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div> 
    </div>
  </nav>
</template>

<script>
export default {};
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
