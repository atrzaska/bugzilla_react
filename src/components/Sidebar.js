import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isActive = (path) =>
    window.location.pathname.match(new RegExp(path, 'i'))

  const linkClass = (path) =>
    [
      'sidebar-item',
      'd-flex',
      'justify-content-center',
      'align-items-center',
      isActive(path) ? 'sidebar-item-active' : '',
    ].join(' ')

  return (
    <aside className="sidebar d-flex justify-content-center justify-content-sm-start align-items-center align-items-sm-start flex-sm-column">
      <div className="sidebar-header d-none d-sm-block" />
      <Link to="/dashboard" className={linkClass('/dashboard')}>
        <i className="fas fa-desktop text-secondary"></i>
      </Link>
      <Link to="/projects" className={linkClass('/projects')}>
        <i className="fas fa-table text-secondary"></i>
      </Link>
    </aside>
  )
}

export default Sidebar
