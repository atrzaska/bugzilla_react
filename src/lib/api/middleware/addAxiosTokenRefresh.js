import axios from 'axios'
import fetchAccessToken from 'src/services/jwt/fetchAccessToken'
import isTokenValidOrUndefined from 'src/services/jwt/isTokenValidOrUndefined'

axios.interceptors.request.use(async (config) => {
  if (!isTokenValidOrUndefined()) {
    const accessToken = await fetchAccessToken()
    config.headers['Authorization'] = `Bearer ${accessToken}`
  }

  return config
})
