// npm packages
import { useState, useEffect } from 'react'

// services
import * as jobService from '../../services/jobService'

// types
import { Job } from '../../types/models'

const Jobs = (): JSX.Element => {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect((): void => {
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

  if(!jobs.length) return <p>No jobs yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the jobs.</h1>
      {jobs.map((job: Job) =>
        <p key={job.id}>{job.title}</p>
      )}
    </>
  )
}

export default Jobs