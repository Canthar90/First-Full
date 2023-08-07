import axios from 'axios'

import type { randomDrink } from './types'

const getDrink = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}backend/random-drink`

  const response = await axios.get<randomDrink>(url)
  return response.data
}

export default getDrink
