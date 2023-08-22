import axios from 'axios'

import type { cvDataFrame } from '@/api/types'

const getCVData = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}backend/cv`

  const response = await axios.get<cvDataFrame>(url)
  return response.data
}

export default getCVData
