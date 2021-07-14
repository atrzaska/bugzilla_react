import { history } from 'src/router'
import { useParams } from 'react-router-dom'
import useForm from 'src/hooks/useForm'
import useFrontendValidation from 'src/hooks/useFrontendValidation'
import useObject from 'src/hooks/async/useObject'
import useValue from 'src/hooks/useValue'

const useEditForm = ({
  id,
  data,
  schema,
  onFetch,
  onFetchError,
  onUpdate,
  onSuccess,
  successToast,
  successRedirectPath,
}) => {
  const errors = useValue({})
  const form = useForm({ errors })
  const validation = useFrontendValidation({ data, errors, schema })
  const object = useObject(data)
  const urlParams = useParams()
  id = id || urlParams.id

  const onSubmit = () => {
    validation.validateForm() &&
      form.submit(onUpdate(id, data.value)).then((res) => {
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

  fetchObject()

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
