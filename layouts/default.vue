<template>
  <div>
    <header class="mx-auto w-full">
      <div class="grid grid-cols-3 justify-items-center py-4">
        <NuxtLink v-for="item in menu" :to="item.path" class="logo w-full text-center" exactActiveClass="isExactActive">
          <b class="hidden md:block">{{ item.name }}</b>
          <Icon
          :name="item.icon"
          class="w-7 h-7 !md:hidden text-white"
        />
        </NuxtLink>
      </div>
    </header>
    <slot />
  </div>
</template>

<script setup>
const menu = [
  {
    name: 'What\'s the program?',
    path: '/',
    icon: 'eva:home-outline',
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

<style scoped>
.isExactActive b {
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #8644ff, 0 0 0.5em #8644ff, 0 0 0.1em #8644ff, 0 10px 3px #000;
}

.isExactActive svg {
  color: #8644ff;
} 
</style>
