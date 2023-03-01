// npm packages
import { useState, useEffect } from 'react'

// services
import * as jobService from '../../services/jobService'

// types
import { Job, User } from '../../types/models'

//components
import JobCard from '../../components/JobCard/JobCard'

// styles
import styles from './Jobs.module.css'

interface JobsProps{
  user: User
}

const Jobs = (props: JobsProps): JSX.Element => {
  const [jobs, setJobs] = useState<Job[]>([])
  const { user } = props

  useEffect(() => {
    const fetchJobs = async (): Promise<void> => {
      try {
        const jobData: Job[] = await jobService.getAllJobs()
        setJobs(jobData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchJobs()
  }, [])

  const handleUpdateJob = async (id: number): Promise<void> => {
    try {
      const updatedJobData: Job = await jobService.update(id)
      setJobs(jobs.map((j) => {
        if (j.id === updatedJobData.id) {
          return updatedJobData
        } else {
          return j
        }
      }))
    } catch (error) {
      throw error
    }
  }

  if(!jobs.length) return <p>No jobs yet</p>

  return (
    <>
      <h1 className={styles.header}>JOBS LIST</h1>
      {jobs.map((job: Job) => (
        <div className={styles.job}>

        <JobCard key={job.id} job={job} user={user}/>
        {job.stillHiring && user.profile.id === job?.profileId ?
        <>
          <button
          onClick={(evt: React.MouseEvent<HTMLButtonElement>) => handleUpdateJob(job.id)}
          >
              Filled
          </button>
        </>
        :
        <>
        </>
        }
      </div>
      ))}
    </>
  )
}


export default Jobs
