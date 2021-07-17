import React from 'react'
import Loading from 'src/components/Loading'
import Form from 'src/components/form/Form'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import useNewForm from 'src/hooks/useNewForm'
import useValue from 'src/hooks/useValue'
import { changePasswordSchema } from 'src/services/yup'
import API from 'src/services/requests'

const INITIAL_DATA = {
  currentPassword: '',
  password: '',
  passwordConfirmation: '',
}

const ChangePasswordForm = () => {
  const { value: data, handleInputEvent } = useValue(INITIAL_DATA)

  const { isSubmitting, isValid, loading, onSubmit, validation } = useNewForm({
    data,
    schema: changePasswordSchema,
    onCreate: (data) => API.updatePassword(data),
    successToast: (data) => 'Password updated successfully.',
  })

  if (loading) {
    return <Loading />
  }

  return (
    <Form onSubmit={onSubmit}>
      <Field
        value={data.currentPassword}
        onChange={handleInputEvent}
        validation={validation}
        id="currentPassword"
        label="Current password"
        type="password"
      />
      <Field
        value={data.password}
        onChange={handleInputEvent}
        validation={validation}
        id="newPassword"
        name="password"
        label="New password"
        type="password"
      />
      <Field
        value={data.passwordConfirmation}
        onChange={handleInputEvent}
        validation={validation}
        id="passwordConfirmation"
        label="Confirm new password"
        type="password"
      />
      <FormButtons
        isValid={isValid}
        isSubmitting={isSubmitting}
        ctaText="Change password"
      />
    </Form>
  )
}

export default ChangePasswordForm
