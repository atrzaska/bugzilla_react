import { Link } from 'react-router-dom'
import AuthLayout from 'src/layouts/Auth'

const RecoverSuccess = () => {
  return (
    <AuthLayout>
      <div className="form-signin text-center pt-4">
        <h1>Thank you!</h1>
        <p className="text-secondary">
          We've sent password reset instructions to your email address.
          <strong>
            If no email is received within ten minutes, check that the submitted
            address is correct.
          </strong>
        </p>
        <Link className="btn btn-lg btn-primary w-100" to="/signin">
          Back to Sign in
        </Link>
      </div>
    </AuthLayout>
  )
}

export default RecoverSuccess
