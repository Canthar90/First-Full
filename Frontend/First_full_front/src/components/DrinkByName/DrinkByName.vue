<template>
  <div ref="drinkByNameWrapper">
    <drink-by-name-initial v-if="!drinkStore.drinkByNameCollapseFlag"></drink-by-name-initial>

    <drink-by-name-searched-drink v-if="drinkStore.drinkByNameCollapseFlag" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import DrinkByNameInitial from '@/components/DrinkByName/DrinkByNameInitial.vue'
import DrinkByNameSearchedDrink from '@/components/DrinkByName/DrinkByNameSearchedDrink.vue'

import { useDrinkStore } from '@/stores/drinks'

const drinkStore = useDrinkStore()

const drinkByNameWrapper = ref<HTMLDivElement>()

const elementVisible = computed(() => {
  return drinkStore.drinkByNameCollapseFlag && drinkStore.drinkByNameHosenOne
})

watch(
  () => elementVisible.value,
  () => {
    if (elementVisible.value && drinkStore.drinkByNameHosenOne !== '') {
      drinkByNameWrapper.value?.scrollIntoView({ behavior: 'smooth' })
    }
  }
)
</script>
