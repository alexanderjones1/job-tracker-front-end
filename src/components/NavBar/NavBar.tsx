// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

// styles
import styles from './NavBar.module.css'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <main className={styles.Container}>

      <nav>
        {user ?
          <ul>
            <li>Welcome, {user.name}</li>
            <li><NavLink to="/">Landing</NavLink></li>
            <li><NavLink to="/profiles">Profiles</NavLink></li>
            <li><NavLink to="/jobs">Jobs</NavLink></li>
            <li><NavLink to="/jobs/new">Post Job Opening</NavLink></li>
            <li><NavLink to="/change-password">Change Password</NavLink></li>
            <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          </ul>
        :
          <ul>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
        }
      </nav>
    </main>
  )
}

export default NavBar
