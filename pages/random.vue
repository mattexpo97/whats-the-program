<template>
  <div>
    <div v-if="show"  class="flex flex-col items-center justify-center w-full">
      <n-button type="primary" ghost class="my-12" @click="getRandomShow">Try again</n-button>
      <ShowsItem :show="show" />
    </div>
    <div v-else class="flex flex-col items-center justify-center">
      <span>
        Vous n'avez pas encore de favoris
      </span>
      <span>
        :(
      </span>
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
