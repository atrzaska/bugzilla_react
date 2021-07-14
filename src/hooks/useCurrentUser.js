/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import useObject from 'src/hooks/async/useObject'
import API from 'src/services/requests'

const useCurrentUser = (defaultValue = {}) => {
  const { value: user, loading, setObject } = useObject(defaultValue)

  useEffect(() => {
    API.fetchCurrentUser()
      .then((res) => setObject(res.data))
      .catch((err) => setObject(defaultValue))
  }, [])

  const isLoggedIn = () => !!user.id

  return { isLoggedIn, user, loading }
}

export default useCurrentUser
