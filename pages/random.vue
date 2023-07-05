<template>
  <div class="relative">
    <div v-if="show" class="flex flex-col items-center justify-center w-full">
      <n-button color="white" ghost class="my-12" @click="getRandomShow">Try again</n-button>
      <ShowsItem :show="show" />
    </div>
    <div
      v-else
      class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <p class="w-full text-4xl text-center text-white px-8 -translate-y-20">
        You don't have any favorites yet <br> :(
      </p>
    </div>
  </div>
</template>

<script setup>
import { useShowStore } from '~/stores/shows'
import { NButton } from 'naive-ui'
const ShowStore = useShowStore()

const shows = computed(() => ShowStore.favorites)
const random = ref(Math.floor(Math.random() * shows.value.length))
const show = computed(() => shows.value[random.value])

function getRandomShow () {
  random.value = Math.floor(Math.random() * shows.value.length)
}
</script>
