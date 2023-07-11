<template>
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
.isExactActive svg {
  color: #8644ff;
}
</style>
