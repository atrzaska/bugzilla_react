import { Link } from 'react-router-dom'
import LandingLayout from 'src/layouts/Landing'
import MySideDrawer from 'src/components/MySideDrawer'

const Landing = () => {
  return (
    <LandingLayout>
      <div className="p-4 mb-3">
        <div className="jumbotron bg-white text-center mx-auto product-header py-5">
          <h1 className="display-4 pb-4">
            Bugzilla, simple and effective project management for your team
          </h1>
          <p className="lead pb-5 text-secondary">
            Collaborate with your remote team to improve what you do, guided by
            a simple workflow. And for free!
          </p>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-primary btn-lg py-3 px-5"
              to="/signup"
              role="button"
            >
              Get started
            </Link>
            <Link
              className="btn btn-outline-primary btn-lg py-3 px-5 ms-3"
              to="#howitworks"
              role="button"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
      <MySideDrawer />
      <footer className="text-center">
        <span className="me-2">Made with</span>
        <i className="fas fa-heart me-2 d-inline"></i>
        <span className="me-2">by</span>
        <Link to="/">Andrzej Trzaska</Link>
      </footer>
    </LandingLayout>
  )
}

export default Landing
