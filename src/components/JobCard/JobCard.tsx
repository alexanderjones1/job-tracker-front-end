// types
import { Job, User } from '../../types/models'

// styles
import styles from './JobCard.module.css'

interface JobCardProps {
  job: Job,
  user: User,
}

const JobCard = (props: JobCardProps): JSX.Element => {
  const { job, user } = props

  return (
    <div className={styles.jobCards}>
      <main className={styles.Container}>
        <div>
          <h1>{job.title}</h1>
        </div>
        <div>
          <p>Salary: ${job.salary}</p>
        </div>
          <p>Description: {job.description}</p>
        <div>
        </div>
        <div>
          <p>{job.stillHiring? '' : 'This job has been filled'}</p>
        </div>
      </main>
    </div>
  )
}

export default JobCard