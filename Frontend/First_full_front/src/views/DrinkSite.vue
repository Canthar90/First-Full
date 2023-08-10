<template>
  <body class="px-2">
    <div class="pt-16 grid grid-cols-10 gap-x-24 justify-center pb-10">
      <figure
        class="mt-8 bg-slate-800 rounded-xl md:p-8 col-start-4 col-span-4 justify-center gap-x-6"
      >
        <random-drink></random-drink>
      </figure>

      <figure
        class="mt-8 bg-slate-800 rounded-xl md:p-8 col-start-4 col-span-4 justify-center gap-x-6"
      >
        <drink-by-name />
      </figure>
    </div>
  </body>
</template>

<script lang="ts" setup>
import RandomDrink from '@/components/RandomDrink/RandomDrink.vue'
import DrinkByName from '@/components/DrinkByName/DrinkByName.vue'
</script>
