import { useHistory } from 'react-router-dom'
import API from 'src/services/requests'
import { setAccessToken } from 'src/services/jwt'
import { useState } from 'react'
import useValue from './useValue'

const useSignin = () => {
  const history = useHistory()
  const [error, setError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { value: data, handleInputEvent } = useValue({
    email: '',
    password: '',
    rememberMe: false,
  })

  const signIn = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)

    API.signIn(data)
      .then((res) => {
        const { accessToken } = res.data
        setAccessToken(accessToken)
        setIsSubmitting(false)
        API.clearCurrentUserCache()
        history.push('/dashboard')
      })
      .catch((err) => {
        setIsSubmitting(false)
        if (err.response.status === 422) {
          setError(true)
        }
      })
  }

  return { data, error, isSubmitting, signIn, handleInputEvent }
}

export default useSignin
