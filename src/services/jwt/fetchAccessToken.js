import { setAccessToken } from 'src/services/jwt'
import API from 'src/services/requests'

const fetchAccessToken = () =>
  fetch('/api/refresh_token', { method: 'POST' })
    .then(async (res) => {
      if (res.ok) {
        const { accessToken } = await res.json()
        setAccessToken(accessToken)
        return accessToken
      } else {
        return Promise.reject(res)
      }
    })
    .catch((err) => {
      API.clearToken()
      window.location = '/signin'
    })

export default fetchAccessToken
