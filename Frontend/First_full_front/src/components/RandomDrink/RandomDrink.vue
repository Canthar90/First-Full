<template>
  <div v-if="!drinkStore.randomDrinkCollapseFlag">
    <random-drink-initial />
  </div>

  <div v-if="drinkStore.randomDrinkCollapseFlag">
    <random-drink-drink />
  </div>
</template>

<script lang="ts" setup>
import RandomDrinkInitial from '@/components/RandomDrink/RandomDrinkInitial.vue'
import RandomDrinkDrink from '@/components/RandomDrink/RandomDrinkDrink.vue'
import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
</script>
