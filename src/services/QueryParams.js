const QueryParams = {
  get: (key) => new URL(window.location).searchParams.get(key),
  set: (params) => {
    const url = new URL(window.location)

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value)
    }

    window.history.pushState({}, '', url)
  },
}

export default QueryParams
