import { useState } from 'react'

const useForm = ({ errors }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = (promise) => {
    setIsSubmitting(true)
    errors.setValue([])
    return promise
      .then((res) => {
        setIsSubmitting(false)
        return res
      })
      .catch((err) => {
        setIsSubmitting(false)

        if (err.response.status === 422) {
          errors.setValue(err.response.data.errors)
        }
      })
  }

  return { errors, isSubmitting, submit }
}

export default useForm
