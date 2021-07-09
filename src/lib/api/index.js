import axios from 'axios'
import { getAccessToken } from '@/services/jwt'
import './middleware/addAxiosTokenRefresh'
import './middleware/addErrorToast'

const withDefaults = (options = {}) => ({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  ...options,
})

const withMultipart = (options) => ({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
    'Content-Type': 'multipart/form-data',
  },
  ...options,
})

const toFormData = (data) => {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value)
  }

  return formData
}

const cache = new Map()

const cachedAxios = {
  get: async (url, options = {}) => {
    const { params } = options
    const cacheKey = JSON.stringify({ url, params })

    if (!options.refresh) {
      const cacheResult = cache.get(cacheKey)

      if (cacheResult) {
        return cacheResult
      }
    }

    const result = await axios.get(url, options)
    cache.set(cacheKey, result)

    return result
  },
}
const clearCache = (url, options = {}) => {
  const { params } = options
  const cacheKey = JSON.stringify({ url, params })

  return cache.delete(cacheKey)
}

const API = {
  get: (url, options) => cachedAxios.get(url, withDefaults(options)),
  post: (url, data, options) => axios.post(url, data, withDefaults(options)),
  postMultipart: (url, data, options) =>
    axios.post(url, toFormData(data), withMultipart(options)),
  put: (url, data, options) => axios.put(url, data, withDefaults(options)),
  putMultipart: (url, data, options) =>
    axios.put(url, toFormData(data), withMultipart(options)),
  patch: (url, data, options) => axios.patch(url, data, withDefaults(options)),
  patchMultipart: (url, data, options) =>
    axios.patch(url, toFormData(data), withMultipart(options)),
  delete: (url, options) => axios.delete(url, withDefaults(options)),
  clearCache,
}

export default API
