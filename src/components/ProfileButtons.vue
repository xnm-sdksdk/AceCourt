<template>
  <span>
    <div
      class="flex flex-row bg-blue-lighten-5 rounded-xl pa-3 max-w-xs justify-center align-center"
    >
      <RouterLink :to="{ name: 'profile' }">
        <button>Profile</button>
      </RouterLink>
      <RouterLink :to="{ name: 'trophies' }">
        <button>Trophies</button>
      </RouterLink>
      <RouterLink :to="{ name: 'mystats' }">
        <button>My Stats</button>
      </RouterLink>
    </div>
  </span>
</template>
