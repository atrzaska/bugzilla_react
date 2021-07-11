import { Link } from 'react-router-dom'
import API from 'src/services/requests'
import useCurrentUser from 'src/hooks/useCurrentUser'
import { history } from 'src/router'

const Header = () => {
  const { user } = useCurrentUser()

  const onLogout = () => API.logout().then(() => history.push('/signin'))

  return (
    <header
      className="
      header
      d-flex
      align-items-center
      px-3
      border-bottom
      shadow-sm
      bg-white
    "
    >
      <Link to="/dashboard" className="me-auto">
        <img height="24" src="/images/bootstrap.svg" width="24" alt="pic" />
      </Link>
      <div className="dropdown">
        <button
          className="btn btn-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            className="rounded-circle"
            height="32"
            src={user.photoUrl || '/images/nobody.jpg'}
            with="32"
            alt="pic"
          />
        </button>
        <div className="dropdown-menu dropdown-menu-end">
          <div className="d-flex align-items-center px-3">
            <img
              className="rounded-circle me-3"
              height="80"
              with="80"
              src={user.photoUrl || '/images/nobody.jpg'}
              alt="pic"
            />
            <div className="d-flex flex-column">
              <b>{user.name}</b>
              <div className="text-secondary">{user.email}</div>
            </div>
          </div>
          <div className="dropdown-divider" />
          <Link to="/users/settings" className="dropdown-item">
            Profile
          </Link>
          <Link to="/help" className="dropdown-item">
            Help
          </Link>
          <button onClick={onLogout} className="dropdown-item">
            Log out
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
