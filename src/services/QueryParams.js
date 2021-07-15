const QueryParams = {
  get: (key) => new URL(window.location).searchParams.get(key),
  set: (params) => {
    const url = new URL(window.location)

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value)
    }

    window.history.pushState({}, '', url)
  },
  setWithDefault: (key, value, defaultValue) =>
    value === defaultValue
      ? QueryParams.delete(key)
      : QueryParams.set({ [key]: value }),
  delete: (key) => {
    const url = new URL(window.location)
    url.searchParams.delete(key)
    window.history.pushState({}, '', url)
  },
}

export default QueryParams
