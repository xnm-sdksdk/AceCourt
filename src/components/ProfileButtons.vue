<template>
  <div class="">
    <span>
      <RouterLink :to="{ name: 'profile' }">
        <button>Profile</button>
      </RouterLink>
      <RouterLink :to="{ name: 'trophies' }">
        <button>Trophies</button>
      </RouterLink>
      <RouterLink :to="{ name: 'mystats' }">
        <button>My Stats</button>
      </RouterLink>
    </span>
  </div>
</template>
