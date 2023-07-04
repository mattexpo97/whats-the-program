<template>
  <div class="overflow-y-hidden">
    <div class="gap-4 grid grid-cols-1 md:grid-cols-4 px-8 my-6 md:my-12">
        <n-input v-model:value="search" type="text" placeholder="Search" @update:value="searchShow" clearable />
        <n-select v-model:value="sortBy" :options="sortOptions" />
        <n-select v-model:value="runtimeFilter" :options="runtimeOptions" />
        <n-select v-model:value="genreFilter" :options="genreOptions" placeholder="Genres" clearable multiple />
    </div>
    <div
      v-if="filteredAndSortedShows?.length"
      class="flex items-center snap-x space-x-8 snap-mandatory overflow-scroll px-8"
    >
      <ShowsItem
        v-for="show in filteredAndSortedShows"
        v-memo="[]"
        :key="show.id"
        class="snap-center shrink-0"
        :show="show"
      />
    </div>
    <div
      v-else
      class="mt-40"
    >
      <p class="w-full text-4xl text-center text-white">
        Aucun résultat ne correspond à votre recherche <br> :(
      </p>
    </div>
  </div>
</template>

<script setup>
import { NSelect, NInput } from 'naive-ui'

const { sort } = useHelpers()
const { filterByRuntime } = useHelpers()
const { fetchShows } = useApi()

const sortOptions = [
  { label: 'Rating', value: '-rating.average' },
  { label: 'A -> Z', value: 'name' },
  { label: 'Z -> A', value: '-name' },
]

const runtimeOptions = [
  { label: 'All duration', value: 'all' },
  { label: 'Short', value: 'short' },
  { label: 'Medium', value: 'medium' },
  { label: 'Long', value: 'long' },
]

const search = ref('')
const sortBy = ref(sortOptions[0].value)
const runtimeFilter = ref(runtimeOptions[0].value)
const genreFilter = ref(null)

const { data: shows } = await useAsyncData(() => fetchShows(search.value), {
  transform: res => res.map(res => search.value ? res.show : res),
})

const debouncedFn = useDebounceFn(async () => {
  const { data: internalShows } = await useAsyncData(() => fetchShows(search.value), {
    transform: res => res.map(res => search.value ? res.show : res),
  })
  shows.value = internalShows.value
}, 1000, { maxWait: 5000 })

function searchShow () {
  debouncedFn()
}

const filteredAndSortedShows = computed(() => {
  return sort(sortBy.value, shows.value)
    .filter(show => filterByRuntime(show, runtimeFilter.value))
    .filter(show => !genreFilter.value?.length || genreFilter.value.every(r => show.genres.indexOf(r) >= 0))
})

const genreOptions = computed(() => {
  const genres = []
  filteredAndSortedShows.value.forEach(show => {
    genres.push(...show.genres)
  })
  return [...new Set(genres)]
    .map(genre => { return { label: genre, value: genre } })
    .sort((a, b) => a.label.localeCompare(b.label))
})

</script>
