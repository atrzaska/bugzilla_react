import { Link } from 'react-router-dom'
import useCurrentUser from 'src/hooks/useCurrentUser'

const AuthHeader = () => {
  const { isLoggedIn } = useCurrentUser()
  const isSigninPage = window.location.pathname === '/signin'

  return (
    <header className="d-flex align-items-center p-4">
      <Link className="me-auto" to="/">
        <img height="48" src="/images/bootstrap.svg" width="48" alt="pic" />
      </Link>
      {isLoggedIn() ? (
        <Link className="btn btn-primary" to="/dashboard">
          Go to the dashboard
        </Link>
      ) : (
        <div>
          {isSigninPage ? (
            <Link className="btn btn-lg btn-outline-primary" to="/signup">
              Sign up
            </Link>
          ) : (
            <Link className="btn btn-lg btn-outline-primary" to="/signin">
              Sign in
            </Link>
          )}
        </div>
      )}
    </header>
  )
}

export default AuthHeader
