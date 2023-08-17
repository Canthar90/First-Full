<template>
  <div v-if="!drinkStore.drinksByIngriedientCollapseFlag"><drinks-by-ingredient-init /></div>

  <div v-if="drinkStore.drinksByIngriedientCollapseFlag">
    <drinks-by-ingredient-searched-drinks />
  </div>
</template>

<script lang="ts" setup>
import DrinksByIngredientInit from './DrinksByIngredientInit.vue'
import DrinksByIngredientSearchedDrinks from './DrinksByIngredientSearchedDrinks.vue'

import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
</script>
