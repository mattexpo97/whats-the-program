export const useHelpers = () => {

  const sort = (prop, arr) => {
    const sortOrder = prop.startsWith('-') ? -1 : 1
    prop = prop.replace('-', '').split('.')
    const len = prop.length
  
    arr.sort(function(a, b) {
      let i = 0
      while (i < len) {
        a = a[prop[i]]
        b = b[prop[i]]
        i++
      }
  
      if (a < b) return -1 * sortOrder
      else if (a > b) return 1 * sortOrder
      else return 0
    })
  
    return arr
  };

  const filterByRuntime = (show, runtime) => {
    if (runtime === 'all') return true
    if (runtime === 'short') return show.averageRuntime < 25
    if (runtime === 'medium') return show.averageRuntime >= 25 && show.averageRuntime < 50
    if (runtime === 'long') return show.averageRuntime >= 50
  }

  return { sort, filterByRuntime }
}
