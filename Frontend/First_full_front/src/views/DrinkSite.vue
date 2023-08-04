<template>
  <body class="px-2">
    <div class="pt-16 grid grid-cols-3 justify-center">
      <figure class="mt-8 bg-slate-800 rounded-xl md:p-8 col-start-2 justify-center">
        <div class="text-white col-start-2 flex justify-end">
          <action-button
            text="I feel Lucky"
            buttonType="primary"
            @click="randomDrink"
          ></action-button>
        </div>

        <div v-if="drinkStore.randomDrinkCollapseFlag">OOOOOOOOOOO</div>
      </figure>
    </div>
  </body>
</template>

<script lang="ts" setup>
import ActionButton from '@/components/Shared/ActionButton.vue'
import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
const randomDrink = drinkStore.RANDOM_DRINK_INIT
</script>
