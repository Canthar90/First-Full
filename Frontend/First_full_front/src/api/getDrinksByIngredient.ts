import axios from 'axios'

import type { drinksByIngredient } from '@/api/types'

const getDrinksByIngredient = async (ingredient: string) => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}backend/search/${ingredient}`

  const response = await axios.get<drinksByIngredient>(url)
  return response.data
}

export default getDrinksByIngredient
