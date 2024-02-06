// npm modules
import { NavLink } from 'react-router-dom'

// css
import './NavBar.module.css'

const NavBar = () => {
  return ( 
    <nav>
      <NavLink to='/starships'>Starship List</NavLink>
    </nav>
  )
}

export default NavBar;