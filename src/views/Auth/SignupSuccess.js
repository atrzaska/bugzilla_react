import { Link } from 'react-router-dom'
import AuthLayout from 'src/layouts/Auth'

const SignupSuccess = () => {
  return (
    <AuthLayout>
      <div className="form-signin text-center pt-4">
        <h1>Check your email</h1>
        <p className="text-secondary">
          We've sent confirmation instructions to your email address.&nbsp;
          <strong>
            If no email is received within ten minutes, check that the submitted
            address is correct.
          </strong>
        </p>
        <p className="text-secondary">
          <Link to="/confirm">Resend confirmation</Link>
          &nbsp;or find more information in&nbsp;
          <Link to="/help">Help center</Link>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignupSuccess
