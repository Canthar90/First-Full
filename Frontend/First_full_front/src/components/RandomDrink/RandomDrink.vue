<template>
  <div v-if="!drinkStore.randomDrinkCollapseFlag">
    <random-drink-initial />
  </div>

  <div v-if="drinkStore.randomDrinkCollapseFlag">
    <random-drink-drink />
  </div>
</template>

<script lang="ts" setup>
import ActionButton from '@/components/Shared/ActionButton.vue'
import RandomDrinkInitial from '@/components/RandomDrink/RandomDrinkInitial.vue'
import RandomDrinkDrink from '@/components/RandomDrink/RandomDrinkDrink.vue'
import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
const randomDrink = drinkStore.RANDOM_DRINK_INIT
</script>
