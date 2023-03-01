// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

// Services
import * as authService from '../../services/authService'
import { Link } from 'react-router-dom';

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = ({ user, handleLogout }: LandingProps): JSX.Element => {

  const handleDeleteAccount = async(): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }

  return (
    <main className={styles.container}>
      <div className={styles.heroDiv}>
        <h1 className={styles.welcome}>Hello {user ? user.name : 'friend'}!</h1>
        <Link className={styles.search} to={`/jobs`}>Lets see some jobs!</Link>
        { user && 
          <button onClick={handleDeleteAccount}>
            DELETE ACCOUNT
          </button>
        }
      </div>
    </main>
  )
}

export default Landing
