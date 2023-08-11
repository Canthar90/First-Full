export interface randomDrink {
  Description: string
  DrinkName: string
  FullMessage: string
  ImageUrl: string
  Ingredients: string
  IngredientsList: string[]
  Recipe: string
}

export interface drinksByIngredient {
  end_flag: boolean
  end_message: string[]
}
