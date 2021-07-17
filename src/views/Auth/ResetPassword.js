import AuthLayout from 'src/layouts/Auth'
import Loading from 'src/components/Loading'
import Form from 'src/components/form/Form'
import useObject from 'src/hooks/async/useObject'
import useEditForm from 'src/hooks/useEditForm'
import { resetPasswordSchema as schema } from 'src/services/yup'
import API from 'src/services/requests'
import { history } from 'src/router'

const ResetPassword = () => {
  const object = useObject({
    password: '',
    passwordConfirmation: '',
  })
  const { value: data, handleInputEvent } = object
  const {
    loading,
    errors,
    isValid,
    isSubmitting,
    onSubmit,
    invalidFieldClass,
    validateField,
  } = useEditForm({
    object,
    schema,
    onFetch: (id) => API.fetchResetPassword(id),
    onFetchError: () => {
      window.Toast.error('Reset password link is invalid or it has expired.')
      history.push('/')
    },
    onUpdate: (id, data) => API.updateResetPassword(id, data),
    successToast: () => 'Password reset successfully.',
    successRedirectPath: '/signin',
  })

  const handleInput = (e) => {
    handleInputEvent(e)
    validateField(e)
  }

  return (
    <AuthLayout>
      {loading ? (
        <Loading v-if="loading" />
      ) : (
        <Form v-else onSubmit={onSubmit} className="form-signin bg-white p-4">
          <h3 className="mb-3 font-weight-normal">Password Recovery</h3>
          <p className="mb-4 text-secondary">Enter your new password.</p>
          <div className="mb-3">
            <input
              value={data.password}
              onChange={handleInput}
              className={['form-control', invalidFieldClass('password')].join(
                ' '
              )}
              id="password"
              placeholder="Password"
              type="password"
            />
            {errors.value.password && (
              <div className="invalid-feedback">{errors.value.password}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              value={data.passwordConfirmation}
              onChange={handleInput}
              className={[
                'form-control',
                invalidFieldClass('passwordConfirmation'),
              ].join(' ')}
              id="passwordConfirmation"
              placeholder="Confirm Password"
              type="password"
            />
            {errors.value.passwordConfirmation && (
              <div className="invalid-feedback">
                {errors.value.passwordConfirmation}
              </div>
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
                <div>Reset Password</div>
              )}
            </button>
          </div>
        </Form>
      )}
    </AuthLayout>
  )
}

export default ResetPassword
