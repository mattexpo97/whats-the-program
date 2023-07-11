<template>
  <div class="bg-gradient-to-b from-20% from-black/10 via-50% via-black/50 to-100% to-black/100">
    <div class="relative">
      <PartialsHeader :menu="menu" />
    </div>
    <div class="md:mt-20">
      <slot />
    </div>
    <PartialsFooter :menu="menu" />
  </div>
</template>

<script setup>
const menu = [
  {
    name: 'What\'s the program?',
    path: '/',
    icon: 'ph:house-bold',
  },
  {
    name: 'Random',
    path: '/random',
    icon: 'fe:random',
  },
  {
    name: 'Favorites',
    path: '/favorites',
    icon: 'eva:heart-outline',
  },
]
</script>
