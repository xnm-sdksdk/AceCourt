<template>
  <span>
    <div
      class="flex flex-row bg-blue-lighten-5 rounded-xl pa-3 max-w-xs justify-center align-center"
    >
      <RouterLink :to="{ name: 'profile' }">
        <div class="text-blue-900">
          <button class="text-center px-3">Profile</button>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'trophies' }">
        <div class="text-blue-900">
          <button class="text-center px-3">Trophies</button>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'mystats' }">
        <div class="text-blue-900">
          <button class="text-center px-3">My Stats</button>
        </div>
      </RouterLink>
    </div>
  </span>
</template>
