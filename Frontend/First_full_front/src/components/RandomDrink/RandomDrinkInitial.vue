<template>
  <div class="text-orange-200">
    Are you tired of the same old drinks and looking for an exciting new fling for your taste buds?
    Look no further, because we have the ultimate concoction of romance and mixology waiting just
    for you!
  </div>
  <div class="text-orange-200 pt-4 pb-4">
    Introducing "Mix & Mingle" - your go-to drink recipe matchmaker that will sweep you off your
    feet and leave you thirsting for more! Our random drink recipe generator is like a dating site
    for your taste buds, creating delightful and unexpected connections that will leave you wanting
    to say, "Cheers!"
  </div>

  <div class="text-white col-start-2 flex justify-end px-12">
    <action-button text="Find Your Match" buttonType="primary" @click="randomDrink"></action-button>
  </div>
</template>

<script lang="ts" setup>
import ActionButton from '@/components/Shared/ActionButton.vue'

import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
const randomDrink = drinkStore.RANDOM_DRINK_INIT
</script>
