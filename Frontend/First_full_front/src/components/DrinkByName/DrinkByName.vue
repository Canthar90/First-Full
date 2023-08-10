<template>
  <div v-if="!drinkStore.drinkByNameCollapseFlag">
    <drink-by-name-initial></drink-by-name-initial>
  </div>

  <div v-if="drinkStore.drinkByNameCollapseFlag">
    <drink-by-name-searched-drink />
  </div>
</template>

<script lang="ts" setup>
import DrinkByNameInitial from '@/components/DrinkByName/DrinkByNameInitial.vue'
import DrinkByNameSearchedDrink from '@/components/DrinkByName/DrinkByNameSearchedDrink.vue'

import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
</script>
