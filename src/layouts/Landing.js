import React from 'react'
import { Link } from 'react-router-dom'
import useCurrentUser from 'src/hooks/useCurrentUser'

const Landing = ({ children }) => {
  const { isLoggedIn } = useCurrentUser()

  document.body.className = 'bg-white'

  return (
    <React.Fragment>
      <header className="d-flex align-items-center p-4">
        <Link className="me-4" to="/">
          <img height="48" src="/images/bootstrap.svg" width="48" alt="pic" />
        </Link>
        <a className="me-4" href="mailto:hi@bugzilla.app">
          Contact us
        </a>
        <a
          className="me-4"
          href="https://github.com/atrzaska/bugzilla_ex"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <div className="me-auto" />
        {isLoggedIn() ? (
          <div>
            <Link className="btn btn-primary" to="/dashboard">
              Go to the dashboard
            </Link>
          </div>
        ) : (
          <div>
            <Link className="me-4" to="/signin">
              Log in
            </Link>
            <Link className="btn btn-primary" to="/signup">
              Sign up free →
            </Link>
          </div>
        )}
      </header>
      {children}
    </React.Fragment>
  )
}

export default Landing
