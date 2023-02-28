// assets
import defaultPic from '../../assets/icons/profile.png'

// types
import { Job } from '../../types/models'
import { Profile } from '../../types/models'

// styles
import styles from './JobCard.module.css'

interface JobCardProps {
  job: Job,
}

const JobCard = (props: JobCardProps): JSX.Element => {
  const { job } = props
  console.log(job.stillHiring)

  return (
    <main className={styles.Container}>
      <h1>{job.title}</h1>
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
  )
}

export default JobCard