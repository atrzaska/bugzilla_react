import { NavLink } from 'react-router-dom'

const Tab = ({ to, children }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to={to}>
        {children}
      </NavLink>
    </li>
  )
}

export default Tab
