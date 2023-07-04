export const useApi = () => {
  const fetchShows = async (search = null) => {
    if (search?.length) {
      return await $fetch(`https://api.tvmaze.com/search/shows?q=${search}`, { transform: data => data.show })
    }
    return await $fetch('https://api.tvmaze.com/shows')
  }

  return { fetchShows }
}
