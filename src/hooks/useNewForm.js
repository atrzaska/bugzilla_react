import { history } from 'src/router'
import useForm from 'src/hooks/useForm'
import useFrontendValidation from 'src/hooks/useFrontendValidation'
import useValue from 'src/hooks/useValue'

const useNewForm = ({
  data,
  schema,
  onCreate,
  successToast,
  successRedirectPath,
  onSuccess,
}) => {
  const errors = useValue({})
  const form = useForm({ errors })
  const validation = useFrontendValidation({ data, errors, schema })

  const onSubmit = () => {
    validation.validateForm() &&
      form.submit(onCreate(data)).then((res) => {
        successRedirectPath && history.push(successRedirectPath)
        successToast && window.Toast.success(successToast(res.data))
        onSuccess && onSuccess(res.data)
      })
  }

  return { ...form, ...validation, form, validation, onSubmit }
}

export default useNewForm
