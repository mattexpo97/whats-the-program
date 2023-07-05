<template>
  <div class="bg-gradient-to-b from-20% from-black/10 via-50% via-black/50 to-100% to-black/100">
    <div class="relative">
      <header class="mx-auto w-full hidden md:block">
        <div class="flex justify-between px-12 py-8">
          <NuxtLink :to="menu[0].path" class="flex logo w-full text-center" exactActiveClass="isExactActive">
            <span style="font-size: 60px">{{ menu[0].name }}</span>
          </NuxtLink>
          <div class="flex gap-x-12">
            <NuxtLink :to="menu[1].path" class="logo w-full text-center" exactActiveClass="isExactActive">
              <span>{{menu[1].name}}</span>
            </NuxtLink>
            <NuxtLink :to="menu[2].path" class="logo w-full text-center" exactActiveClass="isExactActive">
              <span>{{menu[2].name}}</span>
            </NuxtLink>
          </div>
        </div>
      </header>
    </div>
    <div class="md:mt-20">
      <slot />
    </div>
    <footer class="mx-auto w-full block md:hidden absolute bottom-0">
      <div class="grid grid-cols-3 justify-items-center py-4">
        <NuxtLink v-for="item in menu" :to="item.path" class="logo w-full text-center" exactActiveClass="isExactActive">
          <Icon
            :name="item.icon"
            class="w-10 h-10 text-white"
          />
        </NuxtLink>
        </div>
    </footer>
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

<style scoped>
.isExactActive span {
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #8644ff, 0 0 0.5em #8644ff, 0 0 0.1em #8644ff, 0 10px 3px #000;
}

.isExactActive svg {
  color: #8644ff;
}

</style>
