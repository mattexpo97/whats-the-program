<template>
  <div class="overflow-y-hidden">
    <ShowsFilters
      :sortOptions="sortOptions"
      :runtimeOptions="runtimeOptions"
      :genreOptions="genreOptions"
      @updatedSearch="search = $event, searchShow()"
      @updatedSortBy="sortBy = $event"
      @updatedRuntimeFilter="runtimeFilter = $event"
      @updatedGenreFilter="genreFilter = $event"
    />
    <div
      v-if="filteredAndSortedShows?.length"
      class="flex items-center snap-x space-x-8 snap-mandatory overflow-scroll px-8 no-scrollbar"
    >
      <ShowsItem
        v-for="show in filteredAndSortedShows"
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
        No results were found for your search <br> :(
      </p>
    </div>
  </div>
</template>

<script setup>
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

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
