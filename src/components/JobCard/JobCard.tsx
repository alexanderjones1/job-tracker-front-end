// assets
import defaultPic from '../../assets/icons/profile.png'

// types
import { Job } from '../../types/models'
import { Profile } from '../../types/models'

interface JobCardProps {
  job: Job,
}

const JobCard = (props: JobCardProps): JSX.Element => {
  const { job } = props

  return (
    <article>
      <h1>{job.title}</h1>
      <p>{job.salary}</p>
      <p>{job.description}</p>
      <p>{job.stillHiring}</p>
    </article>
  )
}

export default JobCard