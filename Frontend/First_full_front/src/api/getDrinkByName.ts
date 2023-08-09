import axios from 'axios'

import type { randomDrink } from '@/api/types'

const getDrinkByName = async (drinkName: string) => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}backend/drink/${drinkName}`

  const response = await axios.get<randomDrink>(url)
  return response.data
}

export default getDrinkByName
