<template>
  <div class="text-orange-200">
    <div class="flex justify-end pb-8">
      <font-awesome-icon
        :icon="['fas', 'x']"
        class="text-xl"
        role="button"
        @click="closeSearchDrinkByIngredient"
      >
      </font-awesome-icon>
    </div>
    <h3 class="flex justify-center text-xl pb-12">
      Drinks with {{ drinkStore.drinksByIngredientSearchWord }}:
    </h3>
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
            role="button"
            @click="searchDrinkDetails(element.strDrink)"
          />
        </div>
      </div>
    </div>

    <div v-if="!drinkStore.drinksByIngredient.end_flag" class="flex items-center justify-center">
      <h3 class="text-xl">Given ingredient name is invalid</h3>
    </div>

    <form
      class="flex h12 w-full items-center rounded-3xl border border-solid bg-slate-800 border-slate-950 text-orange-200 mt-12"
      @submit.prevent="searchByIngredient"
      role="form"
    >
      <font-awesome-icon
        :icon="['fas', 'search']"
        class="ml-4 mr-3 text-xl text-orange-300"
      ></font-awesome-icon>
      <div class="flex h-full flex-1 flex-nowrap text-base font-light">
        <div class="relative flex h-full flex-1 items-center pr-3">
          <text-input
            class="text-orange-200 bg-inherit"
            id="ingredient"
            v-model.lazy.trim="ingredient"
            placeholder="Milk"
          />
        </div>
      </div>

      <action-button text="Search" buttonType="primary" class="!rounded-r-3xl" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDrinkStore } from '@/stores/drinks'

import TextInput from '@/components/Shared/TextInput.vue'
import ActionButton from '@/components/Shared/ActionButton.vue'

const drinkStore = useDrinkStore()
const ingredient = ref('')

const closeSearchDrinkByIngredient = () => drinkStore.CLOSE_DRINKS_BY_INGREDIENTS()

const searchByIngredient = () => {
  drinkStore.GET_DRINKS_BY_INGREDIENTS(ingredient.value)
}

const searchDrinkDetails = (drinkName: string) => {
  drinkStore.GET_DRINK_BY_NAME(drinkName)
  drinkStore.drinkByNameCollapseFlag = true
}
</script>
