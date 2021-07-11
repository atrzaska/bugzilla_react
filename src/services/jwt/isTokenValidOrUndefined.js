import jwtDecode from 'jwt-decode'
import { getAccessToken } from 'src/services/jwt'

const isTokenValidOrUndefined = () => {
  const token = getAccessToken()

  if (!token) {
    return true
  }

  try {
    const { exp } = jwtDecode(token)
    return Date.now() < exp * 1000
  } catch {
    return false
  }
}

export default isTokenValidOrUndefined
