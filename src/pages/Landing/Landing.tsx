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
        {/* <h3 className={styles.search}>Lets see some jobs!</h3> */}
        <Link className={styles.search} to={`/jobs`}>Lets see some jobs!</Link>
        {/* <Link className={styles.Link} to={`/experiences/${id}/edit`} state={experience}>Update Exerience</Link> */}
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
