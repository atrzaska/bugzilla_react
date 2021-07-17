import React from 'react'
import Loading from 'src/components/Loading'
import Form from 'src/components/form/Form'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import useEditForm from 'src/hooks/useEditForm'
import useObject from 'src/hooks/async/useObject'
import { changeEmailSchema } from 'src/services/yup'
import API from 'src/services/requests'

const EmailForm = () => {
  const object = useObject({ email: '', password: '' })
  const { value: data, handleInputEvent } = object
  const { isSubmitting, isValid, loading, onSubmit, validation } = useEditForm({
    object,
    schema: changeEmailSchema,
    onFetch: () => API.fetchCurrentUser({ fields: 'email' }),
    onUpdate: (id, data) => API.updateEmail(data),
    successToast: (data) => 'Email updated successfully.',
  })

  if (loading) {
    return <Loading />
  }

  return (
    <Form onSubmit={onSubmit}>
      <Field
        value={data.email}
        onChange={handleInputEvent}
        validation={validation}
        id="email"
        label="Email"
      />
      <Field
        value={data.password}
        onChange={handleInputEvent}
        validation={validation}
        id="password"
        label="Current password"
      />
      <FormButtons
        isValid={isValid}
        isSubmitting={isSubmitting}
        ctaText="Change email"
      />
    </Form>
  )
}

export default EmailForm
