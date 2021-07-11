/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import useObject from 'src/hooks/async/useObject'
import API from 'src/services/requests'

const useCurrentUser = (defaultValue = {}) => {
  const { object: user, loading, setValue } = useObject(defaultValue)

  useEffect(() => {
    API.fetchCurrentUser()
      .then((res) => setValue(res.data))
      .catch(() => setValue(defaultValue))
  }, [])

  const isLoggedIn = () => !!user.value.id

  return { isLoggedIn, user, loading }
}

export default useCurrentUser
