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
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    }) 
    return await res.json() as Job
  } catch (error) {
    throw error
  }
}

export { getAllJobs, create }
