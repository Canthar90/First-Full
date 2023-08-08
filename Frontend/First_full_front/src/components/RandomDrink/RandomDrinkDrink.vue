<template>
  <div class="text-orange-200">
    <h3 class="text-xl pb-4">{{ drinkStore.randomDrinkRecipe.DrinkName }}</h3>
    <img :src="drinkStore.randomDrinkRecipe.ImageUrl" alt="Drink image" class="rounded-md w-min" />
    <h2 class="text-md pt-4 pb-2">Nessesary ingredinents:</h2>
    <ul class="list-disc list-inside">
      <li v-for="ingredient in drinkStore.randomDrinkRecipe.IngredientsList" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
    <p class="pt-4 pb-12">{{ drinkStore.randomDrinkRecipe.Description }}</p>
    <div class="flex justify-end">
      <action-button text="Rerol" button-type="primary" @click="rerolDrink" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ActionButton from '@/components/Shared/ActionButton.vue'

import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
const rerolDrink = drinkStore.FETCH_RANDOM_DRINK
</script>
