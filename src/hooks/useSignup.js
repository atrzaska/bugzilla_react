import API from 'src/services/requests'
import useValue from 'src/hooks/useValue'
import { history } from 'src/router'
import { useState } from 'react'

const useSignup = () => {
  const errors = useValue({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { value: data, handleInputEvent } = useValue({
    name: '',
    email: '',
    password: '',
    termsAccepted: false,
    newsletterSubscribed: true,
  })

  const signUp = () => {
    setIsSubmitting(true)
    errors.setValue([])
    API.signUp(data)
      .then((res) => {
        setIsSubmitting(false)
        history.push('/signup/success')
      })
      .catch((err) => {
        setIsSubmitting(false)
        if (err.response.status === 422) {
          errors.setValue(err.response.data.errors)
        }
      })
  }

  return { data, errors, signUp, isSubmitting, handleInputEvent }
}

export default useSignup
