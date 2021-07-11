/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import useObject from 'src/hooks/useObject'
import API from 'src/services/requests'

const useCurrentUser = (defaultValue = {}) => {
  const { object: user, setObject, loading } = useObject(defaultValue)

  useEffect(() => {
    API.fetchCurrentUser()
      .then((res) => setObject(res.data))
      .catch(() => setObject(defaultValue))
  }, [])

  const isLoggedIn = () => !!user.id

  return { isLoggedIn, user, loading }
}

export default useCurrentUser
