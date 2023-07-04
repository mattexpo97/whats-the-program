import { defineStore } from 'pinia'
import { useMessage } from 'naive-ui'

export const useShowStore = defineStore('show', () => {
  const favorites = ref([])
  const message = useMessage()

  function addToFavorites(show) {
    if (!isFavorite(show)) {
      favorites.value.push(show)
      message.success(`${show.name} added to favorites`)
    }
  }

  function removeFromFavorites(show) {
    favorites.value = favorites.value.filter(s => s.id !== show.id)
    message.error(`${show.name} removed from favorites`)
  }

  function isFavorite(show) {
    return favorites.value.find(s => s.id === show.id)
  }

  return { favorites, addToFavorites, removeFromFavorites, isFavorite }
}, { persist: true })
