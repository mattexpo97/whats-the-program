<template>
  <div class="overflow-y-hidden relative">
    <ShowsFilters
      :sortOptions="sortOptions"
      :runtimeOptions="runtimeOptions"
      :genreOptions="genreOptions"
      @updatedSearch="search = $event"
      @updatedSortBy="sortBy = $event"
      @updatedRuntimeFilter="runtimeFilter = $event"
      @updatedGenreFilter="genreFilter = $event"
    />
    <div
      v-if="ShowStore.favorites?.length && filteredAndSortedShows?.length"
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
      class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <p v-if="!ShowStore.favorites?.length" class="w-full text-4xl text-center text-white px-8 -translate-y-20">
        You don't have any favorites yet <br> :(
      </p>
      <p v-else class="w-full text-4xl text-center text-white px-8 -translate-y-20">
        No results were found for your search <br> :(
      </p>
    </div>
  </div>
</template>

<script setup>
import { useShowStore } from '~/stores/shows'

const ShowStore = useShowStore()
const { sort } = useHelpers()
const { filterByRuntime } = useHelpers()

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

const genreOptions = computed(() => {
  const genres = []
  filteredAndSortedShows.value.forEach(show => {
    genres.push(...show.genres)
  })
  return [...new Set(genres)]
    .map(genre => { return { label: genre, value: genre } })
    .sort((a, b) => a.label.localeCompare(b.label))
})

const filterByTitleDescription = (show, search) => {
  if (!search) return true
  const searchLower = search.toLowerCase()
  return show.name.toLowerCase().includes(searchLower) || show.summary.toLowerCase().includes(searchLower)
}

const filteredAndSortedShows = computed(() => {
  return sort(sortBy.value, ShowStore.favorites)
    .filter(show => filterByRuntime(show, runtimeFilter.value))
    .filter(show => filterByTitleDescription(show, search.value))
    .filter(show => !genreFilter.value?.length || genreFilter.value.every(r => show.genres.indexOf(r) >= 0))
})
</script>
