import AuthLayout from 'src/layouts/Auth'
import useSignup from 'src/hooks/useSignup'
import useFrontendValidation from 'src/hooks/useFrontendValidation'
import { signUpSchema as schema } from 'src/services/yup'

const Signup = () => {
  const { data, errors, signUp, isSubmitting, handleInputEvent } = useSignup()
  const { isValid, invalidFieldClass, validateField, validateForm } =
    useFrontendValidation({
      data,
      errors,
      schema,
    })

  const onSubmit = (e) => {
    e.preventDefault()
    validateForm() && signUp()
  }

  const handleInput = (e) => {
    handleInputEvent(e)
    validateField(e)
  }

  return (
    <AuthLayout>
      <form onSubmit={onSubmit} className="form-signin bg-white p-4">
        <h3 className="mb-3 font-weight-normal">Get started free today</h3>
        <p className="mb-4 text-secondary">No credit card required</p>
        <div className="mb-3">
          <input
            value={data.name}
            onChange={handleInput}
            className={[
              'form-control',
              'rounded-0',
              'rounded-top',
              invalidFieldClass('name'),
            ].join(' ')}
            id="name"
            autoComplete="name"
            placeholder="Name"
            type="text"
            autoFocus
          />
          {errors.value.name && (
            <div className="invalid-feedback">{errors.value.name}</div>
          )}
          <input
            value={data.email}
            onChange={handleInput}
            className={[
              'form-control',
              'rounded-0',
              invalidFieldClass('email'),
            ].join(' ')}
            id="email"
            autoComplete="username"
            placeholder="Email address"
            type="email"
          />
          {errors.value.email && (
            <div className="invalid-feedback">{errors.value.email}</div>
          )}
          <input
            value={data.password}
            onChange={handleInput}
            className={[
              'form-control',
              'rounded-0',
              'rounded-bottom',
              invalidFieldClass('password'),
            ].join(' ')}
            id="password"
            autoComplete="new-password"
            placeholder="Password 8+ characters"
            type="password"
          />
          {errors.value.password && (
            <div className="invalid-feedback">{errors.value.password}</div>
          )}
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              checked={data.termsAccepted}
              onChange={handleInput}
              className={[
                'form-check-input',
                invalidFieldClass('termsAccepted'),
              ].join(' ')}
              id="termsAccepted"
              type="checkbox"
            />
            <label
              htmlFor="termsAccepted"
              className="d-block form-check-label font-weight-normal text-secondary"
            >
              &nbsp;I agree to Bugzilla&nbsp;
              <a href="/terms" target="_blank">
                Terms&nbsp;
              </a>
              and&nbsp;
              <a href="/privacy" target="_blank">
                Privacy Policy
              </a>
            </label>
            {errors.value.termsAccepted && (
              <div className="invalid-feedback">
                {errors.value.termsAccepted}
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              checked={data.newsletterSubscribed}
              onChange={handleInputEvent}
              id="newsletterSubscribed"
              className="form-check-input"
              type="checkbox"
            />
            <label
              htmlFor="newsletterSubscribed"
              className="d-block form-check-label font-weight-normal text-secondary"
            >
              &nbsp;I agree to receive Bugzilla news and updates.
            </label>
          </div>
        </div>
        <div className="mb-3">
          <button
            className="btn btn-lg btn-primary w-100"
            type="submit"
            disabled={!isValid() || isSubmitting}
          >
            {isSubmitting ? (
              <div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>Get started now</div>
            )}
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Signup
