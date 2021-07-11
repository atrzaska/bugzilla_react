import { setState } from 'react'

const useForm = ({ errors }) => {
  const [isSubmitting, setIsisSubmitting] = setState(false)

  const submit = (promise) => {
    setIsisSubmitting(true)
    errors.setValue([])
    return promise
      .then((res) => {
        setIsisSubmitting(false)
        return res
      })
      .catch((err) => {
        setIsisSubmitting(false)

        if (err.response.status === 422) {
          errors.setValue(err.response.data.errors)
        }
      })
  }

  return { errors, isSubmitting, submit }
}

export default useForm
