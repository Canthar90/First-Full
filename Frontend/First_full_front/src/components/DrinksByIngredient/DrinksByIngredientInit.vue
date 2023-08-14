<template>
  <div class="text-orange-200 text-xl">Discover Your Ideal Drink with a Twist!</div>

  <div class="text-orange-200 pt-2">
    Unveil a whole new world of taste exploration with our innovative ingredient-based search
    function. Looking for a drink that matches your preferred ingredient? Look no further - our
    "MixFinder" feature is your passport to finding the perfect drink match.
  </div>

  <div class="text-orange-200 text-xl pt-4">🔍 How It Works:</div>
  <div class="text-orange-200 pt-2 pb-4">
    Simply enter the ingredient that tickles your fancy, whether it's zesty lime, velvety chocolate,
    or exotic coconut. In a matter of seconds, "MixFinder" will conjure up a curated selection of
    drink names and captivating images that feature your chosen ingredient.
  </div>
  <form
    class="flex h12 w-full items-center rounded-3xl border border-solid bg-slate-800 border-slate-950 text-orange-200"
    @submit.prevent="searchByName"
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

    <action-button text="Search" type="secondary" class="!rounded-r-3xl"></action-button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import TextInput from '@/components/Shared/TextInput.vue'
import ActionButton from '@/components/Shared/ActionButton.vue'
import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()
const ingredient = ref('')

const searchByName = () => drinkStore.DRINKS_BY_INGREDIENTS_INIT(ingredient.value)
</script>
