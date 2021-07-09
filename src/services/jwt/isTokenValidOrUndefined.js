import jwtDecode from 'jwt-decode'
import { getAccessToken } from '@/services/jwt'

const isTokenValidOrUndefined = () => {
  const token = getAccessToken()

  if (!token) {
    return true
  }

  try {
    const { exp } = jwtDecode(token)
    if (Date.now() >= exp * 1000) {
      return false
    } else {
      return true
    }
  } catch {
    return false
  }
}

export default isTokenValidOrUndefined
