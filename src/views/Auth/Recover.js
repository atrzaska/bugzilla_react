import AuthLayout from 'src/layouts/Auth'
import Form from 'src/components/form/Form'
import useValue from 'src/hooks/useValue'
import useNewForm from 'src/hooks/useNewForm'
import { recoverPasswordSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'

const Recover = () => {
  const { value: data, handleInputEvent } = useValue({ email: '' })
  const {
    errors,
    isValid,
    isSubmitting,
    onSubmit,
    invalidFieldClass,
    validateField,
  } = useNewForm({
    data,
    schema,
    onCreate: (data) => API.createRecovery(data),
    successRedirectPath: '/recover/success',
  })

  const handleInput = (e) => {
    handleInputEvent(e)
    validateField(e)
  }

  return (
    <AuthLayout>
      <Form onSubmit={onSubmit} className="form-signin bg-white p-4">
        <h3 className="mb-3 font-weight-normal">Password recovery</h3>
        <p className="mb-4 text-secondary">
          Enter the email you're using for your account.
        </p>
        <div className="mb-3">
          <input
            value={data.email}
            onChange={handleInput}
            className={['form-control', invalidFieldClass('email')].join(' ')}
            id="email"
            placeholder="Email address"
            type="email"
          />
          {errors.value.email && (
            <div className="invalid-feedback">{errors.value.email}</div>
          )}
        </div>

        <div className="mb-3">
          <button
            disabled={!isValid() || isSubmitting}
            className="btn btn-lg btn-primary w-100"
            type="submit"
          >
            {isSubmitting ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div>Continue</div>
            )}
          </button>
        </div>
      </Form>
    </AuthLayout>
  )
}

export default Recover
