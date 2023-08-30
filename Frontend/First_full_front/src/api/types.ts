export interface randomDrink {
  Description: string
  DrinkName: string
  FullMessage: string
  ImageUrl: string
  Ingredients: string
  IngredientsList: string[]
  Recipe: string
}

export interface message {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
}

export interface drinksByIngredient {
  end_flag: boolean
  end_message: message[]
}

export interface cvDataContactInfo {
  Age: number
  City: string
  Email: string
  Phone: string
}

export interface cvDataEducation {
  Degree: string
  'Thesis Topic': string
  University: string
  Year: string
}

export interface cvDataExperience {
  Company: string
  Duration: string
  Position: string
  Responsibilities: string[]
}

export interface cvDataSkill {
  Percentage: string
  Skill: string
}

export interface cvDataFrame {
  'Contact Information': cvDataContactInfo
  Education: cvDataEducation[]
  'Full Name': string
  Github: string
  Hobbies: string
  LinkedIn: string
  Resume: cvDataExperience[]
  Skills: Array<cvDataSkill>
  Summary: string[]
  Title: string
}
