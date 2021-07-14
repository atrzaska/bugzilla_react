import { history } from 'src/router'
import { useParams } from 'react-router-dom'
import useForm from 'src/hooks/useForm'
import useFrontendValidation from 'src/hooks/useFrontendValidation'
import useValue from 'src/hooks/useValue'
import { useEffect } from 'react'

const useEditForm = ({
  id,
  object,
  schema,
  onFetch,
  onFetchError,
  onUpdate,
  onSuccess,
  successToast,
  successRedirectPath,
}) => {
  const { value: data } = object
  const errors = useValue({})
  const form = useForm({ errors })
  const validation = useFrontendValidation({ data, errors, schema })
  const urlParams = useParams()
  id = id || urlParams.id

  const onSubmit = () => {
    validation.validateForm() &&
      form.submit(onUpdate(id, data)).then((res) => {
        successRedirectPath && history.push(successRedirectPath)
        successToast && window.Toast.success(successToast(res.data))
        onSuccess && onSuccess(res.data)
      })
  }

  const fetchObject = () => {
    object.setLoading(true)
    onFetch(id)
      .then((res) => object.setObject(res.data))
      .catch((err) => onFetchError(err))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchObject, [])

  return {
    ...validation,
    ...form,
    ...object,
    validation,
    form,
    object,
    onSubmit,
  }
}

export default useEditForm
