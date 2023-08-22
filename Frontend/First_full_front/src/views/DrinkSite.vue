<template>
  <body class="px-2">
    <div class="pt-16 grid grid-cols-10 gap-x-12 lg:gap-x-24 justify-center pb-10">
      <figure
        class="mt-8 bg-slate-800 rounded-xl p-8 col-start-1 sm:col-start-2 md:col-start-3 lg:col-start-4 col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-4 justify-center gap-x-6"
      >
        <random-drink></random-drink>
      </figure>

      <figure
        class="mt-8 bg-slate-800 rounded-xl p-8 col-start-4 md:col-start-2 col-span-4 md:col-span-8 justify-center gap-x-6"
      >
        <drink-by-name />
      </figure>

      <figure
        class="mt-8 bg-slate-800 rounded-xl -8 col-start-4 md:col-start-2 col-span-4 md:col-span-8 justify-center gap-x-6"
      >
        <drinks-by-ingredient />
      </figure>
    </div>
  </body>
</template>

<script lang="ts" setup>
import RandomDrink from '@/components/RandomDrink/RandomDrink.vue'
import DrinkByName from '@/components/DrinkByName/DrinkByName.vue'
import DrinksByIngredient from '@/components/DrinksByIngredient/DrinksByIngredient.vue'
</script>
