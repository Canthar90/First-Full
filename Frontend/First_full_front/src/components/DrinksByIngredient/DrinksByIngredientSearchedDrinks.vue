<template>
  <div class="text-orange-200">
    <div
      v-if="drinkStore.drinksByIngredient.end_flag"
      class="grid grid-cols-3 gap-12 justify-items-center"
    >
      <div v-for="element in drinkStore.drinksByIngredient.end_message" :key="element.idDrink">
        <div>
          <h3 class="text-xl flex items-center justify-center pb-4 text-center">
            {{ element.strDrink }}
          </h3>
          <img
            :src="element.strDrinkThumb"
            alt="Drink Image"
            class="flex items-center justify-center"
          />
        </div>
      </div>
    </div>

    <div v-if="!drinkStore.drinksByIngredient.end_flag" class="flex items-center justify-center">
      <h3 class="text-xl">Given ingredient name is invalid</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrinkStore } from '@/stores/drinks'

import TextInput from '@/components/Shared/TextInput.vue'
import ActionButton from '@/components/Shared/ActionButton.vue'

const drinkStore = useDrinkStore()
const ingredient = ref('')

const searchByIngredient = () => drinkStore.GET_DRINKS_BY_INGREDIENTS(ingredient.value)
</script>
