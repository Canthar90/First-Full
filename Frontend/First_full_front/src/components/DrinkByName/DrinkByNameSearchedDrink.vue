<template>
  <div class="text-orange-200">
    <div class="flex justify-end">
      <font-awesome-icon
        :icon="['fas', 'x']"
        class="text-xl"
        role="button"
        @click="closeSearchDrinkByName"
      ></font-awesome-icon>
    </div>
    <h3 class="text-xl pb-4">{{ drinkStore.drinkByName.DrinkName }}</h3>
    <div class="flex justify-center">
      <img :src="drinkStore.drinkByName.ImageUrl" alt="Drink image" class="rounded-md w-[80%]" />
    </div>

    <h2 class="text-md pt-4 pb-2">Nessesary ingredinents:</h2>
    <ul class="list-disc list-inside">
      <li v-for="ingredient in drinkStore.drinkByName.IngredientsList" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
    <p class="pt-4 pb-12">{{ drinkStore.drinkByName.Description }}</p>
    <form
      class="flex h12 w-full items-center rounded-3xl border border-solid bg-slate-800 border-slate-950 text-orange-200"
      @submit.prevent="searchForDrink"
    >
      <font-awesome-icon
        :icon="['fas', 'search']"
        class="ml-4 mr-3 text-xl text-orange-300"
      ></font-awesome-icon>
      <div class="flex h-full flex-1 flex-nowrap text-base font-light">
        <div class="relative flex h-full flex-1 items-center pr-3">
          <text-input
            class="text-orange-200 bg-inherit"
            id="searchSentence"
            v-model.lazy.trim="searchSentence"
            placeholder="Cuba Libre"
          />
        </div>
      </div>

      <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '../Shared/TextInput.vue'

import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
const searchSentence = ref('')

const closeSearchDrinkByName = drinkStore.CLOSE_SEARCH_DRINK_BY_NAME
const searchForDrink = () => {
  drinkStore.GET_DRINK_BY_NAME(searchSentence.value)
}
</script>
