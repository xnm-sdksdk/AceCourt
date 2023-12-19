<template>
  <footer class="flex bg-slate-100 text-white p-6">
    <div class="container mx-auto">
      <h2>Ace Court</h2>

      <div class="flex flex-col md:flex-row md:items-center mb-4">
        <RouterLink :to="{ name: 'about' }">
          <p class="text-gray-800 hover:underline mb-2 md:mb-0 md:mr-4">
            About Us
          </p>
        </RouterLink>
        <p class="text-gray-800 mb-2 md:mb-0 md:mr-4">Privacy Policy</p>
        <p class="text-gray-800 mb-2 md:mb-0 md:mr-4">Terms of Service</p>
      </div>

      <div class="w-90">
        <hr class="border-gray-800 my-4" />
      </div>

      <p class="text-gray-800 text-left">&copy; 2023 Ace Court</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-family: "Karla", sans-serif;
  font-weight: 1000;
  font-style: italic;
  color: #0f3972;
  font-size: 20pt;
  margin-bottom: 5px;
}
</style>
