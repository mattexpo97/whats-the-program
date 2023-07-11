<template>
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
</template>

<script setup>
defineProps({
  menu: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.isExactActive span {
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #8644ff, 0 0 0.5em #8644ff, 0 0 0.1em #8644ff, 0 10px 3px #000;
}

</style>
