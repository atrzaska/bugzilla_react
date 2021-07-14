const toInvalidFields = (errors) => Object.keys(errors)
const toFullErrors = (errors) => Object.values(errors).flat()

const getFieldAndValue = (e) => {
  const target = e.target
  const isCheckbox = target.type === 'checkbox'
  let value = isCheckbox ? target.checked : target.value
  const field = target.id
  return { field, value }
}

const useFrontendValidation = ({ data, errors, schema }) => {
  const fullErrors = () => toFullErrors(errors.value)
  const invalidFields = () => toInvalidFields(errors.value)
  const isValid = () => Object.keys(errors.value).length === 0

  const invalidFieldClass = (field) =>
    invalidFields().includes(field) && 'is-invalid'

  const validateField = (e) => {
    const { field, value } = getFieldAndValue(e)
    const tmpData = { ...data, [field]: value }

    schema
      .validateAt(field, tmpData)
      .then(() => errors.setField(field, null))
      .catch((err) => errors.setField(field, err.message))
  }

  const validateForm = () => {
    try {
      schema.validateSync(data, { abortEarly: false })
      errors.setValue({})
      return true
    } catch (err) {
      err.inner.forEach((error) => errors.setField(error.path, error.message))
      return false
    }
  }

  return {
    isValid,
    fullErrors,
    invalidFields,
    invalidFieldClass,
    validateField,
    validateForm,
    errors,
  }
}

export default useFrontendValidation
