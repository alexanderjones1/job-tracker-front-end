// services
import * as tokenService from './tokenService'

// types
import { Job } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/jobs`

async function getAllJobs(): Promise<Job[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Job[]
  } catch (error) {
    throw error
  }
}

const create = async (formData: any): Promise<Job> => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }) 
    return await res.json() as Job
  } catch (error) {
    throw error
  }
}

async function update(jobId: number): Promise<Job> {
  const response = await fetch(`${BASE_URL}/${jobId}`, {
    method: "PUT",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to update job.");
  }
  const updatedJob: Job = await response.json();
  return updatedJob;
}


export { getAllJobs, create, update }

