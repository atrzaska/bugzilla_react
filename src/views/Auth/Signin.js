import { Link } from 'react-router-dom'
import AuthLayout from 'src/layouts/Auth'
import Form from 'src/components/form/Form'
import useSignin from 'src/hooks/useSignin'

const Signin = () => {
  const { data, error, signIn, handleInputEvent } = useSignin()

  return (
    <AuthLayout>
      <Form className="form-signin bg-white p-4" onSubmit={signIn}>
        <h3 className="mb-3 font-weight-normal">Sign in</h3>
        {error && (
          <div className="alert alert-danger">
            <p className="mb-0">Invalid e-mail or password</p>
          </div>
        )}
        <div className="mb-3">
          <input
            value={data.email}
            onChange={handleInputEvent}
            className="form-control rounded-0 rounded-top"
            id="email"
            type="email"
            placeholder="Email address"
          />
          <input
            value={data.password}
            onChange={handleInputEvent}
            className="form-control rounded-0 rounded-bottom"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              checked={data.rememberMe}
              onChange={handleInputEvent}
              id="rememberMe"
              type="checkbox"
              className="form-check-input"
            />
            <label
              htmlFor="rememberMe"
              className="d-block form-check-label font-weight-normal mb-4 text-secondary"
            >
              &nbsp;Remember me
            </label>
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-lg btn-primary w-100" type="submit">
            Sign in
          </button>
        </div>
        <Link
          className="text-secondary text-decoration-none me-1"
          to="/recover"
        >
          Forgot password?
        </Link>
        <br />
        <Link
          className="text-secondary text-decoration-none me-1"
          to="/confirm"
        >
          Didn't get confirmation email?
        </Link>
      </Form>
    </AuthLayout>
  )
}

export default Signin
