<template>
  <div class="gap-4 grid grid-cols-1 md:grid-cols-4 px-8 mb-12 mt-10 md:mb-12 md:mt-16">
    <n-input v-model:value="search" type="text" placeholder="Search" @update:value="val => emit('updatedSearch', val)" clearable />
    <n-select v-model:value="sortBy" :options="sortOptions" @update:value="val => emit('updatedSortBy', val)" class="aaaa" />
    <n-select v-model:value="runtimeFilter" :options="runtimeOptions" @update:value="val => emit('updatedRuntimeFilter', val)" />
    <n-select v-model:value="genreFilter" :options="genreOptions" placeholder="Genres" clearable multiple @update:value="val => emit('updatedGenreFilter', val)" />
  </div>
</template>

<script setup>
import { NSelect, NInput } from 'naive-ui'

const props = defineProps({
  sortOptions: { type: Array, required: true },
  runtimeOptions: { type: Array, required: true },
  genreOptions: { type: Array, required: true },
})

const search = ref('')
const sortBy = ref(props.sortOptions?.[0].value)
const runtimeFilter = ref(props.runtimeOptions[0].value)
const genreFilter = ref(null)

const emit = defineEmits(['updatedSearch', 'updatedSortBy', 'updatedRuntimeFilter', 'updatedGenreFilter'])
</script>
