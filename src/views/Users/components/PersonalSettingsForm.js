import Loading from 'src/components/Loading'
import Form from 'src/components/form/Form'
import Field from 'src/components/form/Field'
import FormButtons from 'src/components/form/FormButtons'
import useEditForm from 'src/hooks/useEditForm'
import useObject from 'src/hooks/async/useObject'
import { settingsSchema } from 'src/services/yup'
import API from 'src/services/requests'

const PersonalSettingsForm = () => {
  const object = useObject({
    name: '',
    newsletterSubscribed: false,
  })
  const { value: data, handleInputEvent } = object
  const {
    errors,
    invalidFieldClass,
    isSubmitting,
    isValid,
    loading,
    onSubmit,
    validation,
  } = useEditForm({
    object,
    schema: settingsSchema,
    onFetch: () =>
      API.fetchCurrentUser({ fields: 'name,newsletterSubscribed' }),
    onUpdate: (id, data) => API.updateCurrentUser(data),
    onSuccess: () => window.location.reload(),
  })

  const handleFileUpload = (e) => (data.avatar = e.target.files[0])

  if (loading) {
    return <Loading />
  }
  return (
    <Form onSubmit={onSubmit}>
      <Field
        value={data.name}
        onChange={handleInputEvent}
        validation={validation}
        id="name"
        label="Name"
      />
      <div className="mb-3">
        <label htmlFor="avatar" className="form-label">
          Avatar
        </label>
        <input
          onChange={handleFileUpload}
          className="form-control"
          type="file"
          id="avatar"
        />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            checked={data.newsletterSubscribed}
            onChange={handleInputEvent}
            className={[
              'form-check-input',
              invalidFieldClass('newsletterSubscribed'),
            ].join(' ')}
            id="newsletterSubscribed"
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="newsletterSubscribed">
            Receive news and updates
          </label>
          {errors.value.newsletterSubscribed && (
            <div className="invalid-feedback">
              {errors.value.newsletterSubscribed}
            </div>
          )}
        </div>
      </div>
      <FormButtons isValid={isValid} isSubmitting={isSubmitting} />
    </Form>
  )
}

export default PersonalSettingsForm
