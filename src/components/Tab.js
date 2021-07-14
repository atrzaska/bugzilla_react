import { NavLink } from 'react-router-dom'

const Tab = ({ to, children }) => {
  return (
    <li class="nav-item">
      <NavLink class="nav-link" activeClassName="active" to={to}>
        {children}
      </NavLink>
    </li>
  )
}

export default Tab
