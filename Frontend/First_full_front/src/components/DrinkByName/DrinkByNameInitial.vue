<template>
  <h3 class="text-xl text-orange-200 pb-4">🌟 Find Your Dream Drink by Name! 🌟</h3>

  <div class="text-orange-200">
    Are you holding onto memories of that one captivating cocktail whose name escaped you? Or
    perhaps you're on a quest to reunite with an old favorite that made your taste buds swoon? Look
    no further, for "NameNectar" is here to rekindle those flames of flavor!
  </div>

  <div class="text-orange-200 pt-4 pb-4">
    🔍 Uncover the Magic: Just like scrolling through profiles on a dating site, our search feature
    lets you type in the name of the drink you desire. In an instant, the screen transforms into a
    universe of possibilities, presenting you with the precise match you've been dreaming of.
  </div>

  <form
    class="flex h12 w-full items-center rounded-3xl border border-solid bg-slate-800 border-slate-950 text-orange-200"
    @submit.prevent="searchForDrink"
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
          id="searchSentence"
          v-model.lazy.trim="searchSentence"
          placeholder="Cuba Libre"
        />
      </div>
    </div>

    <ActionButton text="Search" buttonType="primary" class="!rounded-r-3xl" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useDrinkStore } from '@/stores/drinks'
import ActionButton from '../Shared/ActionButton.vue'
import TextInput from '@/components/Shared/TextInput.vue'

const searchSentence = ref('')
const drinkStore = useDrinkStore()

const searchForDrink = () => {
  drinkStore.DRINK_BY_NAME_INIT(searchSentence.value)
}
</script>
